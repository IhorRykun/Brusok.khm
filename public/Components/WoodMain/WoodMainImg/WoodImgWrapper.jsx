import styles from "./WoodImgWrapper.module.css";
import { WoodMainImg as WoodImgCard } from "../WoodImg/WoodImg";
import img_1 from "../../../../img/wood/img_1x1.jpg";
import img_2 from "../../../../img/wood/img_2x1.jpg";
import img_3 from "../../../../img/wood/img_3x1.jpg";
import img_4 from "../../../../img/wood/img_4x1.jpg";

export const WoodMainImgWrapper = () => {
  return (
    <div className={styles.woodImgWrapper}>
      <ul>
        <li>
          <WoodImgCard
            src={img_1}
            alt="Пиломатеріали з сосни"
            title="Обрізна дошка"
            description="Детальніше"
          >
            <p>
              Обрізна дошка з сосни для будівництва та столярних робіт. Надійний матеріал
              для каркасів, підлог та меблів з природним теплим відтінком.
            </p>
          </WoodImgCard>
        </li>
        <li>
          <WoodImgCard
            src={img_2}
            alt="Пиломатеріали з сосни"
            title="Фанера"
            description="Детальніше"
          >
            <p>
              Фанера з високою щільністю та стабільністю форми. Ідеально підходить для обшивки,
              підлогових покриттів та декоративних панелей.
            </p>
          </WoodImgCard>
        </li>
        <li>
          <WoodImgCard
            src={img_3}
            alt="Пиломатеріали з сосни"
            title="Дошка"
            description="Детальніше"
          >
            <p>
              Розпилена дошка сосни з рівною текстурою і стійкістю до деформацій.
              Використовується для облаштування будинків та садових конструкцій.
            </p>
          </WoodImgCard>
        </li>
        <li>
          <WoodImgCard
            src={img_4}
            alt="Пиломатеріали з сосни"
            title="Брус"
            description="Детальніше"
          >
            <p>
              Брус з сосни високої якості для несучих конструкцій і будівництва будинків.
              Надійний матеріал з хорошою геометрією і рівною поверхнею.
            </p>
          </WoodImgCard>
        </li>
      </ul>
    </div>
  );
};
