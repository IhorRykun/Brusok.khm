"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SectionTitleH2.module.css";

export const SectionTitleH2 = ({ children, sentence = false }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2
        ref={ref}
        className={[
          styles.sectionTitleH2,
          sentence ? styles.sentence : "",
          shown ? styles.sectionTitleShown : "",
        ]
          .filter(Boolean)
          .join(" ")}>
        {children}
      </h2>
    </div>
  );
};
