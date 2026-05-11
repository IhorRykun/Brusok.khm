import omg_2 from "../../img/mainSlider/1.png";
import styles from "./Service.module.css";
import { SectionTitleH2 } from "../SectionTitleH2/SectionTitleH2";
import { ServiceImg } from "./ServiceImg/ServiceImg";

export const Service = () => {
  return (
    <section className={styles.sectionService}>
      <SectionTitleH2>Наші Послуги</SectionTitleH2>
      <ServiceImg props={omg_2} children={omg_2}></ServiceImg>
    </section>
  );
};
