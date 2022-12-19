import React from "react";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from "./routes/User";
import AdminRoute from "./routes/Admin";
function App() {
  return (
    <>
      <UserRoutes />
      <AdminRoute />
    </>
  );
}

export default App;
