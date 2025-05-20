import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import { AnimatePresence, motion } from "framer-motion";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

import Activities from "./Activities";
import Apply from "./Apply";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Terms from "./Terms";
import PrivacyPolicy from "./Privacy";
import CookiePolicy from "./Cookie";
import Team from "./Team";
import Dashboard from "./Dashboard";
import UserPage from "./User";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const ManagerRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  if (user.publicMetadata?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    const offsetTop = sectionRefs.current[index]?.offsetTop;
    const offset = 100;
    if (offsetTop !== undefined) {
      window.scrollTo({ top: offsetTop - offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const [cookieConsent, setCookieConsent] = useState(false);
  const [cookiePopup, setCookiePopup] = useState(false);

  const acceptCookie = () => {
    setCookieConsent(true);
    localStorage.setItem("cookieAccepted", "true");
    setCookiePopup(false);
  };

  const denyCookie = () => {
    setCookieConsent(false);
    localStorage.setItem("cookieAccepted", "false");
    setCookiePopup(false);
  };

  useEffect(() => {
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted === null) {
      setCookiePopup(true);
    } else if (cookieAccepted == "true") {
      setCookieConsent(true);
    }
  }, []);

  useEffect(() => {
    if (cookieConsent === true) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-13T3WYF71L";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-13T3WYF71L");
    }
  }, [cookieConsent]);

  const hackarestAppearance = {
    variables: {
      colorPrimary: "#00d8ff",
      colorBackground: "#0e1217",
      colorText: "#f1f5f9",
      colorTextSecondary: "#a3a3a3",
      fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      borderRadius: "0.75rem",
      shadow: "0 4px 32px 0 rgba(0, 216, 255, 0.10)",
    },
    elements: {
      card: {
        backgroundColor: "#181c23",
        backdropFilter: "blur(8px)",
        padding: "2rem",
        boxShadow: "0 4px 32px 0 rgba(0, 216, 255, 0.10)",
        border: "1px solid #23272f",
      },
      headerTitle: {
        color: "#00d8ff",
        fontWeight: "800",
        letterSpacing: "0.01em",
      },
      headerSubtitle: {
        color: "#a3a3a3",
        fontWeight: "500",
      },
      socialButtonsBlockButton: {
        backgroundColor: "#23272f",
        color: "#f1f5f9",
        borderRadius: "0.5rem",
        border: "1px solid #23272f",
      },
      socialButtonsBlockButton__providerName: {
        color: "#f1f5f9",
      },
      formFieldInput: {
        backgroundColor: "#14181f",
        color: "#f1f5f9",
        borderColor: "#1e293b",
        borderRadius: "0.5rem",
        fontWeight: "500",
      },
      formButtonPrimary: {
        backgroundColor: "#00d8ff",
        color: "#0e1217",
        fontWeight: "700",
        borderRadius: "0.5rem",
        boxShadow: "0 2px 8px 0 rgba(0, 216, 255, 0.15)",
        border: "1px solid #00d8ff",
      },
      formButtonPrimary__hover: {
        backgroundColor: "#17c964",
        color: "#0e1217",
        border: "1px solid #17c964",
      },
      footer: {
        color: "#a3a3a3",
        fontSize: "0.95rem",
      },
      formFieldLabel: {
        color: "#a3a3a3",
        fontWeight: "600",
      },
      formFieldHintText: {
        color: "#00d8ff",
        fontSize: "0.9rem",
      },
      formFieldErrorText: {
        color: "#f31260",
        fontWeight: "600",
      },
      dividerLine: {
        backgroundColor: "#00d8ff",
      },
      alternativeMethodsBlockButtonText: {
        color: "#00d8ff",
      },
      alternativeMethodsBlockButton: {
        color: "#0e1217",
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {cookiePopup && (
          <motion.div
            className="fixed right-5 bottom-4 w-[90%] max-w-sm rounded-xl shadow-lg border border-white/20 overflow-hidden z-[150]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div
              className="flex flex-col p-3 text-black"
              style={{ backgroundColor: "rgba(16, 20, 24, 0.98)" }}
            >
              <h1 className="font-bold text-base text-white text-center mb-1">
                Despre cookie-uri
              </h1>
              <span className="text-sm text-white text-center px-2">
                Acest site folosește cookie-uri pentru a îți îmbunătăți
                experiența și a analiza traficul.
              </span>
              <div className="w-full mt-3 flex items-center justify-evenly gap-2 px-2">
                <button
                  className="cursor-pointer bg-[#00d8ff] rounded-md py-1 px-2 text-sm font-bold w-full"
                  onClick={acceptCookie}
                >
                  Accept
                </button>
                <button
                  className="cursor-pointer border border-[#00d8ff] text-white rounded-md py-1 px-2 text-sm font-bold w-full"
                  onClick={denyCookie}
                >
                  Refuz
                </button>
              </div>
              <span className="text-gray-400 text-xs text-center mt-2 px-2">
                Vezi{" "}
                <a href="/privacy" target="_blank" className="underline">
                  politica noastră de confidențialitate
                </a>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full h-full">
              <Navbar
                activeSection={activeSection}
                onScrollToSection={scrollToSection}
              />
              <Hero
                ref={(el) => {
                  sectionRefs.current[0] = el;
                }}
              />
              <Activities
                onScrollToApply={() => scrollToSection(2)}
                ref={(el) => {
                  sectionRefs.current[1] = el;
                }}
              />
              <Apply
                ref={(el) => {
                  sectionRefs.current[2] = el;
                }}
              />
              <Team
                ref={(el) => {
                  sectionRefs.current[3] = el;
                }}
              />
              <Footer />
            </div>
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookiePolicy />} />

        <Route
          path="/sign-in/*"
          element={
            <div className="h-screen w-full flex items-center justify-center">
              <SignIn
                routing="path"
                path="/sign-in"
                appearance={hackarestAppearance}
              />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ManagerRoute>
              <Dashboard />
            </ManagerRoute>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
