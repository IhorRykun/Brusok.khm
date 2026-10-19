"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { Container } from "../Container/Container";
import styles from "./Roofing.module.css";
import hero from "../../../img/roofing/hero.jpg";
import team from "../../../img/roofing/team.jpg";
import team2 from "../../../img/roofing/team@2x.jpg";
import plan2 from "../../../img/roofing/plan@2x.jpg";
import plan3 from "../../../img/roofing/plan@3x.jpg";
import plan4 from "../../../img/roofing/plan@4x.jpg";
import quality from "../../../img/roofing/quality.jpg";
import quality2 from "../../../img/roofing/quality@2x.jpg";
import van from "../../../img/roofing/van2.jpg";
import van2 from "../../../img/roofing/van2@2x.jpg";
import servicePhoto from "../../../img/roofing/roof3.jpg";
import servicePhoto2 from "../../../img/roofing/roof3@2x.jpg";

const materials = [
  {
    title: "Металочерепиця",
    text: "Сучасний та надійний матеріал для покрівлі, що поєднує в собі естетику, довговічність та практичність. Ідеально підходить для будинків різних архітектурних стилів.",
    pros: [
      "Довговічність: Завдяки оцинкованому шару та захисному покриттю, металочерепиця стійка до корозії та служить 30-50 років.",
      "Мала вага: Легка конструкція знижує навантаження на крокви та фундамент будинку.",
      "Швидкий монтаж: Великі листи металочерепиці легко монтуються, що зменшує час на встановлення даху.",
      "Естетика: Широкий вибір кольорів і форм дає можливість підібрати дизайн під різні архітектурні стилі.",
      "Стійкість до вогню: Металочерепиця є негорючим матеріалом, що підвищує пожежну безпеку будівлі.",
    ],
    cons: [
      "Шум під час дощу: Металевий дах може створювати багато шуму під час опадів, хоча це можна зменшити за допомогою утеплювача або звукоізоляційних матеріалів.",
      "Вартість: Хоча монтаж металочерепиці може бути швидким і недорогим, сам матеріал коштує дорожче, ніж бітумна черепиця.",
      "Можливість корозії: Хоча металочерепиця захищена від корозії, при механічних пошкодженнях або неправильному монтажі цей ризик зростає.",
      "Схильність до деформації: Може прогинатися під вагою снігу або при фізичних навантаженнях, хоча це більше стосується тонших і дешевших варіантів металочерепиці.",
    ],
  },
  {
    title: "Бітумна черепиця",
    text: "Гнучкий та практичний матеріал, який відмінно підходить для дахів складної форми. Забезпечує відмінну шумоізоляцію та стійкість до погодних умов.",
    pros: [
      "Гнучкість: Легко адаптується до різних форм дахів.",
      "Шумоізоляція: Добре глушить шум, наприклад, під час дощу.",
      "Стійкість до корозії: Не іржавіє, що є перевагою в порівнянні з металевими покриттями.",
      "Естетика: Пропонується в різних кольорах і формах, що дозволяє підібрати варіант під будь-який стиль будівлі.",
      "Легкість монтажу: Порівняно з іншими покрівельними матеріалами, її легко встановлювати.",
    ],
    cons: [
      "Термін служби: Хоча бітумна черепиця може служити до 20-30 років, це менше, ніж у металевої черепиці чи керамічної.",
      "Можливість пошкодження під час сильних температурних змін: Може деформуватися при дуже високих або низьких температурах.",
    ],
  },
  {
    title: "Керамічна черепиця",
    text: "Преміум матеріал для покрівлі з найбільшою довговічністю. Виготовлена з натуральних матеріалів, забезпечує відмінну тепло- та звукоізоляцію.",
    pros: [
      "Довговічність: Керамічна черепиця може служити понад 100 років, що робить її одним з найбільш витривалих покрівельних матеріалів.",
      "Екологічність: Виготовляється з натуральних матеріалів, таких як глина, і не містить шкідливих хімічних сполук.",
      "Висока стійкість до зовнішніх впливів: Не піддається корозії, ультрафіолету, морозу та агресивним атмосферним умовам.",
      "Шумоізоляція: Забезпечує гарну звукоізоляцію, знижуючи шум від дощу чи граду.",
      "Естетика: Натуральний вигляд і широкий вибір кольорів і форм надають можливість створювати оригінальні архітектурні рішення.",
      "Терморегуляція: Черепиця зберігає тепло взимку та забезпечує прохолоду влітку, завдяки чому будинок менше нагрівається.",
    ],
    cons: [
      "Велика вага: Керамічна черепиця є важким матеріалом, що створює додаткове навантаження на конструкцію даху. Це вимагає міцного каркасу та фундаменту.",
      "Висока вартість: Як сам матеріал, так і монтаж коштують дорожче, ніж інші покрівельні матеріали, через складність обробки та транспортування.",
      "Монтаж: Процес встановлення є складним і тривалим, вимагає високої кваліфікації працівників.",
      "Крихкість: Черепиця може тріскатися при фізичних ударах або під час монтажу, тому потребує обережного поводження.",
    ],
  },
  {
    title: "Підсубійка",
    text: "Важливий елемент покрівельної системи, що забезпечує вентиляцію та естетичний вигляд. Захищає конструкцію від вологи та подовжує термін служби даху.",
    pros: [
      "Забезпечує вентиляцію піддахового простору, що подовжує термін служби покрівлі.",
      "Захищає від зовнішніх факторів, таких як волога та комахи.",
      "Поліпшує зовнішній вигляд будівлі.",
    ],
    cons: [
      "Вибір матеріалу може впливати на довговічність і вимагати додаткового догляду (особливо для дерев'яних підсубійок).",
      "Неправильний монтаж може призвести до проблем з вентиляцією або деформації елементів.",
    ],
  },
  {
    title: "Утеплення покрівлі",
    text: "Ключовий елемент енергоефективності будинку. Правильне утеплення дозволяє значно знизити витрати на опалення та створити комфортний мікроклімат.",
    pros: [
      "Зменшення втрат тепла: Добре утеплена покрівля може знизити тепловтрати до 25-30%.",
      "Комфортний мікроклімат: Утеплення сприяє підтриманню комфортної температури всередині будинку.",
      "Захист конструкції: Утеплювач захищає дах від екстремальних температурних коливань та появи конденсату, що подовжує термін служби конструкції.",
    ],
    cons: [
      "Вартість: Якісне утеплення може вимагати значних фінансових вкладень, особливо якщо використовуються дорогі матеріали або складна технологія монтажу.",
      "Трудомісткість: Правильне утеплення потребує кваліфікованих працівників, щоб забезпечити правильний монтаж і гарантувати довговічність.",
    ],
  },
];

