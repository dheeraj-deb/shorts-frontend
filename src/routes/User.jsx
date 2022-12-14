import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "../pages/auth/signUp/SignUp";
import SignIn from "../pages/auth/signIn/SignIn";
import Home from "../pages/user/Home";
import SuggestionSm from "../pages/user/SuggestionSm"
import FileUpload from "../pages/user/FileUpload";
import { ToastContainer } from "react-toastify";
import Chat from "../pages/user/Chat";
import Profile from "../pages/user/Profile";
import { useSelector } from "react-redux";
import Notification from "../pages/user/Notification";

function UserRoutes() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/file-upload" element={user ? <FileUpload /> : <Navigate to="/login" />} />
          <Route path="/message" element={user ? <Chat /> : <Navigate to="/login" />} />
          {/* <Route path="/my-profile" element={user ? <Profile /> : <Navigate to="/login" />} /> */}
          <Route path="/suggested-users" element={user ? <SuggestionSm /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={user ? <Notification /> : <Navigate to="/login" />} />
          <Route path="/profile/:id" element={<Profile />} />

        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default UserRoutes;
