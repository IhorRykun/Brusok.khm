import styles from "./ServiceContainerText.module.css";

export const ServiceContainerText = ({ topChild, bottomChild }) => {
  return (
    <>
      <h3 className={styles.serviceTitle}>{topChild}</h3>
      <p className={styles.serviceText}>{bottomChild}</p>
    </>
  );
};
