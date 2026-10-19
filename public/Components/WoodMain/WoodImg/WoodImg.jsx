"use client";

import { useEffect, useState } from "react";
import { HiArrowRight, HiXMark } from "react-icons/hi2";
import styles from "./WoodImg.module.css";

export const WoodMainImg = ({
  src,
  srcSet,
  alt,
  title,
  description,
  paragraphs = [],
  prices = [],
  pros = [],
  cons = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCloseBlurred, setIsCloseBlurred] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyPaddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.width = previous.bodyWidth;
      body.style.paddingRight = previous.bodyPaddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [isModalOpen]);

  const openDetails = () => {
    setIsCloseBlurred(false);
    setIsModalOpen(true);
  };

  return (
    <div
      className={styles.card}
      onClick={(event) => {
        if (event.target.closest(`.${styles.modalOverlay}`)) return;
        openDetails();
      }}>
      <div className={styles.photo}>
        <img
          src={src.src}
          srcSet={srcSet}
          alt={alt}
          className={styles.imgWood}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <button
        type="button"
        className={styles.woodButton}
        onClick={openDetails}>
        <span>{description}</span>
        <HiArrowRight aria-hidden="true" />
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div
            className={styles.modalContent}
            onScroll={(event) => {
              const next = event.currentTarget.scrollTop > 8;
              setIsCloseBlurred((prev) => (prev === next ? prev : next));
            }}>
            <div className={styles.modalToolbar}>
              <button
                type="button"
                className={
                  isCloseBlurred
                    ? `${styles.modalClose} ${styles.modalCloseBlurred}`
                    : styles.modalClose
                }
                style={
                  isCloseBlurred
                    ? { backdropFilter: "blur(16px)" }
                    : undefined
                }
                aria-label="Закрити"
                onClick={() => {
                  setIsCloseBlurred(false);
                  setIsModalOpen(false);
                }}>
                <HiXMark aria-hidden="true" />
              </button>
            </div>
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{title}</h2>
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {prices.length > 0 && (
                <div className={styles.priceList}>
                  <h3 className={styles.priceHeading}>Прайс-лист</h3>
                  {prices.map((section) => (
                    <div key={section.title} className={styles.priceCard}>
                      <h4 className={styles.priceSection}>{section.title}</h4>
                      <table>
                        <thead>
                          <tr>
                            <th>Довжина</th>
                            <th>Ширина</th>
                            <th>Товщина</th>
                            <th>Ціна</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.rows.map((row) => (
                            <tr key={`${section.title}-${row.width}-${row.thickness}`}>
                              <td>{row.length}</td>
                              <td>{row.width}</td>
                              <td>{row.thickness}</td>
                              <td>{row.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
              {(pros.length > 0 || cons.length > 0) && (
                <div className={styles.traits}>
                  {pros.length > 0 && (
                    <div className={styles.pros}>
                      <h3>Переваги вагонки</h3>
                      <ul>
                        {pros.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cons.length > 0 && (
                    <div className={styles.cons}>
                      <h3>Недоліки дерев&apos;яної вагонки</h3>
                      <ul>
                        {cons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <a className={styles.orderButton} href="tel:+380977728371">
                Замовити
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
