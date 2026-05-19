import * as Yup from "yup";

const phoneRegex = /^(\+?38)?0\d{9}$/;

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Ім'я має містити щонайменше 2 символи")
    .max(80, "Ім'я занадто довге")
    .required("Заповніть, будь ласка, поле!"),
  email: Yup.string()
    .trim()
    .email("Введіть коректний email")
    .required("Заповніть, будь ласка, поле!"),
  tel: Yup.string()
    .trim()
    .matches(phoneRegex, "Введіть коректний номер телефону (наприклад, 0971234567)")
    .required("Заповніть, будь ласка, поле!"),
  userText: Yup.string().trim().max(2000, "Повідомлення занадто довге"),
  toggle: Yup.boolean()
    .oneOf([true], "Потрібна згода на обробку персональних даних")
    .required("Потрібна згода на обробку персональних даних"),
});

export const contactFormInitialValues = {
  name: "",
  email: "",
  tel: "",
  userText: "",
  toggle: false,
};

export function isContactFormValid(values) {
  return contactFormSchema.isValidSync(values);
}

export async function validateContactPayload(data) {
  return contactFormSchema.validate(data, { abortEarly: false, stripUnknown: true });
}
