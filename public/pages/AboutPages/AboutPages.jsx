import { Header } from "../../Components/Header/Header";
import { LeadMain } from "../../Components/leadMain/leadMain";
import { Service } from "../../Components/Service/Service";
import { AboutMe } from "../../Components/AboutMe/AboutMe";
import { FormSection } from "../../Components/FormSection/FormSection";
import { Footer } from "../../Components/Footer/Footer";
export async function AboutPages() {
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
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}
