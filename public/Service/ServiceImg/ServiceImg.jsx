import Image from "next/image";
import styles from "./ServiceImg.module.css";
import { ServiceContainerText } from "./ServiceContainerText/ServiceContainerText";

export const ServiceImg = ({ props, children }) => {
  return (
    <div className={styles.ServiceContainer}>
      <Image className={styles.serviceImg} src={props} alt={children} />
      <ServiceContainerText
        topChild={"Покрівельні роботи"}
        bottomChild={
          "Професійні послуги з покрівельних робіт. Гарантуємо якість виконання та використання найкращих матеріалів."
        }
      />
    </div>
  );
};
