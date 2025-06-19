// File: src/Calendar.jsx
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import eventsData from "./events.json";
import "dayjs/locale/en";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const startOfMonth = currentDate.startOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();
  const today = dayjs();

  const daysArray = [];
  for (let i = 0; i < startDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(dayjs(currentDate).date(i));

  const getEventsForDate = (date) => {
    return events.filter((e) => dayjs(e.date).isSame(date, "day"));
  };

  return (
    <div className="bg-black shadow rounded-lg overflow-hidden border border-yellow-600">
      <div className="flex justify-between items-center p-4 border-b border-yellow-600">
        <button
          onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
          className="text-yellow-400 font-semibold hover:text-white transition-colors"
        >
          ‹ Prev
        </button>
        <h2 className="text-xl font-bold text-yellow-400">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => setCurrentDate(currentDate.add(1, "month"))}
          className="text-yellow-400 font-semibold hover:text-white transition-colors"
        >
          Next ›
        </button>
      </div>

      <div className="grid grid-cols-7 bg-yellow-900 text-sm text-center">
        {weekdays.map((day) => (
          <div key={day} className="py-2 font-semibold text-yellow-100">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px bg-yellow-950">
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`bg-black min-h-[100px] border border-yellow-900 p-2 relative hover:bg-yellow-800 dark:hover:bg-yellow-700 transition-all`}
          >
            {date && (
              <div
                className={`text-xs font-bold mb-1 inline-block px-2 py-1 rounded-full ${
                  date.isSame(today, "day")
                    ? "bg-yellow-500 text-black"
                    : "text-yellow-300"
                }`}
              >
                {date.date()}
              </div>
            )}
            <div className="mt-1 space-y-1">
              {date &&
                getEventsForDate(date).map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-yellow-800 text-yellow-100 text-xs px-2 py-1 rounded shadow-sm hover:bg-white hover:text-black transition-colors truncate"
                    title={`${event.title} - ${event.time}`}
                  >
                    {event.title} ({event.time})
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;