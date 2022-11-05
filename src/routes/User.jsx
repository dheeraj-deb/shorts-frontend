import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "../pages/auth/signUp/SignUp";
import SignIn from "../pages/auth/signIn/SignIn";
import Home from "../pages/user/Home";
import FileUpload from "../pages/user/FileUpload";
import { ToastContainer } from "react-toastify";
import Chat from "../pages/user/Chat";
import Profile from "../pages/user/Profile";
import { useSelector } from "react-redux";

function UserRoutes() {
  // const navigate = Navigate()
  // const {user} = useSelector((state) => state.auth)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/message" element={<Chat />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default UserRoutes;
