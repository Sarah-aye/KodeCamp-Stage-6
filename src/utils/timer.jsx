import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-between gap-3 relative">
      <div className="flex flex-col items-center   rounded-full bg-gray-200 bottom-0 w-12.5 h-12.5">
        <span className="font-bold">{timeLeft.hours}</span>
        <label htmlFor="days" className="text-xs">
          Hours
        </label>
      </div>

      <div className="flex flex-col items-center rounded-full bg-gray-200 bottom-0 w-12.5 h-12.5">
        <span className="font-bold">{timeLeft.days}</span>
        <label htmlFor="hours" className="text-xs">
          Days
        </label>
      </div>

      <div className="flex flex-col items-center rounded-full bg-gray-200 bottom-0 w-12.5 h-12.5">
        <span className="font-bold">{timeLeft.minutes}</span>
        <label htmlFor="minutes" className="text-xs">
          Minutes
        </label>
      </div>

      <div className="flex flex-col items-center rounded-full bg-gray-200 bottom-0 w-12.5 h-12.5">
        <span className="font-bold">{timeLeft.seconds}</span>
        <label htmlFor="seconds" className="text-xs">
          Seconds
        </label>
      </div>
    </div>
  );
};

export default Timer;
