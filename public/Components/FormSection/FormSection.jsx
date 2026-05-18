"use client";

import { Container } from "../Container/Container";
import { SectionTitleH2 } from "../../SectionTitleH2/SectionTitleH2";
import { Formik, Form, Field } from "formik";
import styles from "./Form.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import {
  contactFormSchema,
  contactFormInitialValues,
} from "../../../lib/contactValidation";

const FieldError = ({ name, touched, errors }) => {
  return touched[name] && errors[name] ? (
    <p className={styles.fieldError}>{errors[name]}</p>
  ) : null;
};

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
          validateOnMount
          validateOnBlur
          validateOnChange
        >
          {({ isSubmitting, status, touched, errors, isValid }) => (
            <Form className={styles.Forma} noValidate>
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="userName">
                    <FaRegUser className={styles.labelSVG_size} />
                    Ім'я
                  </label>
                  <FieldError name="name" touched={touched} errors={errors} />
                  <Field
                    className={`${styles.inputName} ${touched.name && errors.name ? styles.inputError : ""}`}
                    type="text"
                    name="name"
                    id="userName"
                    placeholder="Ваше ім'я"
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="userEmail">
                    <MdOutlineMail className={styles.labelSVG_size} />
                    Email
                  </label>
                  <FieldError name="email" touched={touched} errors={errors} />
                  <Field
                    className={`${styles.inputEmail} ${touched.email && errors.email ? styles.inputError : ""}`}
                    type="email"
                    id="userEmail"
                    name="email"
                    placeholder="Ваш @Email"
                  />
                </div>
              </div>

              <div className={styles.fieldGroupFull}>
                <label className={styles.fieldLabel} htmlFor="userTel">
                  <BsTelephone className={styles.labelSVG_size} />
                  Телефон
                </label>
                <FieldError name="tel" touched={touched} errors={errors} />
                <Field
                  type="tel"
                  name="tel"
                  id="userTel"
                  placeholder="0971234567"
                  className={`${styles.inputMobile} ${touched.tel && errors.tel ? styles.inputError : ""}`}
                />
              </div>

              <div className={styles.fieldGroupFull}>
                <label className={styles.fieldLabel} htmlFor="userText">
                  <FiMessageSquare className={styles.labelSVG_size} />
                  Повідомлення
                </label>
                <FieldError name="userText" touched={touched} errors={errors} />
                <Field
                  as="textarea"
                  className={`${styles.inputTexteria} ${touched.userText && errors.userText ? styles.inputError : ""}`}
                  id="userText"
                  name="userText"
                  placeholder="Ваше повідомлення (необовʼязково)"
                  rows={4}
                />
              </div>

              <div className={styles.checkboxBlock}>
                <FieldError name="toggle" touched={touched} errors={errors} />
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
                disabled={isSubmitting || !isValid}
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