const reasons = [
  {
    title: "Професійна команда",
    text: "Наші фахівці мають багаторічний досвід і постійно навчаються новим технологіям.",
    image: team2,
    srcSet: `${team2.src} 2x, ${team.src} 3x`,
    alt: "Бригада монтує покрівлю",
    icon: HiOutlineUserGroup,
    tone: "blue",
  },
  {
    title: "Індивідуальний підхід",
    text: "Ми ретельно аналізуємо вимоги до кожного проєкту та пропонуємо рішення, що відповідають вашим потребам і бюджету.",
    image: plan2,
    srcSet: `${plan2.src} 2x, ${plan3.src} 3x, ${plan4.src} 4x`,
    alt: "Замір дерев'яної заготовки рулеткою",
    icon: HiOutlineChatBubbleLeftRight,
    tone: "green",
  },
  {
    title: "Гарантія якості",
    text: "Ми використовуємо тільки перевірені матеріали і надаємо гарантію на виконані роботи.",
    image: quality2,
    srcSet: `${quality2.src} 2x, ${quality.src} 3x`,
    alt: "Сертифікат якості",
    icon: HiOutlineShieldCheck,
    tone: "orange",
  },
  {
    title: "Швидкість і дотримання термінів",
    text: "Розуміємо важливість термінів та завжди завершуємо роботи вчасно, не втрачаючи якості виконання.",
    image: van2,
    srcSet: `${van2.src} 2x, ${van.src} 3x`,
    alt: "Доставка матеріалів",
    icon: HiOutlineClock,
    tone: "purple",
  },
  {
    title: "Повний спектр послуг",
    text: "Від консультації та вибору матеріалів до повного монтажу і післяпродажного обслуговування. Ми — ваш надійний партнер на всіх етапах будівництва або ремонту даху.",
    image: servicePhoto2,
    srcSet: `${servicePhoto2.src} 2x, ${servicePhoto.src} 3x`,
    alt: "Фахівці на даху",
    icon: HiOutlineWrenchScrewdriver,
    tone: "pink",
  },
];

