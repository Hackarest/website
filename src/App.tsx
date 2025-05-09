import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { SignIn, SignUp, RedirectToUserProfile } from "@clerk/clerk-react";

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
import Applicants from "./Applicants";

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

  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === "true") {
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
  }, []);

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
      backgroundColor: "#00d8ff"
    },
    alternativeMethodsBlockButtonText: {
      color: "#00d8ff"
    },
    alternativeMethodsBlockButton: {
      color: "#0e1217"
    },

  },
};

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Refuz"
        enableDeclineButton
        onAccept={() => window.location.reload()}
        onDecline={() => window.location.reload()}
        style={{ background: "#101418" }}
        buttonStyle={{
          color: "#fff",
          background: "#17c964",
          fontSize: "13px",
          borderRadius: 5,
        }}
        declineButtonStyle={{
          color: "#fff",
          background: "#f31260",
          fontSize: "13px",
          borderRadius: 5,
        }}
      >
        Acest site folosește cookie-uri pentru a-ți îmbunătăți experiența.{" "}
        <a href="/cookie" className="font-extrabold">
          Află mai multe
        </a>
      </CookieConsent>

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
              <SignIn routing="path" path="/sign-in" appearance={hackarestAppearance} />
          </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
          <div className="h-screen w-full flex items-center justify-center">
              <SignUp routing="path" path="/sign-up" appearance={hackarestAppearance} />
          </div>
          }
        />

        <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/applicants"
        element={
          <Applicants />
        }
        />
      </Routes>
    </>
  );
}

export default App;
