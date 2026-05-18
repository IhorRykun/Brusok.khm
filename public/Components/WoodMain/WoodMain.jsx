import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";
import { Container } from "../Container/Container";
import styles from "./WoodMain.module.css";

export const WoodMain = () => {
  return (
    <main>
      <section className={styles.sectionMain}>
        <Container>
          <div className={styles.mainWrapper}>
            <SectionTitleH2>Пиломатеріали</SectionTitleH2>
            <p className={styles.mainText}>
              Ми спеціалізуємося на виготовленні пиломатеріалів виключно з
              деревини сосни. Ця порода деревини вирізняється своєю міцністю,
              стійкістю до зовнішніх впливів та легкою обробкою, що робить її
              ідеальним вибором для будівництва, оздоблювальних робіт. Завдяки
              природній смолистості, сосна має додатковий захист від вологи та
              шкідників, що підвищує довговічність наших виробів. Ми обираємо
              тільки якісну соснову деревину, щоб забезпечити надійність і
              екологічність нашої продукції.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
};
