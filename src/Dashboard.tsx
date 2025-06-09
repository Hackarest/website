import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { FaTimesCircle, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Ping } from "ldrs/react";
import "ldrs/react/Ping.css";
import pkg from "../package.json";

export default function Dashboard() {
  const { getToken } = useAuth();
  const [applicants, setApplicants] = useState<any | null>(null);
  const [showReasonPopup, setShowReasonPopup] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(
    null,
  );
  const [denyReason, setDenyReason] = useState("");
  const [activeNotification, setActiveNotification] = useState<
    [string, string, string] | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const notify = (title: string, subtitle: string, type: string) => {
    if (type == "SUCCESS") {
      setActiveNotification(["blue", title, subtitle]);
      setTimeout(() => {
        setActiveNotification(null);
      }, 6000);
    } else {
      setActiveNotification(["red", title, subtitle]);
      setTimeout(() => {
        setActiveNotification(null);
      }, 6000);
    }
  };

  const refreshData = async () => {
    const token = await getToken();
    const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
    const response = await fetch(`${API_DOMAIN}/api/applications`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setApplicants(data);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  const doAction = async (
    action: string,
    email: string,
    reason = "Motivul nu a fost specificat",
  ) => {
    const token = await getToken();
    const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
    const response = await fetch(`${API_DOMAIN}/api/${action}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, reason }),
    });

    if (response.ok) {
      if (action == "accept") {
        notify(
          "User acceptat in club",
          `${email} a fost acceptat in club. Un email i-a fost trimis automat.`,
          "SUCCESS",
        );
      } else if (action == "deny") {
        notify(
          "User nu a fost acceptat in club",
          `Lui ${email} i-a fost respinsa cererea de a intra in club. Motiv: ${reason}`,
          "SUCCESS",
        );
      } else if (action == "remove") {
        notify(
          "User a fost scos din membri clublui",
          `${email} a fost scos din membri clubului. Un mail i-a fost transmis automat.`,
          "SUCCESS",
        );
      }
      await refreshData();
    } else {
      notify(
        "Eroare",
        `Am intampinat o eroare incercand actiunea "${action}" pe utilizatorul ${email}.`,
        "FAIL",
      );
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  function calculateAge(dobStr: string) {
    const dob = new Date(dobStr);
    const now = new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();

    if (now.getDate() < dob.getDate()) months--;
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {showReasonPopup && selectedApplicant && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 p-6 rounded-xl w-[90%] max-w-md shadow-2xl text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-4">
                Motivul respingerii lui {selectedApplicant.name}
              </h2>
              <textarea
                className="w-full p-3 rounded-lg bg-zinc-800 text-white mb-4 resize-none"
                rows={4}
                placeholder="Motivul respingerii..."
                value={denyReason}
                onChange={(e) => setDenyReason(e.target.value)}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowReasonPopup(false);
                    setSelectedApplicant(null);
                    setDenyReason("");
                  }}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  Anulează
                </button>
                <button
                  onClick={async () => {
                    await doAction(
                      "deny",
                      selectedApplicant.email,
                      denyReason || "Motivul nu a fost specificat",
                    );
                    setShowReasonPopup(false);
                    setSelectedApplicant(null);
                    setDenyReason("");
                  }}
                  className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  Trimite
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeNotification &&
          (activeNotification[0] == "blue" ? (
            <motion.div
              className="fixed right-5 bottom-5 max-w-[400px] bg-[#00d8ff] rounded-xl shadow-lg border border-white/20 overflow-hidden z-150"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="w-full flex flex-col p-4 text-black bg-[#00d8ff]">
                <h1 className="font-black text-lg">{activeNotification[1]}</h1>
                <span className="font-bold text-sm">
                  {activeNotification[2]}
                </span>
              </div>

              <motion.div
                className="h-[10px] w-full relative overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(135deg,white_25%,transparent_25%,transparent_50%,white_50%,white_75%,transparent_75%,transparent)] animate-progressBar" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="fixed right-5 bottom-5 max-w-[400px] bg-[#ff4d4d] rounded-xl shadow-lg border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-full flex flex-col p-4 text-white bg-[#ff4d4d]">
                <h1 className="font-bold text-lg">{activeNotification[1]}</h1>
                <span className="font-medium text-sm">
                  {activeNotification[2]}
                </span>
              </div>

              <motion.div
                className="h-[10px] w-full relative overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(135deg,white_25%,transparent_25%,transparent_50%,white_50%,white_75%,transparent_75%,transparent)] animate-progressBar" />
              </motion.div>
            </motion.div>
          ))}
      </AnimatePresence>

      <motion.div
        className="bg-zinc-800/70 w-[90%] max-w-6xl h-[85vh] rounded-2xl p-10 overflow-y-auto shadow-inner backdrop-blur-md border border-cyan-500/20"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
      >
        <motion.div
          className="mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-white font-extrabold text-4xl mb-1">
            Hackarest Dashboard
          </h1>
          <h2 className="text-gray-400 text-lg font-medium">
            Vizualizează cele mai noi aplicații și membri clubului.
          </h2>
        </motion.div>
        {loading && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full  flex flex-col items-center justify-center"
          >
            <Ping size="45" speed="2" color="white" />
            <h1 className="text-md font-black text-white">Incarcare date</h1>
          </motion.div>
        )}
        {error && (
          <div className="w-full  flex flex-col items-center justify-center">
            <h1 className="text-md font-black text-red-500">
              A aparut o eroare.{" "}
            </h1>
          </div>
        )}

        {applicants?.applicants.length != 0 && applicants !== null && (
          <Section
            title="Aplicații"
            list={applicants?.applicants}
            onAccept={doAction}
            onReject={setSelectedApplicant}
            setShowPopup={setShowReasonPopup}
            calculateAge={calculateAge}
          />
        )}
        {applicants?.members.length != 0 && applicants !== null && (
          <Section
            title="Membri"
            list={applicants?.members}
            readOnly
            calculateAge={calculateAge}
            onRemove={doAction}
          />
        )}
      </motion.div>

      <div className="mt-10 flex text-center items-center flex-col group">
        <span className="text-gray-400 cursor-pointer">
          Copyright &copy; 2025 Hackarest. Toate drepturile rezervare
        </span>
        <div className="flex flex-row justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
          <a href="https://github.com/Hackarest/website" target="_blank">
            <span className="text-gray-600 underline hover:text-gray-400 transition cursor-pointer">
              Repository Web
            </span>
          </a>
          <a href="https://github.com/Hackarest/api" target="_blank">
            <span className="text-gray-600 underline hover:text-gray-400 transition cursor-pointer">
              Repository API
            </span>
          </a>
          <a
            href="https://github.com/Hackarest/website/blob/main/package.json"
            target="_blank"
          >
            <span className="text-gray-600 underline hover:text-gray-400 transition cursor-pointer">
              Versiunea {pkg.version}
            </span>
          </a>
          <a
            href="https://github.com/Hackarest/website/blob/main/package.json"
            target="_blank"
          >
            <span className="text-gray-600 underline hover:text-gray-400 transition cursor-pointer">
              {Object.keys(pkg.dependencies || {}).length} de librarii folosite
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  title,
  list,
  onAccept,
  onReject,
  setShowPopup,
  readOnly = false,
  calculateAge,
  onRemove,
}: any) {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="w-full flex items-center gap-5 mb-6">
        <div className="h-[1px] bg-cyan-400 flex-1"></div>
        <h2 className="text-white font-semibold text-xl whitespace-nowrap">
          {title}
        </h2>
        <div className="h-[1px] bg-cyan-400 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list?.length ? (
          list.map((person: any, index: number) => {
            const age = calculateAge(person.dob);
            return (
              <motion.div
                key={index}
                className="bg-zinc-900 text-white rounded-2xl p-6 shadow-lg border border-cyan-400/20 hover:scale-[1.01] transition transform"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                  <p className="text-sm text-gray-300 mb-1">
                    <span className="font-semibold">Email:</span> {person.email}
                  </p>
                  <p className="text-sm text-gray-300 mb-1">
                    <span className="font-semibold">Data nașterii:</span>{" "}
                    {new Date(person.dob).toLocaleDateString("ro-RO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    ({age.years} ani și{" "}
                    {age.months === 1 ? "o lună" : `${age.months} luni`})
                  </p>
                  <p className="text-sm text-gray-300 mt-4">
                    <span className="font-semibold">Despre:</span>
                    <br />
                    {person.about}
                  </p>
                </div>
                {!readOnly && (
                  <div className="mt-6 flex gap-4">
                    <button
                      className="flex items-center gap-2 text-green-500 hover:text-green-400 transition relative group z-100"
                      onClick={() => {
                        onAccept("accept", person.email);
                      }}
                    >
                      <FaCheckCircle size={20} />
                      <Tooltip text="Aprobă aplicația" />
                    </button>
                    <button
                      className="flex items-center gap-2 text-red-500 hover:text-red-400 transition relative group z-50"
                      onClick={() => {
                        onReject(person);
                        setShowPopup(true);
                      }}
                    >
                      <FaTimesCircle size={20} />
                      <Tooltip text="Respinge aplicația" />
                    </button>
                    <a
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition relative group z-1"
                      href={`mailto:${person.email}?subject=Referitor la aplicația ta`}
                    >
                      <FaEnvelope size={20} />
                      <Tooltip text="Trimite email" />
                    </a>
                  </div>
                )}

                {readOnly && (
                  <div className="mt-6 flex gap-4">
                    <button
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition relative group"
                      onClick={() => {
                        window.location.href = `mailto:${person.email}`;
                      }}
                    >
                      <FaEnvelope size={20} />
                      <span className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white rounded px-2 py-1 text-xs pointer-events-none z-1">
                        Trimite mail
                      </span>
                    </button>

                    <button
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 transition relative group"
                      onClick={() => {
                        onRemove("remove", person.email);
                      }}
                    >
                      <FaTimesCircle size={19} />
                      <span className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white rounded px-2 py-1 text-xs pointer-events-none z-1">
                        Eliminare Membru
                      </span>
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          <div className="text-white">
            {readOnly
              ? "Nu există membri."
              : "Se încarcă sau nu există aplicații."}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <span className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white rounded px-2 py-1 text-xs pointer-events-none">
      {text}
    </span>
  );
}
