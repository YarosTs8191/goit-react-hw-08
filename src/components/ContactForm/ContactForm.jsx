import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations"; // ✅ новий імпорт
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(/^\+?[0-9\s\-]{7,20}$/, "Phone must be a valid number")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting contact:", values); // ✅ Перевіримо структуру
    const isDuplicate = contacts.some(
      (c) => c.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values)); // ✅ надсилаємо запит до бекенду
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="+380931234567"
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
