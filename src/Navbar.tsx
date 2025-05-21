import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Hackarest from "./assets/Hackarest.png";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const Navbar = ({
  activeSection,
  onScrollToSection,
}: {
  activeSection: number | null;
  onScrollToSection: (index: number) => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const controls = useAnimation();
  const { isLoaded, user, isSignedIn } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      width: isMobile ? "100%" : scrolled ? "77%" : "80%",
      backgroundColor: scrolled
        ? "rgba(16, 20, 24, 0.6)"
        : "rgba(16, 20, 24, 1)",
      backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [scrolled, controls, isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.25,
            ease: [0.42, 0, 0.2, 1],
          }}
        >
          <motion.div
            animate={controls}
            initial={{
              height: 64,
              width: isMobile ? "100%" : "80%",
              backgroundColor: "rgba(16, 20, 24, 1)",
              backdropFilter: "blur(0px)",
            }}
            className="rounded-b-xl shadow-2xl px-10 flex items-center justify-between text-white fixed top-0 z-50"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              padding: "20px 2.5rem",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={Hackarest} alt="Logo" className="w-11 h-10" />
              <h1 className="font-bold text-xl">Hackarest</h1>
            </div>

            <div className="hidden md:flex items-center justify-center gap-5">
              <motion.span
                className={`cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 0 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => onScrollToSection(0)}
              >
                Despre Noi
              </motion.span>
              <motion.span
                className={`cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 1 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => onScrollToSection(1)}
              >
                Activități
              </motion.span>
              <motion.span
                className={`cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 2 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => onScrollToSection(2)}
              >
                Aplică
              </motion.span>
              <motion.span
                className={`cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 3 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => onScrollToSection(3)}
              >
                Echipă
              </motion.span>
            </div>
            {!isMobile && isLoaded && isSignedIn && (
              <motion.span
                className={`hidden md:block cursor-pointer hover:text-white transition font-extralight ${
                  userModal ? "text-white" : "text-gray-300"
                }`}
                onClick={() => setUserModal(!userModal)}
              >
                {user?.fullName}
              </motion.span>
            )}
            <AnimatePresence>
              {userModal && (
                <motion.div
                  className="absolute right-[2%] top-[105%] w-72 rounded-xl border border-[#00d8ff] bg-[#0e1217] p-4 shadow-xl flex flex-col gap-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: [0.42, 0, 0.2, 1] }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user?.imageUrl}
                      alt="Profile Picture"
                      className="rounded-full w-10 h-10 border border-[#00d8ff]"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">
                        {user?.fullName}
                      </span>
                      <span className="text-xs text-gray-400">
                        {user?.primaryEmailAddress?.emailAddress}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-700" />

                  <div className="flex flex-col gap-2">
                    <div
                      className="w-full h-10 bg-[#181c23] hover:bg-[#1e242d] transition-colors rounded-lg flex items-center gap-3 px-4 cursor-pointer"
                      onClick={() => navigate("/user")}
                    >
                      <RiAccountCircleLine className="w-5 h-5 text-[#00d8ff]" />
                      <span className="text-sm text-white">Contul meu</span>
                    </div>
                  </div>
                  {(user?.publicMetadata?.role === "admin" ||
                    user?.publicMetadata?.role === "manager") && (
                    <div
                      className="flex flex-col gap-2"
                      onClick={() => navigate("/dashboard")}
                    >
                      <div className="w-full h-10 bg-[#181c23] hover:bg-[#1e242d] transition-colors rounded-lg flex items-center gap-3 px-4 cursor-pointer">
                        <MdOutlineSpaceDashboard className="w-5 h-5 text-[#00d8ff]" />
                        <span className="text-sm text-white">Dashboard</span>
                      </div>
                    </div>
                  )}
                  <SignOutButton redirectUrl="/">
                    <div className="flex flex-col gap-2">
                      <div
                        className="w-full h-10 bg-[#181c23] hover:bg-[#1e242d] transition-colors rounded-lg flex items-center gap-3 px-4 cursor-pointer"
                        onClick={() => navigate("/user")}
                      >
                        <IoIosLogOut className="w-5 h-5 text-[#00d8ff]" />
                        <span className="text-sm text-white">
                          Iesi din cont
                        </span>
                      </div>
                    </div>
                  </SignOutButton>
                  <a
                    className="flex flex-col gap-2"
                    href="mailto:contact@hackarest.ro"
                  >
                    <div className="w-full h-10 bg-[#181c23] hover:bg-[#1e242d] transition-colors rounded-lg flex items-center gap-3 px-4 cursor-pointer">
                      <IoIosHelpCircleOutline className="w-5 h-5 text-[#00d8ff]" />
                      <span className="text-sm text-white">Ai o problema?</span>
                    </div>
                  </a>

                  {(user?.publicMetadata?.role === "admin" ||
                    user?.publicMetadata?.role === "manager") && (
                    <div className=" flex w-full items-center justify-center gap-2">
                      <IoWarningOutline className="w-3 h-3 text-red-500" />
                      <h1 className="text-xs text-red-500">
                        Esti logat pe un cont de {user?.publicMetadata?.role}.
                      </h1>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white text-2xl"
              >
                {isMobileMenuOpen ? "×" : "☰"}
              </button>
            </div>

            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } absolute top-16 right-0 bg-gray-800 w-64 rounded-xl shadow-lg py-4 px-6 md:hidden`}
            >
              <motion.span
                className={`block cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 0 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => {
                  onScrollToSection(0);
                  setIsMobileMenuOpen(false);
                }}
              >
                Despre Noi
              </motion.span>
              <motion.span
                className={`block cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 1 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => {
                  onScrollToSection(1);
                  setIsMobileMenuOpen(false);
                }}
              >
                Activități
              </motion.span>
              <motion.span
                className={`block cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 2 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => {
                  onScrollToSection(2);
                  setIsMobileMenuOpen(false);
                }}
              >
                Aplică
              </motion.span>
              <motion.span
                className={`block cursor-pointer hover:text-white transition font-extralight ${
                  activeSection === 3 ? "text-white" : "text-gray-300"
                }`}
                onClick={() => {
                  onScrollToSection(3);
                  setIsMobileMenuOpen(false);
                }}
              >
                Echipă
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
