import React from "react";
import { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";

function FileUpload() {

    const [file, setfile] = useState('')


    function handleUpload(){

    }


  return (
    <div className="w-100 h-[575px] border-dashed border-2 border-gray-300 flex flex-col items-center justify-center">
      <BsCloudUpload fontSize={200} />
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            onChange={(e)=>console.log(e.target.files)}
            type="file"
            className="block w-full text-sm text-slate-500
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            file:mr-4 file:py-2 file:px-4
            "
          />
        </label>
      </form>
      <button onClick={handleUpload} className="bg-violet-500 p-2 rounded-md">Upload</button>
    </div>
  );
}

export default FileUpload;
