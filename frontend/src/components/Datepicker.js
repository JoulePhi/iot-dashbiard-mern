import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";

export default function Datepicker({
  availableDates,
  onDateChange,
  selectedDate,
}) {
  const datePickerRef = useRef(null);

  useEffect(() => {
    flatpickr(datePickerRef.current, {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      defaultDate: selectedDate == null ? availableDates.at(-1) : selectedDate,
      enable: availableDates,
      prevArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
      onReady: (selectedDates, dateStr, instance) => {
        // onDateChange(selectedDates, dateStr, instance);
      },
      onChange: (selectedDates, dateStr, instance) => {
        onDateChange(selectedDates, dateStr, instance);
      },
    });
  }, [availableDates, onDateChange]);
  return (
    <>
      <div className="relative">
        <input
          type="date"
          id="datepicker"
          name="datepicker"
          ref={datePickerRef}
          className="form-input pl-9 dark:bg-slate-800 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium w-[15.5rem]"
        />
        <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 ml-3"
            viewBox="0 0 16 16"
          >
            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
          </svg>
        </div>
      </div>
    </>
  );
}
