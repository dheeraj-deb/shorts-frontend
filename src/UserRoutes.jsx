import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/signUp/SignUp";
import SignIn from "./pages/auth/signIn/SignIn";
import Home from "./pages/user/Home";
import FileUpload from './pages/user/FileUpload'
import { ToastContainer } from "react-toastify";

function UserRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/fileupload" element={<FileUpload/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default UserRoutes;
