"use client";

import { Container } from "../Container/Container";
import { SectionTitleH2 } from "../SectionTitleH2/SectionTitleH2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <section>
      <Container>
        <SectionTitleH2>Зв'яжіться з нами</SectionTitleH2>
        <Formik>
          <Form>
            <label htmlFor="userName">Ім'я</label>
            <Field
              type="text"
              name="name"
              id="usrName"
              placeholder="Ваше ім'я"
            />
            <label htmlFor="Email">Email</label>
            <Field
              type="Email"
              id="Email"
              name="email"
              placeholder="Ваш @Email"
            />
            <label htmlFor="userName">Телефон</label>
            <Field
              type="number"
              name="number"
              id="userNumber"
              placeholder="097"
            />
            <label>
              Я даю згоду на передачу та обробку моїх персональних даних *
              <Field type="checkbox" name="toggle" />
              <ErrorMessage name="toggle" />
            </label>
            <label htmlFor="userText">Повідмолення</label>
            <Field
              id="userText"
              type="text"
              name="userText"
              placeholder="Ваше повідомлення (необовʼязково)"
            />
            <ErrorMessage
              render={(message) => (
                <ValidationRightBottom>{message}</ValidationRightBottom>
              )}
              name="userText"
            />
          </Form>
        </Formik>
      </Container>
    </section>
  );
};
