import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import {
  adminLogin,
  reset,
} from "../../../services/reducres/auth/adminAuthSlice";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.adminAuth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || admin) {
      navigate("/admin/");
    }

    // dispatch(reset());

  }, [admin, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const HandleSignIn = (data) => {
    // dispatch(adminLogin(data));
  };

  return (
    <div className="">
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
            <div className="max-w-[400px] w-full mx-auto bg-white p-8">
              <form onSubmit={handleSubmit(HandleSignIn)}>
                <h2 className="text-4xl font-bold text-center py-4">Login</h2>
                <div className="flex flex-col mb-4">
                  <label htmlFor="">Email</label>
                  <input
                    className="border relative bg-gray-100 p-2"
                    type="text"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && errors.email.message && (
                    <p className="text-red-500">{errors.email.message}</p>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
