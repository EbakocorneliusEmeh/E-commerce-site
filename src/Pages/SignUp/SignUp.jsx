"use client"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useApp } from "../../Context/AppContext"
import "./SignUp.css"

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email or Phone Number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

function SignUp() {
  const { dispatch } = useApp()
  const navigate = useNavigate()

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Sign up attempt:", values)

    // Simulate registration
    setTimeout(() => {
      dispatch({
        type: "LOGIN",
        payload: {
          id: 1,
          name: values.name,
          email: values.email,
        },
      })
      navigate("/")
      setSubmitting(false)
    }, 1000)
  }

  const handleGoogleSignUp = () => {
    console.log("Google sign up clicked")
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-image">
          <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/dl.beatsnoop%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL2RsLmJlYXRzbm9vcCAxLnBuZyIsImlhdCI6MTc1MDYxMjMyMSwiZXhwIjoxNzgyMTQ4MzIxfQ.Pk-ryIKQWMqWckmzbqHiVWy57Pe4XX4hnYlfNB7nme0" alt="Shopping Cart" />
        </div>

        <div className="signup-form-container">
          <div className="signup-form-content">
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="signup-form">
                  <div className="form-group">
                    <Field type="text" name="name" placeholder="Name" className="form-input" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field type="text" name="email" placeholder="Email or Phone Number" className="form-input" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field type="password" name="password" placeholder="Password" className="form-input" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary create-btn">
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>

                  <button type="button" onClick={handleGoogleSignUp} className="btn btn-secondary google-btn">
                    <img src="https://bstntljwbchhsaxmprem.supabase.co/storage/v1/object/sign/side/Icon-Google.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wOWU0N2JjOC1kOTg2LTRkOTMtOGJkYi02YzliNWVkYTM5MzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaWRlL0ljb24tR29vZ2xlLnBuZyIsImlhdCI6MTc1MDYxMjYwMSwiZXhwIjoxNzgyMTQ4NjAxfQ.mT3Aul9mFMfprIw_w4auLal2U0DMBHYXY9yUZUYn_pc" alt="Google" />
                    Sign up with Google
                  </button>

                  <div className="login-link">
                    <span>Already have account? </span>
                    <Link to="/login">Log in</Link>
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

export default SignUp
