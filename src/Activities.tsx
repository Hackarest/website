import { Marquee } from "@/components/magicui/marquee";
import { TextAnimate } from "./components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";

import { motion } from "framer-motion";
import { forwardRef } from "react";

const reviews = [
  {
    name: "Hackaccino",
    body: "Construiește un website 3D și primești un frappuccino din partea noastră!",
    img: "https://cloud-ahkc8uotv-hack-club-bot.vercel.app/0group_15.png",
  },
  {
    name: "Boba Drops",
    body: "Construiește un website static folosind doar HTML și CSS și primești un Boba Tea gratuit!",
    img: "https://cloud-oil5vh30l-hack-club-bot.vercel.app/0boba_hc_toolbox.png",
  },
  {
    name: "Swirl",
    body: "Construiește un website dinamic folosind HTML, CSS și JavaScript și primești înghețată gratuit!",
    img: "https://swirl.hackclub.com/images/assets/svg/cherry.svg",
  },
  {
    name: "HackCraft",
    body: "Construiește un mod pentru Minecraft, iar noi îți cumpărăm jocul!",
    img: "https://cloud-kgilrkgl7-hack-club-bot.vercel.app/0image.png",
  },
  {
    name: "Sprig",
    body: "Construiește un joc în JavaScript și primești o consolă pe care să-l rulezi!",
    img: "https://toolbox.hackclub.com/cards/sprig.png",
  },
  {
    name: "Solder",
    body: "Creează-ți primul design pentru un circuit, iar noi îți oferim un kit de electronice!",
    img: "https://toolbox.hackclub.com/cards/solder.png",
  },
  {
    name: "Onboard",
    body: "Creează-ți primul design pentru un PCB, iar noi ți-l printăm și oferim!",
    img: "https://toolbox.hackclub.com/cards/onboard.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ActivityCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure className="relative h-full w-64 sm:w-40 md:w-36 cursor-pointer rounded-xl shadow-xl p-4 bg-[#101418]">
      <div className="absolute right-0 top-[-10px] z-10">
        <img className="" width="32" height="32" alt="" src={img} />
      </div>

      <div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-black">{name}</figcaption>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>
    </figure>
  );
};

const Activities = forwardRef<HTMLDivElement, { onScrollToApply: () => void }>(
  ({ onScrollToApply }, ref) => {
    return (
      <div
        className="mt-10 px-6 md:px-20 lg:px-40 flex flex-col text-white"
        ref={ref}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold  text-[#00d8ff]">
            Activități
          </h1>
          <span className="mt-2 text-center lg:text-left">
            Descoperă activitațile pe care le desfaășurăm la Hackarest
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-20">
          <motion.div
            className="relative flex h-120 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row items-center gap-4">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ActivityCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="hidden md:flex [--duration:20s]"
                vertical
              >
                {secondRow.map((review) => (
                  <ActivityCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                vertical
              >
                {thirdRow.map((review) => (
                  <ActivityCard key={review.name} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" vertical>
                {fourthRow.map((review) => (
                  <ActivityCard key={review.name} {...review} />
                ))}
              </Marquee>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0E1217] to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0E1217] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0E1217] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0E1217] to-transparent"></div>
          </motion.div>

          <div className="w-full md:w-3/4 lg:w-2/3 mx-auto px-4 sm:px-6 text-center lg:text-left">
            <TextAnimate
              animation="slideUp"
              by="word"
              className="text-4xl font-black mb-6"
              delay={0.5}
              once
            >
              Nu se mai termină!
            </TextAnimate>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: [0.42, 0, 0.2, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-8 mb-5">
                La Hackarest organizăm evenimente de tip
                <span className="font-bold text-[#00d8ff]">
                  {" "}
                  YSWS (You Ship, We Ship)
                </span>
                , un concept creat de Hack Club care încurajează tinerii să
                construiască proiecte reale și folositoare.
              </p>
              <p className="text-lg text-gray-300 leading-8 mb-5">
                Ideea e simplă: dacă creezi ceva — fie că e un site, o aplicație
                sau orice altceva util — noi îți oferim o recompensă pe măsură,
                complet gratuit. Nu e vorba de concursuri sau punctaje, ci
                despre inițiativă și curajul de a duce un proiect până la capăt.
              </p>
              <p className="text-lg text-gray-300 leading-8">
                <span className="font-bold text-[#00d8ff]">YSWS</span> face ca
                fiecare idee finalizată să conteze: înveți ceva nou, creezi ceva
                al tău și pleci acasă cu o experiență completă și o surpriză
                binemeritată.
              </p>
              <ShinyButton
                onClick={onScrollToApply}
                className="shadow-xl mt-4 bg-[#101418] cursor-pointer"
              >
                Aplică Acum
              </ShinyButton>
            </motion.div>
          </div>
        </div>
      </div>
    );
  },
);

export default Activities;
