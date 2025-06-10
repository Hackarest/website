import Hackapply from "@/assets/Apply.webm";
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import DatePicker from "./DatePicker";
import { Romanian } from "flatpickr/dist/l10n/ro.js";
import { useAuth } from "@clerk/clerk-react";

const Apply = forwardRef<HTMLDivElement, object>((_props, ref) => {
  const handleDateChange = (_selectedDates: Date[], dateStr: string) => {
    setDate(dateStr);
    setIsoDate(_selectedDates[0]);
  };
  const { getToken } = useAuth();

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [isoDate, setIsoDate] = useState<Date | null>(null);
  const [about, setAbout] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };
  async function sendData(event: React.FormEvent) {
    event.preventDefault();
    if (
      name == null ||
      email == null ||
      about == null ||
      date == null ||
      !isEmailValid
    )
      return;
    try {
      const token = await getToken();
      const pad = (n: number) => n.toString().padStart(2, "0");
      const formattedDate =
        isoDate &&
        `${isoDate.getFullYear()}-${pad(isoDate.getMonth() + 1)}-${pad(isoDate.getDate())}`;
      const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
      const response = await fetch(`${API_DOMAIN}/api/apply`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          about,
          dob: formattedDate,
        }),
      });
      if (response.ok) {
        setName(null);
        setEmail(null);
        setAbout(null);
        setDate(null);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        setError(true);
        setName(null);
        setEmail(null);
        setAbout(null);
        setDate(null);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }
  return (
    <div className="mx-4 md:mx-40 my-20 md:my-40" ref={ref}>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#00d8ff]"
        >
          Aplică
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1], delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 text-white text-sm md:text-base"
        >
          Te-am convins? Hai în echipa noastră!
        </motion.span>
      </div>

      <div className="flex flex-col md:flex-row h-full w-full mt-10 gap-10">
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 1 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col gap-6 p-6 md:p-8 rounded-xl bg-[#101418] w-full md:w-2/3 border border-[#1e293b] font-mono">
            <span className="text-green-400 text-sm mb-2">
              &gt; Aplică acum
            </span>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Numele tău</span>
              <input
                type="text"
                name="name"
                placeholder="ex: Andrei Popescu"
                value={name ?? ""}
                onChange={(e) => setName(e.target.value)}
                className="bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Email-ul tău
              </span>
              <input
                type="email"
                name="email"
                value={email ?? ""}
                placeholder="tu@companie.ro"
                onChange={handleEmailChange}
                className={`bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border ${
                  isEmailValid ? "border-transparent" : "border-red-500"
                } focus:border-[#00d8ff] outline-none transition-all duration-200`}
              />

              {!isEmailValid && email && (
                <span className="text-red-400 text-sm">Email invalid</span>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Data nașterii
              </span>
              <DatePicker
                value={date ?? ""}
                onChange={handleDateChange}
                options={{ dateFormat: "d/m/Y", locale: Romanian }}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Despre tine</span>
              <textarea
                rows={6}
                name="message"
                placeholder="Ce îți place să faci? Ce te pasionează?"
                value={about ?? ""}
                onChange={(e) => setAbout(e.target.value)}
                className="bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200 resize-none"
              />
            </label>
            <h1
              className={`text-sm text-center font-medium text-${error ? "red" : "green"}-400 transition-opacity duration-200 ${
                error || sent ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              &gt;{" "}
              {error
                ? "A apărut o eroare. Încearcă mai târziu"
                : "200 OK - Aplicație trimisă"}
            </h1>
            <button
              type="submit"
              className="mt-4 bg-[#00d8ff]/10 hover:bg-[#00d8ff]/20 text-[#00d8ff] font-semibold px-6 py-3 rounded-lg transition duration-200 border border-[#00d8ff]/30 hover:border-[#00d8ff]"
              onClick={sendData}
            >
              Trimite
            </button>
          </form>
        </motion.div>

        <motion.div
          className="hidden md:flex w-full md:w-1/2 items-center justify-center mt-0 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 1 }}
          viewport={{ once: true }}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={(e) => (e.target as HTMLVideoElement).pause()}
            className="max-w-full h-auto rounded-lg"
          >
            <source src={Hackapply} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
});

export default Apply;
