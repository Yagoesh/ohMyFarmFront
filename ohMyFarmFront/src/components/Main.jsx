import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegisterTienda from "../pages/RegisterTienda";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerTienda" element={<RegisterTienda />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Main;
