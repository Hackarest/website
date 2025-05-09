import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Hackarest from "./assets/Hackarest.png";

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
  const controls = useAnimation();

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
  );
};

export default Navbar;
