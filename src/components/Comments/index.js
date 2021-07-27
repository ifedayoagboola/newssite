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
    <div>
      <h3>See all comments below:</h3>
      <h5 className="comment"></h5>
      <h4></h4>
    </div>
  </div>
);

export default Comments;

// const Comments = () => {
//   const name = document.querySelector(
//     "#root > div > div > div > div.comment > form > div.name > input[type=text]"
//   );
//   const comment = document.querySelector(
//     "#root > div > div > div > div.comment > form > div.message > textarea"
//   );
//   const [nameValue, setNameValue] = useState("");
//   const [commentValue, setCommentValue] = useState("");
//   return (
//     <div className="comment">
//       <h2>Leave a reply</h2>
//       <p>Your email address will not be published.</p>
//       <form action="submit">
//         <div className="name">
//           <input placeholder="Type your name" type="text" name="name" />
//         </div>

//         <div className="message">
//           <textarea
//             placeholder="Leave a message"
//             name="comment"
//             id=""
//           ></textarea>
//         </div>
//         <div className="submit">
//           <input
//             type="submit"
//             onClick={(e) => {
//               e.preventDefault();
//               setNameValue(name.value);
//               setCommentValue(comment.value);
//             }}
//           />
//         </div>
//       </form>

//       <div>
//         {nameValue === null ?? <p>Fill the space above</p>}
//         <h3>See all comments below:</h3>
//         <h4>{nameValue ? nameValue : ""}</h4>
//         <h5>{commentValue ? commentValue : ""}</h5>
//       </div>
//     </div>
//   );
// };

// export default Comments;
