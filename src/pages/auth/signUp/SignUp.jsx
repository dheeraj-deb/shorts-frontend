import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const baseURL = process.env.BASE_URL;

const errorMessageStyle = {
  fontSize: "12px",
  color: "red",
  marginTop: 2,
};

function SignUp() {
  const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data) => {
    try {
      const signup_Axios = await axios.create({
        baseURL: "http://localhost:4000/shorts/api",
      });

      const response = await signup_Axios.post("/auth/user/signup", data);
      if (response) {
        console.log("response", response);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response);
      console.log(signUpError);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setSignUpError(error.response.data.message);
      }
    }
  };

  return (
    <div className="box">
      {signUpError && <p>{signUpError}</p>}
      <div className="formCard p-4">
        <div className="heading d-flex flex-column align-items-center">
          <h4>Welcome to Shorts!</h4>
          <p>share your skills</p>
        </div>
        <Form onSubmit={handleSubmit(handleSignup)} className="px-5">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              {...register("username", {
                minLength: 4,
                maxLength: 8,
                required: true,
              })}
              placeholder="sample2321"
            />
            {errors.username && errors.username.type === "required" && (
              <div style={errorMessageStyle}>Username is required!</div>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <div style={errorMessageStyle}>
                Username must has minimum 4 characters
              </div>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <div style={errorMessageStyle}>
                Username is too long keep it with in 8 characters
              </div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              })}
              placeholder="example@gmail.com"
            />
            {errors.email && errors.email.type === "required" && (
              <div style={errorMessageStyle}>Email is required!</div>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <div style={errorMessageStyle}>Please enter a valid email</div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              {...register("date_of_birth", { required: true })}
              placeholder=""
            />
            {errors.date_of_birth && errors.date_of_birth === "required" && (
              <div style={errorMessageStyle}>Date of birth is required!</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              })}
              placeholder="********"
            />
            {errors.password && errors.password.type === "required" && (
              <div style={errorMessageStyle}>Password is required!</div>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <div style={errorMessageStyle}>
                Password must contain 8 characters, alphabets[a-z], numbers[0-9]
                and Special characters
              </div>
            )}
          </Form.Group>
          <Button type="submit" className="w-100">
            SignUp
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
