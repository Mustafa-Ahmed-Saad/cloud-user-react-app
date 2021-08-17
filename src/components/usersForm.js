import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function UsersForm(props) {
   const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      username: Yup.string().required(),
   });

   return (
      <Formik
         enableReinitialize={true}
         initialValues={props.values}
         onSubmit={props.onSubmit}
         validationSchema={schema}
         render={() => {
            return (
               <Form>
                  <label>Name</label>
                  <Field name="name" />
                  <ErrorMessage name="name" />

                  <br />

                  <label>Email</label>
                  <Field name="email" />
                  <ErrorMessage name="email" />

                  <br />

                  <label>user name</label>
                  <Field name="username" />
                  <ErrorMessage name="username" />

                  <br />

                  <button type="submit">Send</button>
               </Form>
            );
         }}
      />
   );
}
