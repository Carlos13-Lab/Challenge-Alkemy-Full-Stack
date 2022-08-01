import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Logo from "@components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions";
import { Link } from "react-router-dom";

import Img from "../assets/bandera-mini.png";
import Arrow from "@components/Left-Arrow";
import "../styles/welcome.css";


// Render Login page-
const RegisterPage = () => {

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
              className='input-login'
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
              className='input-login'
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
              className='input-login'
              type='password'
              placeholder='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div> {formik.errors.password} </div> : null}
          </div>
          <input type='submit' value='Registrar' className='input-login-botton' />
        </form>
      </div>
    );
  };

  return (
    <main className='welcome'>
      <article className='welcome-section'>
        <div>
          <img src={Img} alt='' className='welcome-section-img' />
        </div>
      </article>
      <div className='welcome-container'>
        <div className='back-welcome'>
          <Link to='/'>
            {" "}
            <Arrow />{" "}
          </Link>
        </div>
        <h1 className='welcome-logo'>
          <Logo />
        </h1>
        <p className='welcome-text1'>
          Welcome <span>MONEY</span>
        </p>
        <div className='welcome-login'>
          <FormRegister />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
