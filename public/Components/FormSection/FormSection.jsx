"use client";

import { Container } from "../Container/Container";
import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import {
  contactFormSchema,
  contactFormInitialValues,
} from "../../../lib/contactValidation";

const FieldError = ({ name }) => (
  <ErrorMessage name={name}>
    {(message) => <p className={styles.fieldError}>{message}</p>}
  </ErrorMessage>
);

export const FormSection = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          error: data.message || "Не вдалося надіслати повідомлення. Спробуйте пізніше.",
        });
        return;
      }

      setStatus({ success: "Дякуємо! Ваше повідомлення надіслано." });
      resetForm();
    } catch {
      setStatus({
        error: "Не вдалося надіслати повідомлення. Перевірте з'єднання та спробуйте ще раз.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.sectionForm}>
      <Container>
        <SectionTitleH2>Зв'яжіться з нами</SectionTitleH2>
        <Formik
          initialValues={contactFormInitialValues}
          validationSchema={contactFormSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          {({ isSubmitting, status, touched, errors }) => (
            <Form className={styles.Forma} noValidate>
              <label className={styles.labelName} htmlFor="userName">
                <FaRegUser className={styles.labelSVG_size} />
                Ім'я
              </label>
              <Field
                className={`${styles.inputName} ${touched.name && errors.name ? styles.inputError : ""}`}
                type="text"
                name="name"
                id="userName"
                placeholder="Ваше ім'я"
              />
              <FieldError name="name" />

              <label className={styles.labelEmail} htmlFor="userEmail">
                <MdOutlineMail className={styles.labelSVG_size} />
                Email
              </label>
              <Field
                className={`${styles.inputEmail} ${touched.email && errors.email ? styles.inputError : ""}`}
                type="email"
                id="userEmail"
                name="email"
                placeholder="Ваш @Email"
              />
              <FieldError name="email" />

              <label className={styles.labelMobile} htmlFor="userTel">
                <BsTelephone className={styles.labelSVG_size} />
                Телефон
              </label>
              <Field
                type="tel"
                name="tel"
                id="userTel"
                placeholder="0971234567"
                className={`${styles.inputMobile} ${touched.tel && errors.tel ? styles.inputError : ""}`}
              />
              <FieldError name="tel" />

              <label htmlFor="userText" className={styles.labelTexteria}>
                <FiMessageSquare className={styles.labelSVG_size} />
                Повідомлення
              </label>
              <Field
                as="textarea"
                className={`${styles.inputTexteria} ${touched.userText && errors.userText ? styles.inputError : ""}`}
                id="userText"
                name="userText"
                placeholder="Ваше повідомлення (необовʼязково)"
                rows={4}
              />
              <FieldError name="userText" />

              <div className={styles.checkboxBlock}>
                <label className={styles.inputCheckBox} htmlFor="consentToggle">
                  <Field
                    type="checkbox"
                    name="toggle"
                    id="consentToggle"
                    className={styles.labelCheckBox}
                  />
                  <span>
                    Я даю згоду на передачу та обробку моїх персональних даних
                  </span>
                </label>
                <FieldError name="toggle" />
              </div>

              {status?.success && (
                <p className={styles.formStatusSuccess} role="status">
                  {status.success}
                </p>
              )}
              {status?.error && (
                <p className={styles.formStatusError} role="alert">
                  {status.error}
                </p>
              )}

              <button
                type="submit"
                className={styles.ButtonForm}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Надсилання..." : "Надіслати"}
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};
