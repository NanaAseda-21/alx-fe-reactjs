import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data));
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Username:</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />

          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
