import React, { useEffect } from "react";
import { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import Spinner from "../../Spinner";
import { useDispatch, useSelector } from "react-redux";

import { createPost, reset } from "../../../services/reducres/post/postSlice";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

function FileUpload() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.post
  );

  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    video: "",
  });

  function handleUpload(e) {
    e.preventDefault();
    dispatch(createPost(uploadData));
  }

  useEffect(() => {
    if (isError) {
      toast(message);
    }

    if (isSuccess) {
      navigate("/");
      toast("post uploaded successfully");
      dispatch(reset());
    }
  }, [post, isLoading, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <div className="w-100 h-[100vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-100 h-[100vh]">
      <form className="flex flex-col justify-between mt-4">
        <div className=" border-dashed border-2 border-gray-300 flex flex-col items-center py-4 rounded">
          <BsCloudUpload fontSize={100} />
          <div className="flex items-center space-x-6">
            <label className="block">
              <input
                onChange={(e) =>
                  setUploadData({
                    ...uploadData,
                    video: e.target.files[0],
                  })
                }
                type="file"
                className="block w-full text-sm text-slate-500 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50  file:text-violet-700 hover:file:bg-violet-100 file:mr-4 file:py-2 file:px-4"
              />
            </label>
          </div>
        </div>
        <div className="py-4">
          <input
            onChange={(e) =>
              setUploadData({
                ...uploadData,
                title: e.target.value,
              })
            }
            className="border-2 border-gray-300 w-[100%] mb-4 outline-none px-2 py-1 font-poppins rounded"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(e) =>
              setUploadData({
                ...uploadData,
                description: e.target.value,
              })
            }
            placeholder="Description"
            className="border-2 border-gray-300 w-[100%] outline-none px-2 font-poppins rounded"
            cols="30"
            rows="10"
          ></textarea>
          <div className="w-100 flex justify-end">
            <button
              onClick={handleUpload}
              className="bg-[#5837D0] px-2 py-1 rounded-md font-poppins text-white"
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
