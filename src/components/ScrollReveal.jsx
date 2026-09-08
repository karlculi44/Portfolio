import { createElement, useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  as: Element = "div",
  children,
  className = "",
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(element);
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    Element,
    {
      ref: elementRef,
      className: `scroll-reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      style: { "--scroll-reveal-delay": `${delay}ms` },
    },
    children,
  );
}
