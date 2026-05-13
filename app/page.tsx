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
      <main
        style={{
          background: "linear-gradient(to #000000.6, #000000.2, #000000)"
        }}>
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
