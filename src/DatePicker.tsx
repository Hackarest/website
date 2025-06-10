import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "@/util/dark-date.css";

interface DatePickerProps {
  options?: flatpickr.Options.Options;
  onChange?: (selectedDates: Date[], dateStr: string) => void;
  value?: string;
}

export default function DatePicker({
  options = {},
  onChange,
  value,
}: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const today = new Date();
      const maxDate = today.toISOString().split("T")[0];
      const minDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate(),
      );

      const fp = flatpickr(input, {
        ...options,
        maxDate,
        minDate,
        disableMobile: true,
        onChange: (selectedDates, dateStr) => {
          onChange?.(selectedDates, dateStr);
        },
      });

      if (value !== undefined) {
        fp.setDate(value, false);
      }

      return () => {
        fp.destroy();
      };
    }
  }, [options, onChange, value]);

  return (
    <input
      ref={inputRef}
      value={value ?? ""}
      readOnly
      className="[appearance:none] bg-primary text-white text-sm placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-transparent focus:border-[#00d8ff] outline-none transition-all duration-200"
      placeholder="Selectează o dată"
    />
  );
}
