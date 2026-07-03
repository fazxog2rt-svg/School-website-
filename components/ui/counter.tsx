"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import * as React from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      node.textContent = value.toLocaleString("id-ID") + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString("id-ID") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration, reduce]);

  return <span ref={ref}>0{suffix}</span>;
}
