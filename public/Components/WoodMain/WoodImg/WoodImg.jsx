"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./WoodImg.module.css";

export const WoodMainImg = ({ src, alt, title, description, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.card}>
      <Image src={src} alt={alt} className={styles.imgWood} />
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.woodButton}>{description}</button>
    </div>
  );
};
