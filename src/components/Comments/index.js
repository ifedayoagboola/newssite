import React from "react";
import "./Comments.scss";

import { Formik } from "formik";

const Comments = () => (
  <div className="comments">
    <h2>Leave a reply</h2>
    <p>Your email address will not be published.</p>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Your name here"
          />
          {errors.name && touched.name && errors.name}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Your email here"
          />
          {errors.email && touched.email && errors.email}
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder="Leave your message here"
          />
          {errors.message && touched.message && errors.message}

          <button type="submit" disabled={isSubmitting}>
            Post comment
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Comments;
