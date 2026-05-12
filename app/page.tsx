import { Header } from "../public/Header/Header";
import { LeadMain } from "../public/leadMain/leadMain";
import { Service } from "../public/Service/Service";
import { AboutMe } from "../public/AboutMe/AboutMe";
import "../public/index.css";
import { FormSection } from "../public/FormSection/FormSection";
import { Footer } from "../public/Footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LeadMain />
        <Service />
        <AboutMe />
        <FormSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
