import type { Metadata } from "next";
import { AboutPages } from "../public/pages/AboutPages/AboutPages";

export const metadata: Metadata = {
  title: "BRUSOK",
};

export default function Home() {
  return <AboutPages />;
}
