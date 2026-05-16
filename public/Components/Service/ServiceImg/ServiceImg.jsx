import Image from "next/image";
import styles from "./ServiceImg.module.css";
import { ServiceContainerText } from "./ServiceContainerText/ServiceContainerText";

export const ServiceImg = ({
  props,
  alt,
  topChild = "Покрівельні роботи",
  bottomChild = "Професійні послуги з покрівельних робіт. Гарантуємо якість виконання та використання найкращих матеріалів.",
}) => {
  return (
    <div className={styles.ServiceContainer}>
      <Image className={styles.imgService} src={props} alt={alt} />
      <ServiceContainerText topChild={topChild} bottomChild={bottomChild} />
    </div>
  );
};
