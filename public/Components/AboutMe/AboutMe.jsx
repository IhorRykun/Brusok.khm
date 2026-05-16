import styles from "./AboutMe.module.css";
import { ContainerMeImg } from "./AboutMeImg/AboutMeImg";
import img_1 from "../../../img/about/img_1 x1.jpg";
import img_2 from "../../../img/about/img_2 x1.jpg";
import img_3 from "../../../img/about/img_3 x1.jpg";
import img_4 from "../../../img/about/img_4 x1.jpg";

import { PiMedalThin } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSpiralThin } from "react-icons/pi";
import { Container } from "../Container/Container";
import { AboutBottom } from "./AboutBottom/AboutBottom";
import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";

export const AboutMe = () => {
  return (
    <section className={styles.sectionAboutMe}>
      <Container>
        <SectionTitleH2>Чому варто обрати нас</SectionTitleH2>
        <p className={styles.textAbout}>
          Ми поєднуємо найкращі традиції якості з сучасним підходом до
          обслуговування клієнтів
        </p>
        <div className={styles.divContainerGap}>
          <ContainerMeImg
            props={img_1}
            children={"Висока якість матеріалів"}
            style={{ backgroundColor: "blue" }}
            bottomChild={
              <PiMedalThin
                style={{
                  width: "32",
                  height: "32",
                  position: "absolute",
                  top: "16",
                  left: "16",
                  color: "white"
                }}
              />
            }
            topChild={
              "Використовуємо ретельно відібрані сорти деревини, які проходять строгий контроль на кожному етапі обробки. Матеріали стійкі до зносу, зберігають природну красу та текстуру деревини, що гарантує надійність і довговічність кожного виробу."
            }
            childrenCenter={"img_wood"}
          />
          <ContainerMeImg
            props={img_2}
            children={"Конкурентні ціни"}
            bottomChild={
              <LuDollarSign
                style={{
                  width: "32",
                  height: "32",
                  position: "absolute",
                  top: "16",
                  left: "16",
                  color: "white"
                }}
              />
            }
            topChild={
              "Завдяки прямій співпраці з постачальниками, ми можемо зберігати вигідні умови для наших клієнтів, забезпечуючи відмінне співвідношення ціни і якості."
            }
            childrenCenter={"img_wood"}
          />
          <ContainerMeImg
            props={img_3}
            children={"Оперативна доставка"}
            bottomChild={
              <TbTruckDelivery
                style={{
                  width: "32",
                  height: "32",
                  position: "absolute",
                  top: "16",
                  left: "16",
                  color: "white"
                }}
              />
            }
            topChild={
              "Ми цінуємо ваш час, тому організовуємо швидку та надійну доставку. Ваше замовлення буде доставлено в найкоротші терміни без затримок, незалежно від обсягу та віддаленості місця доставки."
            }
            childrenCenter={"img_wood"}
          />
          <ContainerMeImg
            props={img_4}
            children={"Наша місія"}
            bottomChild={
              <PiSpiralThin
                style={{
                  width: "32",
                  height: "32",
                  position: "absolute",
                  top: "16",
                  left: "16",
                  color: "white"
                }}
              />
            }
            topChild={
              "Наша місія — забезпечити клієнтів якісними та надійними матеріалами, які відповідають найвищим стандартам, за доступними цінами. Завдяки професійному підходу, індивідуальному сервісу та швидкій доставці, Brusok є надійним партнером у світі пиломатеріалів."
            }
            childrenCenter={"img_wood"}
          />
        </div>
        <div className={styles.WrapperAboutBottom}>
          <AboutBottom topChild={"15+"} bottomChild={"Років досвіду"} />
          <AboutBottom
            topChild={"1000+"}
            bottomChild={"Задоволених клієнтів"}
          />
          <AboutBottom topChild={"100+"} bottomChild={"Гарантія якості"} />
        </div>
      </Container>
    </section>
  );
};
