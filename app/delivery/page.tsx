import type { Metadata } from "next";
import { Footer } from "../../public/Components/Footer/Footer";
import { Header } from "../../public/Components/Header/Header";
import { Delivery } from "../../public/Components/Delivery/Delivery";

export const metadata: Metadata = {
  title: "Доставка — BRUSOK",
  description:
    "Доставка пиломатеріалів і вантажів по Україні: Scania R420 та Mercedes-Benz Sprinter.",
};

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <Delivery />
      <Footer />
    </>
  );
}
