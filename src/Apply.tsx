import Hackapply from "@/assets/Apply.webm";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import DatePicker from "./DatePicker";
import { Romanian } from "flatpickr/dist/l10n/ro.js"; 

const Apply = forwardRef<HTMLDivElement, {}>((_props, ref) => {
    // Temporary until API Release
    const handleDateChange = (_selectedDates: any, dateStr: any) => {
    console.log("Selected:", dateStr);
  };

  return (
    <div className="mx-4 md:mx-40 my-20 md:my-40" ref={ref}>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#00d8ff]"
        >
          Aplică
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1], delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 text-white text-sm md:text-base"
        >
          Te-am convins? Hai în echipa noastră!
        </motion.span>
      </div>

      <div className="flex flex-col md:flex-row h-full w-full mt-10 gap-10">
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 1 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col gap-6 p-6 md:p-8 rounded-xl bg-[#101418] w-full md:w-2/3 border border-[#1e293b] font-mono">
            <span className="text-green-400 text-sm mb-2">
              &gt; Aplică acum
            </span>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Numele tău</span>
              <input
                type="text"
                name="name"
                placeholder="ex: Andrei Popescu"
                className="bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Email-ul tău
              </span>
              <input
                type="email"
                name="email"
                placeholder="ex: tu@email.com"
                className="bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Data nașterii
              </span>
               <DatePicker
                onChange={handleDateChange}
                options={{ dateFormat: "d/m/Y", locale: Romanian, }} 
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Despre tine</span>
              <textarea
                rows={6}
                name="message"
                placeholder="Ce îți place să faci? Ce te pasionează?"
                className="bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200 resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-4 bg-[#00d8ff]/10 hover:bg-[#00d8ff]/20 text-[#00d8ff] font-semibold px-6 py-3 rounded-lg transition duration-200 border border-[#00d8ff]/30 hover:border-[#00d8ff]"
            >
              Trimite
            </button>
          </form>
        </motion.div>

        <motion.div
          className="hidden md:flex w-full md:w-1/2 items-center justify-center mt-0 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.2, 1], delay: 1 }}
          viewport={{ once: true }}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={(e) => (e.target as HTMLVideoElement).pause()}
            className="max-w-full h-auto rounded-lg"
          >
            <source src={Hackapply} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
});

export default Apply;
