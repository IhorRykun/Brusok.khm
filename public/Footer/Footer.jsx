"use client";

import styles from "./Footer.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiTelegramLogoFill } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";

import { Container } from "../Container/Container";
import Link from "next/link";

import { LiaMobileSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: 50.4501,
  lng: 30.5234
};
function MyMap() {
  // Загрузка API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY" // Вставьте свой ключ
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Маркер на карте */}
      <Marker position={center} />
    </GoogleMap>
  ) : <></>;
}
export const Footer = () => {
  return (
    <section className={styles.SectionFooter}>
      <Container>
        <div className={styles.diContainerFlex}>
          <div className={styles.diContainerFlex_first}>
            <Link href="./" replace className={styles.linkStyle}>
              Brusok
            </Link>
            <p>
              Надійні партнери у світі пиломатеріалів з професійним підходом та
              індивідуальним сервісом.
            </p>
          </div>
          <div className={styles.diContainerFlex_second}>
            <h3 className={styles.divContainerFlex_second_Title}>Навігація</h3>
            <ul className={styles.AboutList}>
              <li className={styles.AboutItem}>Про нас</li>
              <li className={styles.AboutItem}>Пиломатеріали</li>
              <li className={styles.AboutItem}>Покрівельні роботи</li>
              <li className={styles.AboutItem}>Доставка</li>
              <li className={styles.AboutItem}>Контакти</li>
            </ul>
          </div>

          <div className={styles.divContainerFlex_third}>
            <h3 className={styles.ContactTitle}>Контакти</h3>
            <ul className={styles.listContact}>
              <li className={styles.itemContact_mobile}>
                <LiaMobileSolid
                  style={{
                    color: "orange",
                    width: "16",
                    height: "16",
                    position: "absolute",
                    top: 12,
                    left: 0
                  }}
                />
                +38 (097) 77 28 371 <br /> +38 (097) 87 49 673
              </li>
              <li>
                <address className={styles.itemContact_address}>
                  <TfiLocationPin
                    style={{
                      color: "orange",
                      width: "16",
                      height: "16",
                      position: "absolute",
                      top: 14,
                      left: 0
                    }}
                  />
                  c. Лісові Гринівці, вул. Центральнавул. Центральна
                </address>
              </li>
              <li className={styles.itemContact_email}>
                <HiOutlineMail
                  style={{
                    color: "orange",
                    width: "16",
                    height: "16",
                    position: "absolute",
                    top: 0,
                    left: 0
                  }}
                />
                brusok.khm@gmail.com
              </li>
            </ul>
          </div>
          <div className={styles.ContainerFlex_fourth}>
            <h3 className={styles.SocailTitle}>Соціальні мережі</h3>
            <ul className={styles.social_list}>
              <li className={styles.social_item}>
                <Link href="./" replace>
                  <IoLogoInstagram className={styles.socialSvg} />
                </Link>
              </li>
              <li className={styles.social_item}>
                <Link href="./" replace>
                  <FaFacebookF className={styles.socialSvg} />
                </Link>
              </li>

              <li className={styles.social_item}>
                <Link href="./" replace>
                  <FaTiktok className={styles.socialSvg} />
                </Link>
              </li>
              <li className={styles.social_item}>
                <Link href="./" replace>
                  <PiTelegramLogoFill className={styles.socialSvg} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Наше розташування</h3>
          <div></div>
        </div>
      </Container>
    </section>
  );
};
