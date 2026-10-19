"use client";

import { useEffect, useRef } from "react";
import { Container } from "../Container/Container";
import styles from "./Delivery.module.css";
import scania from "../../../img/delivery/scania.jpg";
import sprinterWhite from "../../../img/delivery/sprinter-white@2x.jpg";
import sprinterYellow from "../../../img/delivery/sprinter-yellow.jpg";

const sprinterCargo = [
  "Меблі та квартирні переїзди",
  "Будівельні матеріали",
  "Інструмент та обладнання",
  "Інтернет-замовлення та палетований товар",
  "Комерційні вантажі малого та середнього об'єму",
];

const sprinterFeatures = [
  "Маневреність, економічність і надійність",
  "Зручне заднє та бокове завантаження",
  "Швидкий рух міськими вулицями",
  "Заїзд на склади, у двори та об'єкти з обмеженим простором",
  "Оперативна подача авто",
  "Акуратне транспортування",
  "Своєчасна доставка",
];

const vehicles = [
  {
    name: "Scania R420",
    kind: "Тентований вантажний автомобіль",
    image: scania,
    alt: "Тягач Scania R420 з червоним тентованим напівпричепом",
    wide: true,
    specs: [
      { label: "Вантажопідйомність", value: "До 15 тонн" },
      { label: "Об'єм кузова", value: "52 м³", accent: true },
      { label: "Довжина", value: "7.3 м" },
      { label: "Ширина", value: "2.4 м" },
      { label: "Висота", value: "3 м" },
    ],
    cargo: [
      "Будівельні матеріали",
      "Промислові товари",
      "Обладнання",
      "Палетована продукція",
      "Негабаритні вантажі у межах допустимих норм",
    ],
    features: [
      "Тип кузова — тентований",
      "Завантаження з 4-х сторін (зад, боки, верх)",
      "Зручне завантаження/розвантаження краном та навантажувачем",
      "Гарантуємо оперативну подачу транспорту",
      "Відповідальне ставлення до вантажу",
      "Доставка в узгоджені терміни по всій Україні",
    ],
  },
  {
    name: "Mercedes-Benz Sprinter",
    kind: "Білий, довжина буди 4.8 м",
    image: sprinterWhite,
    srcSet: `${sprinterWhite.src} 2x`,
    alt: "Білий Mercedes-Benz Sprinter на парковці",
    reverse: true,
    specs: [
      { label: "Вантажопідйомність", value: "До 3 тонн" },
      { label: "Об'єм кузова", value: "15 м³", accent: true },
      { label: "Довжина", value: "4.8 м" },
      { label: "Ширина", value: "1.7 м" },
      { label: "Висота", value: "1.9 м" },
    ],
    cargo: sprinterCargo,
    features: sprinterFeatures,
  },
  {
    name: "Mercedes-Benz Sprinter",
    kind: "Білий, довжина буди 4.3 м",
    image: sprinterWhite,
    srcSet: `${sprinterWhite.src} 2x`,
    alt: "Білий Mercedes-Benz Sprinter",
    specs: [
      { label: "Вантажопідйомність", value: "До 3 тонн" },
      { label: "Об'єм кузова", value: "14 м³", accent: true },
      { label: "Довжина", value: "4.3 м" },
      { label: "Ширина", value: "1.7 м" },
      { label: "Висота", value: "1.9 м" },
    ],
    cargo: sprinterCargo,
    features: sprinterFeatures,
  },
  {
    name: "Mercedes-Benz Sprinter",
    kind: "Жовтий, довжина буди 4.2 м",
    image: sprinterYellow,
    alt: "Жовтий Mercedes-Benz Sprinter",
    reverse: true,
    specs: [
      { label: "Вантажопідйомність", value: "До 3 тонн" },
      { label: "Об'єм кузова", value: "14 м³", accent: true },
      { label: "Довжина", value: "4.2 м" },
      { label: "Ширина", value: "1.7 м" },
      { label: "Висота", value: "1.9 м" },
    ],
    cargo: sprinterCargo,
    features: sprinterFeatures,
  },
];

function SpecIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3.5h7.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M14 3.8V8h4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12h6M9 15.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 8.2 12 4.5l8 3.7v8.2L12 20.5 4 16.4V8.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 12.2 20 8.4M12 12.2 4 8.4M12 12.2V20" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 12.2 11 15l4.8-5.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.2 4.8h2.1l1.2 3-1.5 1.1a11 11 0 0 0 4.9 4.9l1.1-1.5 3 1.2v2.1c0 .8-.6 1.5-1.4 1.6A14.2 14.2 0 0 1 5.8 6.2c.1-.8.8-1.4 1.6-1.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Delivery = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const cards = listRef.current?.querySelectorAll("article");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Number(a.target.dataset.index) - Number(b.target.dataset.index)
          );

        visible.forEach((entry, step) => {
          entry.target.style.animationDelay = `${step * 0.22}s`;
          entry.target.classList.add(styles.cardShown);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroText}>
            <h1>Доставка</h1>
            <p>
              Швидка та надійна доставка по всій Україні. Власний автопарк з
              чотирма типами транспорту для будь-яких ваших потреб.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <div className={styles.list} ref={listRef}>
          {vehicles.map((vehicle, index) => (
            <article
              key={vehicle.kind}
              data-index={index}
              className={vehicle.reverse ? `${styles.card} ${styles.cardReverse}` : styles.card}
            >
              <div className={vehicle.wide ? `${styles.photo} ${styles.photoWide}` : styles.photo}>
                <img
                  src={vehicle.image.src}
                  srcSet={vehicle.srcSet}
                  alt={vehicle.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className={styles.info}>
                <h2>{vehicle.name}</h2>
                <p className={styles.kind}>{vehicle.kind}</p>

                <div className={`${styles.panel} ${styles.specs}`}>
                  <h3>
                    <SpecIcon /> Технічні характеристики
                  </h3>
                  <dl>
                    {vehicle.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt>{spec.label}</dt>
                        <dd className={spec.accent ? styles.accent : undefined}>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className={styles.panel}>
                  <h3>
                    <BoxIcon /> Що можна перевозити
                  </h3>
                  <ul className={styles.cargo}>
                    {vehicle.cargo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.panel}>
                  <h3>
                    <CheckIcon /> Особливості
                  </h3>
                  <ul className={styles.features}>
                    {vehicle.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <section className={styles.cta}>
        <Container>
          <h2>
            Зв&apos;яжіться з нами для розрахунку
            <br /> вартості доставки
          </h2>
          <p>Наші менеджери допоможуть вибрати оптимальний транспорт та розрахують точну вартість</p>
          <div className={styles.phones}>
            <a href="tel:+380977728371">
              <PhoneIcon /> +38 (097) 77 28 371
            </a>
            <a href="tel:+380978749673">
              <PhoneIcon /> +38 (097) 87 49 673
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};
