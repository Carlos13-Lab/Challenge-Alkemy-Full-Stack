import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Logo from "@components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions";
import { Link } from "react-router-dom";

// Render Login page-
const RegisterPage = () => {
  const [forms, setForms] = useState(false); // SHow form or button to select user.
  const [customForm, setCustomForm] = useState(false); // Use to select what form render.

  const dispatch = useDispatch();

  // Arrow go back

  // Custom fomrs
  const FormRegister = () => {
    // Initial values form Students
    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validation: Yup.object({
        username: Yup.string().required("username required"),
        email: Yup.string().required("Email required"),
        password: Yup.string().required("Password required"),
      }),
      onSubmit: (values) => {
        const { email, password, username } = values;
        dispatch(register({ email, password, username })).catch((error) => {
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
                borderLeft: formik.errors.username ? "3px solid tomato" : "1.5px solid #b9b9b9",
              }}
              type='username'
              placeholder='username'
              id='username'
              name='username'
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <div> {formik.errors.username} </div> : null}
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
          <input type='submit' value='Registrar' />
        </form>
      </div>
    );
  };

  return (
    <main>
        <section>
          <Logo />
          <button><Link to='/' > Back Welcome </Link></button>
          <h3>Registrarse¿?</h3>
        </section>
        <FormRegister />
        <section>  
          <p>¿Ya tienes una cuenta?</p>
          <button className='welcome-button'>
            <Link to='/login'>login</Link>
          </button>
        </section>
    </main>
  );
};

export default RegisterPage;
