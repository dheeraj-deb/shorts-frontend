import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { login, reset } from "../../../services/reducres/user/UserSlice";

import videoComponent from "../../../assets/overlayvdo.mp4";
import Spinner from "../../../components/Spinner";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const HandleSignIn = (data) => {
    dispatch(login(data));
  };

  if (isLoading) {
    return (
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={videoComponent}
            type="video/mp4"
            loop={true}
            controls={false}
            muted
            autoPlay={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={videoComponent}
            type="video/mp4"
            loop={true}
            controls={false}
            muted
            autoPlay={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
            <div className="max-w-[400px] w-full mx-auto bg-white p-8">
              <form onSubmit={handleSubmit(HandleSignIn)}>
                <h2 className="text-4xl font-bold text-center py-4">Login</h2>
                <div className="flex flex-col mb-4">
                  <label htmlFor="">Username</label>
                  <input
                    className="border relative bg-gray-100 p-2"
                    type="text"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && errors.username.message && (
                    <p className="text-red-500">{errors.username.message}</p>
                  )}
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="">Password</label>
                  <input
                    className="border relative bg-gray-100 p-2"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && errors.password.message && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                  LogIn
                </button>
                <div className="flex items-center justify-between mt-2">
                  <p className="flex items-center">
                    <input className="mr-2" type="checkbox" /> Remember me
                  </p>
                  <Link to="/forgot_password">
                    <p className="text-blue-600">Forgot password</p>
                  </Link>
                </div>
                <div className="flex  justify-center py-5">
                  <div className="border shadow-lg hover:shadow-xl rounded-full cursor-pointer relative flex items-center">
                    <FcGoogle
                      style={{ fontSize: "2.4rem", padding: 0, margin: 0 }}
                      className="mr-2"
                    />
                  </div>
                  <div className=" ml-2 border shadow-lg hover:shadow-xl rounded-full justify-center cursor-pointer relative flex items-center">
                    <BsFacebook
                      style={{ fontSize: "2.2rem", padding: 0, margin: 0 }}
                      className="mr-2"
                    />
                  </div>
                </div>
                <p className="text-center mt-3">
                  Not a member?{" "}
                  <Link to="/signup">
                    <span className="text-blue-600 cursor-pointer">
                      Sign up now
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
