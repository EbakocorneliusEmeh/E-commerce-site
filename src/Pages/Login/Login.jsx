"use client"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useApp } from "../../Context/AppContext"
import "./Login.css"

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email or Phone Number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

function Login() {
  const { dispatch } = useApp()
  const navigate = useNavigate()

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login attempt:", values)

    // Simulate login
    setTimeout(() => {
      dispatch({
        type: "LOGIN",
        payload: {
          id: 1,
          name: "Md Rimel",
          email: values.email,
        },
      })
      navigate("/")
      setSubmitting(false)
    }, 1000)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/dl.beatsnoop%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2RsLmJlYXRzbm9vcCAxLnBuZyIsImlhdCI6MTc1MDYxMjMyMSwiZXhwIjoxNzgyMTQ4MzIxfQ.Pk-ryIKQWMqWckmzbqHiVWy57Pe4XX4hnYlfNB7nme0" alt="Shopping Cart" />
        </div>

        <div className="login-form-container">
          <div className="login-form-content">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="login-form">
                  <div className="form-group">
                    <Field type="text" name="email" placeholder="Email or Phone Number" className="form-input" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field type="password" name="password" placeholder="Password" className="form-input" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>

                  <div className="form-actions">
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary login-btn">
                      {isSubmitting ? "Logging in..." : "Log In"}
                    </button>
                    <Link to="/forgot-password" className="forgot-link">
                      Forget Password?
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
