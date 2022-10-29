import React from "react";
import { Upload } from "../../components/user/index";
import Layout from "../../components/user/Layout";

function FileUpload() {
  return <Layout children={<Upload />} />;
}

export default FileUpload;
