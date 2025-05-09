import Hackarest from "./assets/Hackarest.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-neutral-800 py-10 px-6 md:px-24 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-16">
        <div className="flex flex-col items-center text-center md:text-left">
          <img src={Hackarest} alt="Hackarest Logo" className="w-10 h-10 " />
          <h1 className="font-semibold text-lg text-white">Hackarest</h1>
        </div>

        <div className="text-sm leading-relaxed text-center   max-w-md ">
          Hackarest este sponsorizat fiscal de{" "}
          <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d8ff] hover:underline"
          >
            The Hack Foundation
          </a>
          , o organizație nonprofit 501(c)(3) din SUA cu EIN 81-2908499.
          <br />© {new Date().getFullYear()} Hackarest. Toate drepturile
          rezervate.
        </div>

        <div className="flex flex-col md:items-end text-sm text-center lg:text-right justify-center">
          <a href="/privacy" className="hover:text-white transition">
            Politica de confidențialitate
          </a>
          <a href="/terms" className="hover:text-white transition">
            Termeni și condiții
          </a>
          <a
            href="https://hackclub.com/"
            className="hover:text-white transition"
          >
            Hack Club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
