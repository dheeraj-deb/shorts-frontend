import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import videoComponent from "../../../assets/overlayvdo.mp4";
import Spinner from "../../../components/Spinner";
import { reset } from "../../../services/reducres/auth/authSlice";
import AxiosReq from "../../../util/Axios";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
  }, []);

  const handleSignup = async (data) => {
    try {
      const response = await AxiosReq.post("/auth/user/signup", data);
      console.log(response);
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      toast(message.message);
    }
  };

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
          <div className="max-w-[400px] w-full mx-auto bg-white p-6">
            <form onSubmit={handleSubmit(handleSignup)}>
              <h2 className="text-4xl font-bold text-center py-3">SignUp</h2>
              <div className="flex flex-col py-2">
                <label htmlFor="">Username</label>
                <input
                  className="border p-2"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: 4,
                    maxLength: 30,
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username && errors.username.message && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="">Email</label>
                <input
                  className="border p-2"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && errors.email.message && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-red-500">Enter a valid email</p>
                )}
                {console.log(errors)}
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="">Age</label>
                <input
                  className="border p-2"
                  type="text"
                  {...register("age", {
                    required: "age is required",
                    min: 16,
                    max: 100,
                  })}
                  aria-invalid={errors.age ? "true" : "false"}
                />
                {errors.age && errors.age.message && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="">Password</label>
                <input
                  className="border p-2"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern:
                      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && errors.password.message && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain min 6 characters. include alphabets,
                    numbers, special characters
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="border w-full my-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Signup
              </button>

              <p className="text-center">
                Already a member?{" "}
                <Link to="/login">
                  <span className="text-blue-600">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
