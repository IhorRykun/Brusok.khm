import type { Metadata } from "next";
import { Header } from "../public/Components/Header/Header";

export const metadata: Metadata = {
  title: "BRUSOK",
};

export default function Home() {
  return <Header />;
}
