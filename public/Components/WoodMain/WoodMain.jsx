import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";
import { WoodMainImgWrapper } from "./WoodMainImg/WoodImgWrapper";
import styles from "./WoodMain.module.css";

export const WoodMain = () => {
  return (
    <main>
      <section className={styles.sectionMain}>
        <div className={styles.layout}>
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
          <WoodMainImgWrapper />
          <div className={styles.consult}>
            <h2 className={styles.consultTitle}>Потрібна консультація?</h2>
            <p className={styles.consultText}>
              Наші фахівці допоможуть обрати оптимальний пиломатеріал для вашого
              проєкту
            </p>
            <a className={styles.consultButton} href="tel:+380977728371">
              Замовити дзвінок
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
