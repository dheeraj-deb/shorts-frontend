import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Axios from "../../../util/Axios";
import "./signin.css";

const errorMessageStyle = {
  fontSize: "12px",
  color: "red",
  marginTop: 2,
};

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data) => {
    try {
      const response = await Axios.post("/auth/user/signin", data);
      const token = response.data.accessToken;
      localStorage.setItem("shortsAccess", "Bearer " + token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      <div className="formCard p-4">
        <div className="heading d-flex flex-column align-items-center">
          <h4>Welcome back!</h4>
          <p>Login to continue</p>
        </div>
        <Form onSubmit={handleSubmit(handleSignIn)} className="px-5">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              {...register("username", { required: true })}
              placeholder="sample2321"
            />
            {errors.username && errors.username.type === "required" && (
              <div style={errorMessageStyle}>Username is required!</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", { required: true })}
              placeholder="********"
            />
            {errors.password && errors.password.type === "required" && (
              <div style={errorMessageStyle}>Password is required!</div>
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

export default SignIn;
