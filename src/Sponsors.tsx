import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    img: "https://assets.hackclub.com/flag-standalone-bw.svg",
    link: "https://hackclub.com",
    alt: "Hack Club",
  },
  {
    img: "https://user-images.githubusercontent.com/97467892/151880377-1c26ae86-8fbf-4874-9bb3-af7c7d050486.png",
    link: "https://github.com/education",
    alt: "Github Education",
  },
  {
    img: "https://assets.hackclub.com/hcb-light.svg",
    link: "https://hcb.hackclub.com/hackarest",
    alt: "HCB",
  },
];

const SponsorCard = ({
  img,
  link,
  alt,
}: {
  img: string;
  link: string;
  alt: string;
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-28 h-16 mx-12 flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
    whileHover={{ scale: 1.01 }}
  >
    <img
      src={img}
      alt={alt}
      className={`max-h-full max-w-full object-contain ${alt == "Github Education" || alt == "Hack Club" ? "invert" : ""}`}
    />
  </motion.a>
);

const Sponsors = ({ mobile }: { mobile: boolean }) => {
  if (mobile) {
    return (
      <div className="w-120 overflow-hidden py-10 relative">
        <h1 className="text-sm uppercase tracking-widest text-center text-muted-foreground mb-6">
          Susținut de
        </h1>

        <div className="w-full flex overflow-hidden relative">
          <div className="w-full overflow-hidden">
            <Marquee speed={10} gradient={true} gradientColor="#0E1217">
              {[...sponsors, ...sponsors].map((sponsor, i) => (
                <SponsorCard key={i} {...sponsor} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-240 overflow-hidden py-10 relative">
        <h1 className="text-sm uppercase tracking-widest text-center text-muted-foreground mb-6">
          Susținut de
        </h1>

        <div className="w-full flex overflow-hidden relative">
          <div className="w-full overflow-hidden">
            <Marquee speed={10} gradient={true} gradientColor="#0E1217">
              {[...sponsors, ...sponsors].map((sponsor, i) => (
                <SponsorCard key={i} {...sponsor} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    );
  }
};

export default Sponsors;
