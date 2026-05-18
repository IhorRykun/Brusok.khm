import Link from "next/link";
import Image from "next/image";
export const WoodMainImg = () => {
  return (
    <div classNames={styles.woodImgWrapper}>
      <ul>
        <li>
          <WoodMainImg />
        </li>
      </ul>
    </div>
  );
};
