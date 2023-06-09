import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addContacts, getContacts } from 'redux/index';
import { submitSchema } from 'components/services/index';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values, action) => {
      const isIncluded = contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.toLowerCase().trim()
      );

      if (isIncluded) {
        action.resetForm();
        toast.error(`${values.name.trim()} is already in contacts`);
        return;
      }
      dispatch(addContacts(values.name.trim(), values.number.trim()));

      action.resetForm();
    },
    [contacts, dispatch]
  );

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={submitSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.text}>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage component="div" name="name" className={css.error} />
          </label>
          <label className={css.label}>
            <span className={css.text}>Number</span>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage component="div" name="number" className={css.error} />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export { ContactForm };