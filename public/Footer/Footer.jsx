import styled from "./Footer.module.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiTelegramLogoFill } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";

import { Container } from "../Container/Container";

export const Footer = () => {
  return (
    <section className={styled.SectionFooter}>
      <Container>
        <div>
          <div>
            <h2>BRUSOK</h2>
            <p>
              Надійні партнери у світі пиломатеріалів з професійним підходом та
              індивідуальним сервісом.
            </p>
          </div>
          <div>
            <h3>Навігація</h3>
            <ul>
              <li>Про нас</li>
              <li>Пиломатеріали</li>
              <li>Покрівельні роботи</li>
              <li>Доставка</li>
              <li>Контакти</li>
            </ul>
          </div>

          <div>
            <h3>Контакти</h3>
            <ul>
              <li>+38 (097) 77 28 371 +38 (097) 87 49 673</li>
              <li>
                <address>
                  c. Лісові Гринівці, вул. Центральнавул. Центральна
                </address>
              </li>
              <li>brusok.khm@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3>Соціальні мережі</h3>
            <ul>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>

              <li>
                <FaTiktok />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
