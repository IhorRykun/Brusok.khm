import { Header } from "../public/Header/Header";
import { LeadMain } from "../public/leadMain/leadMain";
import { Service } from "../public/Service/Service";
import { AboutMe } from "../public/AboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <LeadMain />
        <Service />
        <AboutMe />
      </main>
    </div>
  );
}
