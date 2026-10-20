import type { Metadata } from "next";
import { Footer } from "../../public/Components/Footer/Footer";
import { ContactCta } from "../../public/Components/ContactCta/ContactCta";
import { Header } from "../../public/Components/Header/Header";
import { Roofing } from "../../public/Components/Roofing/Roofing";

export const metadata: Metadata = {
  title: "Покрівельні роботи — BRUSOK",
  description:
    "Монтаж, ремонт і утеплення покрівлі: металочерепиця, бітумна та керамічна черепиця, підсубійка і водостоки.",
};

export default function Works() {
  return (
    <>
      <Header />
      <Roofing />
      <ContactCta />
      <Footer />
    </>
  );
}
