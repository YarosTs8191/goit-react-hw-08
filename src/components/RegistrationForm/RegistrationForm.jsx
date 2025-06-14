import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="div" />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="div" />
        </label>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
