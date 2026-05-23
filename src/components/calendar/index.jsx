import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

export default function CustomDateRangePicker() {
  const [open, setOpen] = useState(false);

  const [startDate, setStartDate] = useState("2026-05-14");
  const [endDate, setEndDate] = useState("2026-05-20");

  const calendarRef = useRef(null);

  // CLOSE OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // FORMAT DATE
  const formatDate = (date) => {
    if (!date) return "";

    const options = {
      month: "short",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString(
      "en-US",
      options
    );
  };

  return (
    <div className="relative" ref={calendarRef}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-[40px]
          items-center
          gap-2
          rounded-full
          border
          border-[#E6E7EE]
          bg-white
          px-5
          text-[12px]
          font-semibold
          text-[#111827]
          shadow-sm
          transition-all
          duration-300
          hover:bg-[#F8F8FB]
        "
      >
        <CalendarDays size={15} />

        <span>
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
      </button>

      {/* CALENDAR POPUP */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-[55px]
            z-50
            w-[320px]
            rounded-[26px]
            border
            border-[#ECECF2]
            bg-white
            p-5
            shadow-[0_20px_70px_rgba(0,0,0,0.12)]
          "
        >
          {/* TITLE */}
          <h3
            className="
              mb-5
              text-[15px]
              font-bold
              text-[#111827]
            "
          >
            Select Date Range
          </h3>

          {/* START DATE */}
          <div className="mb-4">
            <label
              className="
                mb-2
                block
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#8B8FA3]
              "
            >
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) =>
                setStartDate(e.target.value)
              }
              className="
                h-[44px]
                w-full
                rounded-2xl
                border
                border-[#E6E7EE]
                bg-[#F8F8FB]
                px-4
                text-[13px]
                font-medium
                text-[#111827]
                outline-none
                transition-all
                duration-200
                focus:border-[#A995EA]
                focus:bg-white
              "
            />
          </div>

          {/* END DATE */}
          <div className="mb-5">
            <label
              className="
                mb-2
                block
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#8B8FA3]
              "
            >
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) =>
                setEndDate(e.target.value)
              }
              className="
                h-[44px]
                w-full
                rounded-2xl
                border
                border-[#E6E7EE]
                bg-[#F8F8FB]
                px-4
                text-[13px]
                font-medium
                text-[#111827]
                outline-none
                transition-all
                duration-200
                focus:border-[#A995EA]
                focus:bg-white
              "
            />
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            {/* CANCEL */}
            <button
              onClick={() => setOpen(false)}
              className="
                flex-1
                rounded-2xl
                border
                border-[#E6E7EE]
                bg-[#F5F5F8]
                py-3
                text-[12px]
                font-semibold
                text-[#8B8FA3]
                transition-all
                duration-200
                hover:bg-[#ECECF3]
              "
            >
              Cancel
            </button>

            {/* APPLY */}
            <button
              onClick={() => setOpen(false)}
              className="
                flex-1
                rounded-2xl
                bg-[#191922]
                py-3
                text-[12px]
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-200
                hover:opacity-95
              "
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}