'use client'

import { useState, useEffect } from "react";

function CountDown({text}: {text:string}) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const weddingDate = new Date("2026-06-21T17:30:00");
    const difference = weddingDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[90%] h-fit flex flex-row items-center justify-between text-center font-primary text-entry-text opacity-0">
        <div className="w-16 h-16 rounded-full" />
        <div className="w-16 h-16 rounded-full" />
        <div className="w-16 h-16 rounded-full" />
        <div className="w-16 h-16 rounded-full" />
      </div>
    );
  }

  return (
    <div className={`w-[90%] h-fit flex ${text} items-center justify-between text-center font-primary text-entry-text`}>
      <div className="w-16 h-16 bg-entry-bg rounded-full flex flex-col items-center justify-center">
        <p className="text-lg">{timeLeft.days}</p>
        <p className="text-[10px]">DAYS</p>
      </div>
      <div className="w-16 h-16 bg-entry-bg rounded-full flex flex-col items-center justify-center">
        <p className="text-lg">{timeLeft.hours}</p>
        <p className="text-[10px]">HOURS</p>
      </div>
      <div className="w-16 h-16 bg-entry-bg rounded-full flex flex-col items-center justify-center">
        <p className="text-lg">{timeLeft.minutes}</p>
        <p className="text-[10px]">MINUTES</p>
      </div>
      <div className="w-16 h-16 bg-entry-bg rounded-full flex flex-col items-center justify-center">
        <p className="text-lg">{timeLeft.seconds}</p>
        <p className="text-[10px]">SECONDS</p>
      </div>
    </div>
  );
}

export default CountDown;