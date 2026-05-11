import styles from "./SectionTitleH2.module.css";

export const SectionTitleH2 = ({ children }) => {
  return (
    <div>
      <h2 className={styles.sectionTitleH2}>{children}</h2>
    </div>
  );
};
