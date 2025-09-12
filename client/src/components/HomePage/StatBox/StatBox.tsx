"use client";
import { useEffect, useState, useRef } from "react";
import { IStatBoxProp } from "./StatBox.types";

function StatBox({ Icon, number, label, duration = 2000 }: IStatBoxProp) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const num = parseInt(number);

  useEffect(() => {
    let start = 0;
    let end = num;
    let increment = end / (duration / 16);
    let frame: number;

    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        cancelAnimationFrame(frame);
      } else {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => cancelAnimationFrame(frame);
  }, [num, duration]);

  if (!ref) {
    return;
  }
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center animate-fadeUp"
    >
      <Icon size={56} className="text-primary-color mb-4" />
      <h3 className="text-3xl font-bold text-gray-900">
        {count}
        {number.replace(/\d/g, "")}
      </h3>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
}

export default StatBox;
