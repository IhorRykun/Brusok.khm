import styles from "./Header.module.css";
import { Container } from "../Container/Container";
import { NavLink } from "../NavLink/NavLink";

import Link from "next/link";

const navItems = [
  { href: "/", label: "Про нас" },
  { href: "/wood", label: "Пиломатеріали" },
  { href: "/works", label: "Покрівельні роботи" },
  { href: "/delivery", label: "Доставка" },
];

export const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <Container>
        <nav className={styles.ContainerFlex}>
          <Link href="/" className={styles.headerBrand}>
            <h2 className={styles.headerTitle}>BRUSOK</h2>
          </Link>
          <ul className={styles.headerList}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className={styles.headerLink}
                activeClassName={styles.headerLinkActive}
              >
                <li className={styles.headerItem}>{item.label}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
