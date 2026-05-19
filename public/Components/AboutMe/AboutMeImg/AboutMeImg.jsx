import Image from "next/image";
import styles from "./AboutMeImg.module.css";

export const ContainerMeImg = ({
  props,
  children,
  bottomChild,
  topChild,
  childrenCenter
}) => {
  return (
    <div className={styles.divMeImg} tabIndex={0} role="group">
      <Image className={styles.imgMe} src={props} alt={childrenCenter} />
      <h3 className={styles.imgTitle}>{children}</h3>
      <p className={styles.imgMeText}>{topChild}</p>
      <div className={styles.divSvg}>{bottomChild}</div>
    </div>
  );
};
