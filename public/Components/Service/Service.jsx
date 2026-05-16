import img_1 from "../../../img/mainSlider/1.png";
import img_2 from "../../../img/mainSlider/2.png";
import img_3 from "../../../img/mainSlider/3.png";
import styles from "./Service.module.css";
import { Slider } from "./ServiceImg/Slider/Slider";
import { Container } from "../Container/Container";
import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";

const serviceSlides = [
  {
    image: img_1,
    alt: "Покрівельні роботи",
    title: "Покрівельні роботи",
    description:
      "Професійні послуги з покрівельних робіт. Гарантуємо якість виконання та використання найкращих матеріалів.",
  },
  {
    image: img_2,
    alt: "Пиломатеріали",
    title: "Пиломатеріали",
    description:
      "Широкий асортимент пиломатеріалів для будівництва, ремонту та оздоблення. Доставка та консультація.",
  },
  {
    image: img_3,
    alt: "Будівництво та ремонт",
    title: "Будівництво та ремонт",
    description:
      "Комплексні рішення для будівництва та ремонту. Працюємо з натуральними матеріалами та дотримуємось термінів.",
  },
];

export const Service = () => {
  return (
    <section className={styles.sectionService}>
      <Container>
        <SectionTitleH2>Наші Послуги</SectionTitleH2>
        <Slider slides={serviceSlides} />
      </Container>
    </section>
  );
};
