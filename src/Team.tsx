import { motion } from "framer-motion";
import { FaInstagram, FaShare } from "react-icons/fa";
import { forwardRef } from "react";

import Dumi from "@/assets/Dumi.jpg";
const teamMembers = [
  {
    name: "Copăceanu Dumitru",
    role: "Fondator",
    img: Dumi,
    instagram: "https://instagram.com/dumitru_copaceanu/",
  },
  {
    name: "Capotă Cristian",
    role: "Co-Fondator",
    img: "https://media.cristoi.ro/images/pfp.png",
    instagram: "https://linkedin.com/in/ion",
    web: "https://cristoi.ro/",
  },
];

const MemberCard = ({ name, role, img, instagram, web }: {name: string, role: string, img: string, instagram: string, web?: string}) => {
  return (
    <motion.div
      className="w-64 h-80 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 border border-[#1e293b]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.42, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-[#00d8ff] shadow-md mb-4"
      />
      <h3 className="text-2xl text-white font-bold">
        {name.split(" ")[0]} <br /> {name.split(" ")[1]}
      </h3>
      <p className="text-sm text-[#00d8ff] font-mono mt-1">{role}</p>
      <div className="flex gap-4 mt-6">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#00d8ff] hover:text-white text-xl transition" />
        </a>
        {web && (
          <a href={web} target="_blank" rel="noopener noreferrer">
            <FaShare className="text-[#00d8ff] hover:text-white text-xl transition" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Team = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div className="w-full py-24 mb-40 text-white px-6 md:px-20" ref={ref}>
      <div className="text-center mb-16 relative">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#00d8ff]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Echipa Hackarest
        </motion.h1>
        <motion.p
          className="mt-2 text-white/70"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Pasionați. Dedicați. Inspirați.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, idx) => (
          <MemberCard key={idx} {...member} />
        ))}
      </div>
    </div>
  );
});

export default Team;
