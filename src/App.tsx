import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}
import { Route, Routes } from "react-router-dom";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

import Activities from "./Activities";
import Apply from "./Apply";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Terms from "./Terms";
import PrivacyPolicy from "./Privacy";
import CookiePolicy from "./Cookie";
import Team from "./Team";

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
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      // @ts-ignore
      gtag("js", new Date());
      gtag("config", "G-13T3WYF71L");
    }
  }, []);

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
      </Routes>
    </>
  );
}

export default App;
