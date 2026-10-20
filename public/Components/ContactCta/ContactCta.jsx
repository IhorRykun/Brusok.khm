import { Container } from "../Container/Container";
import styles from "./ContactCta.module.css";

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

export const ContactCta = () => {
  return (
    <section className={styles.cta}>
      <Container>
        <h2>Зв&apos;яжіться з нами</h2>
        <p>
          Наші менеджери допоможуть з покрівельними роботами та розрахують
          вартість
        </p>
        <div className={styles.phones}>
          <a href="tel:+380978749673">
            <PhoneIcon /> +38 (097) 87 49 673
          </a>
        </div>
      </Container>
    </section>
  );
};
