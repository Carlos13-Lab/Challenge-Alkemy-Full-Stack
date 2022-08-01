import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import Logo from "@components/Logo";
import Img from "../assets/bandera-mini.png";
import Arrow from "@components/Left-Arrow";
import "../styles/welcome.css";
import { Link } from "react-router-dom";

// Render Login page-
const LoginPage = () => {

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
        dispatch(login({ email, password })).catch((error) => {
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
            className="input-login"
              type='email'
              placeholder='Correo electronico'
              id='email'
              name='email'
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
            className="input-login"
              type='password'
              placeholder='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          
          </div>
          <button type='submit' className="input-login-botton">
            Iniciar sesion 
          </button>
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
        <div className="back-welcome">
          <Link to='/'> <Arrow/> </Link>
        </div>
        <h1 className='welcome-logo'>
          <Logo />
        </h1>
        <p className='welcome-text'>
          Welcome <span>MONEY</span>
        </p>
        <div className='welcome-login'>
          <FormLogin />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
