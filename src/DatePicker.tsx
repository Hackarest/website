import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "@/util/dark-date.css"

interface DatePickerProps {
  options?: flatpickr.Options.Options;
  onChange?: (selectedDates: Date[], dateStr: string) => void;
}

export default function DatePicker({ options = {}, onChange }: DatePickerProps) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const fp = flatpickr(inputRef.current, {
        ...options,
        onChange: (selectedDates, dateStr) => {
          onChange?.(selectedDates, dateStr);
        },
      });

      return () => fp.destroy();
    }

    return () => {
      if (inputRef.current) {
        const fp = flatpickr(inputRef.current, options);
        fp.destroy();
      }
    };
  }, [options, onChange]);

  return (
    <input
      ref={inputRef}
      className="bg-primary  text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200"
      placeholder="Selectează o dată"
    />
  );
}