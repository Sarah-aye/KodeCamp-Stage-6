import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
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
      <div className="flex flex-col items-center justify-between bottom-0">
        <label htmlFor="days" className="text-sm">
          Days
        </label>
        <span className="font-bold">{timeLeft.days}</span>
      </div>
      <span className="text-[#DB4444] font-bold"> : </span>
      <div className="flex flex-col items-center justify-between bottom-0">
        <label htmlFor="hours" className="text-sm">
          Hours
        </label>
        <span className="font-bold">{timeLeft.hours}</span>
      </div>

      <span className="text-[#DB4444] font-bold"> : </span>
      <div className="flex flex-col items-center justify-between bottom-0">
        <label htmlFor="minutes" className="text-sm">
          Minutes
        </label>
        <span className="font-bold">{timeLeft.minutes}</span>
      </div>

      <span className="text-[#DB4444] font-bold"> : </span>
      <div className="flex flex-col items-center justify-between bottom-0">
        <label htmlFor="seconds" className="text-sm">
          Seconds
        </label>
        <span className="font-bold">{timeLeft.seconds}</span>
      </div>
    </div>
  );
}
