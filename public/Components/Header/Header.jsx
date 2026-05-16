import styles from "./Header.module.css";
import { Container } from "../Container/Container";

import Link from "next/link";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.ContainerFlex}>
          <Link href="/about">
            <h2 className={styles.headerTitle}>BRUSOK</h2>
          </Link>
          <ul className={styles.headerList}>
            <Link href="/about">
              <li className={styles.headerItem}>Про нас</li>
            </Link>
            <Link href="/wood">
              <li className={styles.headerItem}>Пилометріали</li>
            </Link>
            <Link href="/works">
              <li className={styles.headerItem}>Покрівельні роботи</li>
            </Link>
            <Link href="delivery">
              <li className={styles.headerItem}>Доставка</li>
            </Link>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
