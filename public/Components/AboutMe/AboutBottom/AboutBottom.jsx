import styles from "../AboutBottom/AboutBottom.module.css";

export const AboutBottom = ({ topChild, bottomChild }) => {
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.AboutBottomH3}>{topChild}</h3>
      <h4 className={styles.AboutBottomH4}>{bottomChild}</h4>
    </div>
  );
};
