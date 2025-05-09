import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import Sponsors from "./Sponsors";

import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const TerminalScreen = () => {
  const [terminalScreen, setTerminalScreen] = useState(0);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClearing(true);
      setTimeout(() => {
        setTerminalScreen((prev) => (prev + 1) % 3);
        setIsClearing(false);
      }, 100);
    }, 12500);

    return () => clearInterval(interval);
  }, []);

  if (isClearing) return <></>;

  if (terminalScreen == 1)
    return (
      <>
        <TypingAnimation className="text-white">
          &gt; curl info.hackarest.ro
        </TypingAnimation>

        <TypingAnimation delay={1500} className="text-muted-foreground">
          $$\ $$\
        </TypingAnimation>
        <TypingAnimation delay={2000} className="text-muted-foreground">
          $$ | $$ |
        </TypingAnimation>
        <TypingAnimation delay={2500} className="text-muted-foreground">
          $$ | $$ |
        </TypingAnimation>
        <TypingAnimation delay={3000} className="text-muted-foreground">
          $$$$$$$$ |
        </TypingAnimation>
        <TypingAnimation delay={3500} className="text-muted-foreground">
          $$ __$$ |
        </TypingAnimation>
        <TypingAnimation delay={4000} className="text-muted-foreground">
          $$ | $$ |
        </TypingAnimation>
        <TypingAnimation delay={4500} className="text-muted-foreground">
          $$ | $$ |
        </TypingAnimation>
        <TypingAnimation delay={5000} className="text-muted-foreground">
          \__| \__|
        </TypingAnimation>

        <AnimatedSpan delay={6000} className="text-[#6a9955]">
          <span># Descriere</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6500} className="text-white">
          <span>Hackarest = club de programare 📟</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7000} className="text-white">
          <span>↳ condus de liceeni, creat pentru liceeni</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7500} className="text-white">
          <span>↳ focus pe proiecte, comunitate & skill</span>
        </AnimatedSpan>
      </>
    );

  if (terminalScreen == 0)
    return (
      <>
        <TypingAnimation className="text-white">
          &gt; ssh admin@hackarest.ro
        </TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Se face handshake-ul. Ești în rețea.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Căutăm: creativitate + skill + chef de programat.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ S-a găsit un user compatibil: tu.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>
            ✔ Toolchain activat: gândire critică, skill, oameni faini.
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>⚠️ Aici înveți ce n-ai apucat să întrebi.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">
            - /var/database/vizitatori_interesanti.db
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={5000} className="text-muted-foreground">
          Boot complet. Welcome to dev-mode.
        </TypingAnimation>

        <TypingAnimation delay={6000} className="text-muted-foreground">
          Toate fișierele sunt deschise. Mai rămâne să le citești.
        </TypingAnimation>
      </>
    );

  if (terminalScreen == 2)
    return (
      <>
        <AnimatedSpan delay={0} className="text-[#6a9955]">
          <span># Locație</span>
        </AnimatedSpan>

        <AnimatedSpan delay={500} className="text-white">
          <span>București, România</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1000} className="text-[#6a9955]">
          <span># Rețea</span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-white">
          <span>
            Parte din{" "}
            <a href="https://hackclub.com/">
              <span className="bg-gradient-to-r from-[#ff8c37] to-[#ec3750] bg-clip-text text-transparent cursor-pointer">
                Hack Club
              </span>
            </a>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-[#6a9955]">
          <span># Social</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-white">
          <span>
            Instagram ➜{" "}
            <a
              href="https://instagram.com/hackarest"
              target="_blank"
              className="text-[#58a6ff] hover:underline"
            >
              instagram.com/hackarest
            </a>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-white">
          <span>
            Slack ➜{" "}
            <a
              href="https://slack.com/hackarest"
              target="_blank"
              className="text-[#58a6ff] hover:underline"
            >
              slack.com/hackarest
            </a>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-[#6a9955]">
          <span># Status</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-white">
          <span>✅ Activ | ✅ Gratuit | ✅ Deschis pentru toți liceenii</span>
        </AnimatedSpan>
      </>
    );
};

