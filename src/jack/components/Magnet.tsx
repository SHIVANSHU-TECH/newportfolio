"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Check if within padding boundary
    const inZone =
      e.clientX >= rect.left - padding &&
      e.clientX <= rect.right + padding &&
      e.clientY >= rect.top - padding &&
      e.clientY <= rect.bottom + padding;

    if (inZone) {
      setActive(true);
      ref.current.style.transition = activeTransition;
      ref.current.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      ref.current.style.willChange = "transform";
    } else {
      setActive(false);
      ref.current.style.transition = inactiveTransition;
      ref.current.style.transform = "translate3d(0,0,0)";
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setActive(false);
    ref.current.style.transition = inactiveTransition;
    ref.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: active ? "transform" : "auto" }}
    >
      {children}
    </div>
  );
}
