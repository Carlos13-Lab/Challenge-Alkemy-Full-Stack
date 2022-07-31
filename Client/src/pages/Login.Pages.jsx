import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import Logo from "@components/Logo";
import { Link } from "react-router-dom";



// Render Login page-
const LoginPage = () => {
  const [forms, setForms] = useState(false); // SHow form or button to select user.
  const [customForm, setCustomForm] = useState(false); // Use to select what form render.

  const dispatch = useDispatch();

  // Custom fomrs
  const FormLogin = () => {
    // Initial values form Students
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validation: Yup.object({
        email: Yup.string().required("Email required"),
        password: Yup.string().required("Password required"),
      }),
      onSubmit: (values) => {
        const { email, password } = values;
        dispatch(login({ email, password }),console.log(email, password)).catch((error) => {
          let message = error.message == "Network Error" || error.message == "Incorrect email" ? error.message : error.response.data.error;
          toast.error(`Error ${message} `, {
            style: {
              border: "1px solid tomato",
              padding: "20px",
              color: "black",
            },
            iconTheme: {
              primary: "tomato",
              secondary: "#FFFAEE",
            },
          });
        });
      },
    });

    return (
      <div>
        <div>
          <Toaster position='top-right' reverseOrder={false} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              style={{
                borderLeft: formik.errors.email ? "3px solid tomato" : "1.5px solid #b9b9b9",
              }}
              type='email'
              placeholder='Correo electronico'
              id='email'
              name='email'
              onChange={formik.handleChange}
            />
            {formik.errors.email ? <div> {formik.errors.email} </div> : null}
          </div>
          <div>
            <input
              style={{
                marginTop: "5px",
                borderLeft: formik.errors.password ? "3px solid tomato" : "1.5px solid #b9b9b9",
              }}
              type='password'
              placeholder='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div> {formik.errors.password} </div> : null}
          </div>

        
          <input type='submit' value='Iniciar sessión' />
        </form>
      </div>
    );
  };


  return (
    <main>
      <article>
        <Logo />
        <button>
          <Link to='/'> Back Welcome </Link>
        </button>
      </article>
      <article>
        <FormLogin />

        <section>
          <p>No tienes cuenta? </p>
          <p>Registrate</p>
          <button className='welcome-button'>
            <Link to='/register'>register</Link>
          </button>
        </section>
      </article>
    </main>
  );
};

export default LoginPage;
