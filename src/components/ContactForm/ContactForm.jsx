import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'The "Name" is too Short!')
    .max(50, 'The "Name" is too Long!')
    .required('The "Name" is Required field!'),
  number: Yup.string()
    .min(3, 'The "Number" is too Short!')
    .max(50, 'The "Number" is too Long!')
    .required('The "Number" is Required field!'),
});

const initialValues = {
  username: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const usernameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), name: values.username, number: values.number };
    onAdd(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label className={css.label} htmlFor={usernameFieldId}>Name</label>
            <Field className={css.field}
              id={usernameFieldId}
              name="username"
              type="text"
              placeholder="Enter your name"
            />
            <ErrorMessage name="username" component="div" className={css.error} />
          </div>
          <div className={css.formInputWrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field className={css.field}
              id={numberFieldId}
              name="number"
              type="text"
              placeholder="Enter your number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button className={css.btn} type="submit" disabled={isSubmitting}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;


