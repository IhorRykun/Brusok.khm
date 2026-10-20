"use client";

import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import styles from "./ScrollToTop.module.css";

const SCROLL_IDLE_MS = 180;

function isScrolledEnough() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return false;
  return window.scrollY >= window.innerHeight / 2;
}

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let idleTimer = 0;
    let frame = 0;

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        window.clearTimeout(idleTimer);
        setVisible(false);

        if (!isScrolledEnough()) return;

        idleTimer = window.setTimeout(() => {
          setVisible(isScrolledEnough());
        }, SCROLL_IDLE_MS);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(idleTimer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={scrollToHeader}
      aria-label="Прокрутити вгору"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className={styles.icon}>
        <LuArrowUp aria-hidden="true" />
      </span>
    </button>
  );
};
