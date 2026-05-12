import styles from "./Header.module.css";
import { Container } from "../Container/Container";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.ContainerFlex}>
          <h2 className={styles.headerTitle}>BRUSOK</h2>
          <ul className={styles.headerList}>
            <li className={styles.headerItem}>Про нас</li>
            <li className={styles.headerItem}>Пилометріали</li>
            <li className={styles.headerItem}>Покрівельні роботи</li>
            <li className={styles.headerItem}>Доставка</li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
