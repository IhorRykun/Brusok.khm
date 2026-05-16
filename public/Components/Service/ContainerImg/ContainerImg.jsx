import Image from "next/image";

import styles from "./ContainerImg.module.css";

import img_1 from "../../../../img/mainSlider/1.png";
import img_2 from "../../../../img/mainSlider/2.png";
import img_3 from "../../../../img/mainSlider/3.png";

export const ContainerImg = ({ props, children }) => {
  return (
    <div>
      <Image className={styles.imgService} src={props} alt={children} />
    </div>
  );
};
