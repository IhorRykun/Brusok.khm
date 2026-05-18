import Image from "next/image";

export const WoodMainImg = ({ props, children, title, description }) => {
  return (
    <>
      <Image src={props} alt={children} className={styles.imgWood} />
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.woodButton}>{description}</button>
    </>
  );
};