const services = [
  {
    title: "Аудит існуючого даху",
    text: "Повна діагностика стану покрівлі з детальним звітом",
    price: "Від 2000грн",
  },
  {
    title: "Оцінка стану",
    text: "Професійна оцінка та рекомендації щодо ремонту",
    price: "Від 1500грн",
  },
  {
    title: "Консультації щодо матеріалів",
    text: "Допомога у виборі оптимальних матеріалів",
    price: "Від 500грн",
  },
  {
    title: "Демонтаж старого покриття",
    text: "Професійне видалення старого даху",
    price: "Від 100грн/м²",
  },
  {
    title: "Монтаж покрівлі",
    text: "Якісний монтаж з гарантією",
    price: "Від 150грн/м²",
  },
  {
    title: "Ремонт даху",
    text: "Усунення протікань та пошкоджень",
    price: "Від 200грн/м²",
  },
  {
    title: "Встановлення водостоків",
    text: "Монтаж системи відведення води",
    price: "Від 90грн/м²",
  },
];

const ReasonCard = ({ reason }) => {
  const Icon = reason.icon;

  return (
    <article className={styles.reason}>
      <div className={styles.reasonPhoto}>
        <img
          src={reason.image.src}
          srcSet={reason.srcSet}
          alt={reason.alt}
          loading="lazy"
        />
        <span className={`${styles.reasonIcon} ${styles[reason.tone]}`}>
          <Icon aria-hidden="true" />
        </span>
      </div>
      <h3>{reason.title}</h3>
      <p>{reason.text}</p>
    </article>
  );
};

function SectionHeading({ children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={
        shown ? `${styles.sectionTitle} ${styles.sectionTitleShown}` : styles.sectionTitle
      }>
      {children}
    </h2>
  );
}

export const Roofing = () => {
  const reasonsRef = useRef(null);
  const [reasonsShown, setReasonsShown] = useState(false);

  useEffect(() => {
    const node = reasonsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReasonsShown(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.heroSection} aria-label="Покрівельні роботи">
        <Container>
          <div className={styles.hero}>
            <img
              className={styles.heroImage}
              src={hero.src}
              alt="Покрівельник на дерев'яних кроквах"
              loading="eager"
            />
            <div className={styles.heroContent}>
              <h1>Покрівельні роботи</h1>
              <p>
                Ми підходимо до кожного проєкта індивідуально, враховуючи всі
                побажання клієнта. Завдяки нашому досвіду та професіоналізму, ми
                забезпечуємо надійність і довговічність кожного даху.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.materials}>
        <Container>
          <SectionHeading>Основні характеристики матеріалів</SectionHeading>
          <div className={styles.materialList}>
            {materials.map((item) => (
              <details key={item.title} className={styles.materialCard}>
                <summary className={styles.materialSummary}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span className={styles.chevron} aria-hidden="true" />
                </summary>
                <div className={styles.materialDetails}>
                  <div className={styles.materialDetailsInner}>
                    <div>
                      <h4 className={styles.prosTitle}>Переваги:</h4>
                      <ul className={styles.prosList}>
                        {item.pros.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={styles.consTitle}>Недоліки:</h4>
                      <ul className={styles.consList}>
                        {item.cons.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section
        ref={reasonsRef}
        className={
          reasonsShown ? `${styles.reasons} ${styles.reasonsShown}` : styles.reasons
        }>
        <Container>
          <SectionHeading>Чому саме ми?</SectionHeading>
          <div className={styles.reasonGrid}>
            {reasons.slice(0, 3).map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
          <div className={styles.reasonGridBottom}>
            {reasons.slice(3).map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.services}>
        <Container>
          <SectionHeading>Послуги</SectionHeading>
          <ul className={styles.priceGrid}>
            {services.map((service) => (
              <li key={service.title} className={styles.priceCard}>
                <div className={styles.priceTop}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className={styles.priceBottom}>
                  <span>Вартість:</span>
                  <strong>{service.price}</strong>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
};
