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
      <img
        className={styles.imgMe}
        src={props.src}
        srcSet={`${props.src} 2x`}
        alt={childrenCenter}
        loading="lazy"
      />
      <h3 className={styles.imgTitle}>{children}</h3>
      <p className={styles.imgMeText}>{topChild}</p>
      <div className={styles.divSvg}>{bottomChild}</div>
    </div>
  );
};
