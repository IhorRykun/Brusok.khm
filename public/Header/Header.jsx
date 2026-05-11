import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>BRUSOK</h2>
      <ul className={styles.headerList}>
        <li className={styles.headerItem}>Про нас</li>
        <li className={styles.headerItem}>Пилометріали</li>
        <li className={styles.headerItem}>Покрівельні роботи</li>
        <li className={styles.headerItem}>Доставка</li>
      </ul>
    </header>
  );
};
