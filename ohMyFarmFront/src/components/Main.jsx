import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import VerifyRejister from "../pages/VerifyRejister";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/:role" element={<Register />} />
      <Route
        path="/verifyRegister/:role/:regCode"
        element={<VerifyRejister />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Main;
