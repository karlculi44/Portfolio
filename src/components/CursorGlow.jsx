import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const glow = glowRef.current;
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );

    if (!glow || !pointerQuery.matches || !motionQuery.matches)
      return undefined;

    const updateGlow = () => {
      const position = positionRef.current;
      const target = targetRef.current;
      position.x += (target.x - position.x) * 0.12;
      position.y += (target.y - position.y) * 0.12;
      glow.style.setProperty("--cursor-x", `${position.x}px`);
      glow.style.setProperty("--cursor-y", `${position.y}px`);
      frameRef.current = window.requestAnimationFrame(updateGlow);
    };

    const handlePointerMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      glow.style.setProperty("--cursor-glow-opacity", "1");
    };

    const handlePointerLeave = (event) => {
      if (!event.relatedTarget) {
        glow.style.setProperty("--cursor-glow-opacity", "0");
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerout", handlePointerLeave, {
      passive: true,
    });
    frameRef.current = window.requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerLeave);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
