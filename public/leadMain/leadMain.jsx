import styles from "./LeadMain.module.css";
import Image from "next/image";

export const LeadMain = () => {
  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.mainTitle}>Натуральні матеріали</h2>
      <h3 className={styles.mainTitle3}>Для довговічних рішень</h3>
      <p className={styles.mainText}>
        Ми надійні партнери у світі пиломатеріалів. Наші матеріали ідеально
        підходять для будівництва, ремонту та оздоблення. Ми працюємо згідно з
        принципів якості та професіоналізму.
      </p>
      <button className={styles.mainButton}>Зв'язатися з нами</button>
    </main>
  );
};