const Hero = forwardRef<HTMLDivElement>((_props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={ref}
        className="min-h-screen w-full px-4 py-16 flex flex-col items-center justify-center bg-primary text-white text-center relative overflow-hidden mt-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-2"
        >
          <AuroraText
            className="text-xs tracking-wide"
            colors={["#00d8ff", "#FFFFFF", "#1A1F25"]}
          >
            DEV MODE ACTIVAT / WELCOME TO HACKAREST
          </AuroraText>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-6 text-[#00d8ff]"
        >
          Sună a club, e mai mult
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6 text-base text-gray-200 leading-relaxed max-w-2xl"
        >
          <p>
            Hackarest e locul unde codul nu stă pe hârtie — se gândește, se
            tastează și se lansează. Un club de programare condus de liceeni,
            pentru liceeni.
          </p>
          <p>
            Facem parte din rețeaua globală{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text font-semibold">
              Hack Club
            </span>
            , dar stilul e al nostru: liber, creativ și serios când vine vorba
            de lucruri reale.
          </p>
          <p>
            Aici înveți, construiești și, dacă vrei, îți găsești echipa pentru
            următorul proiect mare. N-ai nevoie decât de curiozitate.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center w-full mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 0.5 }}
        >
          <Sponsors mobile={true} />
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden "
        ref={ref}
      >
        <div className="flex flex-col mx-40">
          <motion.div className="flex  w-full w-full  items-center justify-start">
            <motion.div className="text-[#00d8ff] w-1/2 ">
              <motion.div
                className="relative -translate-y-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                layout
              >
                <p className="text-white text-xl"></p>
                <AuroraText
                  className="text-xl"
                  colors={["#00d8ff", "#FFFFFF", "#1A1F25"]}
                >
                  ÎNCEPE DE AICI / DEV MODE ACTIVAT / WELCOME TO HACKAREST
                </AuroraText>
              </motion.div>
              <motion.div
                className="flex"
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{
                  duration: 0.25,
                  ease: [0.42, 0, 0.2, 1],
                  delay: 2,
                }}
              >
                <TextAnimate
                  animation="slideUp"
                  by="word"
                  className="text-4xl font-black"
                  once
                >
                  Sună a club,
                </TextAnimate>
                <TextAnimate
                  animation="slideUp"
                  by="word"
                  className="text-4xl font-black"
                  once
                  delay={1}
                >
                  &nbsp;e mai mult.
                </TextAnimate>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                layout
              >
                <p className="text-white text-xl">
                  Hackarest e locul unde codul nu stă pe hârtie — se gândește,
                  se tastează și se lansează. Un club de programare condus de
                  liceeni, pentru liceeni — fără formalități, fără „trebuie”,
                  fără limite.{" "}
                </p>
                <p className="text-white text-xl mt-3">
                  Facem parte din rețeaua globală{" "}
                  <span className="bg-gradient-to-r from-[#ff8c37] to-[#ec3750] bg-clip-text text-transparent cursor-pointer">
                    Hack Club
                  </span>{" "}
                  dar stilul e al nostru: liber, creativ și serios când vine
                  vorba de lucruri reale. Aici înveți de la alții, construiești
                  împreună cu ei și, dacă vrei, îți găsești echipa pentru
                  următorul proiect mare. N-ai nevoie decât de curiozitate și
                  chef să te apuci.
                </p>
              </motion.div>
            </motion.div>

            <div className="absolute left-[calc(50%+250px)] top-1/2 -translate-y-1/2">
              <Terminal className="bg-[#101418] border-[#0E1217] shadow-xl w-160 h-180 ">
                <TerminalScreen />
              </Terminal>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[80vh] left-1/2 transform -translate-x-1/2 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 2.5 }}
          >
            <Sponsors mobile={false} />
          </motion.div>
        </div>
      </div>
    );
  }
});

export default Hero;
