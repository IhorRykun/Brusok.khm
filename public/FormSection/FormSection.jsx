"use client";

import { Container } from "../Container/Container";
import { SectionTitleH2 } from "../SectionTitleH2/SectionTitleH2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LiaMobileSolid } from "react-icons/lia";
import { FiMessageSquare } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const initialValues = {
  email: "",
  name: "",
  tel: "",
  userText: "",
  toggle: ""
};
const schema = Yup.object().shape({
  email: Yup.string().email().required("Заопвніть будь ласка поле!").trim(),
  name: Yup.string().required("Заопвніть будь ласка поле!").trim(),
  tel: Yup.number()
    .required("Заопвніть будь ласка поле!")
    .min(9, "Не коректне значення"),
  userText: Yup.string().required("Заопвніть будь ласка поле!").trim()
});

export const ContactForm = () => {
  const [toggle, setToggle] = useState(false);

  const OnSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
};
export const FormSection = () => {
  return (
    <section className={styles.sectionForm}>
      <Container>
        <SectionTitleH2>Зв'яжіться з нами</SectionTitleH2>
        <Formik>
          <Form className={styles.Forma}>
            <label className={styles.labelName} htmlFor="userName">
              <FaRegUser className={styles.labelSVG_size} />
              Ім'я
            </label>
            <Field
              className={styles.inputName}
              type="text"
              name="name"
              id="userName"
              placeholder="Ваше ім'я"
            />
            <label className={styles.labelEmail} htmlFor="Email">
              <MdOutlineMail className={styles.labelSVG_size} />
              Email
            </label>
            <Field
              className={styles.inputEmail}
              type="Email"
              id="Email"
              name="email"
              placeholder="Ваш @Email"
            />
            <label className={styles.labelMobile} htmlFor="userNumber">
              <BsTelephone className={styles.labelSVG_size} />
              Телефон
            </label>
            <Field
              type="number"
              name="number"
              id="userNumber"
              placeholder="097"
              className={styles.inputMobile}
            />
            <label htmlFor="userText" className={styles.labelTexteria}>
              <FiMessageSquare className={styles.labelSVG_size} />
              Повідомлення
            </label>
            <Field
              className={styles.inputTexteria}
              id="userText"
              type="text"
              name="userText"
              placeholder="Ваше повідомлення (необовʼязково)"
            />
            <label className={styles.inputCheckBox}>
              Я даю згоду на передачу та обробку моїх персональних даних
              <Field
                type="checkbox"
                name="toggle"
                className={styles.labelCheckBox}
              />
              <ErrorMessage name="toggle" />
            </label>
            <ErrorMessage
              render={(message) => (
                <ValidationRightBottom>{message}</ValidationRightBottom>
              )}
              name="userText"
            />
            <button className={styles.ButtonForm}>Надіслати</button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
};
