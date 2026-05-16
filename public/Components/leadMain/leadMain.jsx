import { Container } from "../Container/Container";
import styles from "./LeadMain.module.css";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export const LeadMain = () => {
  return (
    <main className={styles.mainContainer}>
      <Container>
        <h2 className={styles.mainTitle}>Натуральні матеріали</h2>
        <h3 className={styles.mainTitle3}>Для довговічних рішень</h3>
        <p className={styles.mainText}>
          Ми надійні партнери у світі пиломатеріалів. Наші матеріали ідеально
          підходять для будівництва, ремонту та оздоблення. Ми працюємо згідно з
          принципів якості та професіоналізму.
        </p>
        <button className={styles.mainButton}>
          Зв'язатися з нами{" "}
          <FaLongArrowAltRight className={styles.mainButtonArrow} />
        </button>
      </Container>
    </main>
  );
};
