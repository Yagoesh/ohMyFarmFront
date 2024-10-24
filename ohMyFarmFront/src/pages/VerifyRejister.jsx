import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { VITE_BASE_URL } from "../config/env";

const VerifyRejister = () => {
  const { role, regCode } = useParams();

  useEffect(() => {
    const verifyRegister = async () => {
      try {
        const response = await axios.put(
          `${VITE_BASE_URL}/users/validate/${role}/${regCode}`
        );
        if (response.data.status === "ok") {
          toast.success("Correo electronico verifiado con exito !");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    verifyRegister();
  }, []);

  return (
    <body className="min-h-[76vh] max-h-[76vh] mt-4 mx-4 flex flex-col gap-1">
      <ToastContainer autoClose={2000} />
      <div className="min-h-[6vh] max-w-[28vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-3 rounded-xl">
        Te has registrado con exito!!!,{" "}
      </div>
      <div className="max-w-[28vh] self-end shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-3 rounded-xl">
        Te damos la bienvenida a nuestra granja virtual. Olvidate de
        supermercados y sus productos manipulados.
      </div>
      <div className="max-w-[28vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-3 rounded-xl">
        Cada dia se suman granjeros que colaboran con OhMyFarm para que la
        alimentacion no sea negocio sino SALUD.
      </div>
      <div className="max-w-[28vh] self-end shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-3 rounded-xl">
        Aqui enconntrarás granjeros particulares de todas las categorias en tu
        ciudad.
      </div>
      <div className="max-w-[28vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-3 rounded-xl">
        Añade a tu cesta virtual lo que necesites y en menos de 24 horas lo
        tienes
      </div>
      <NavLink
        className=" min-h-[4vh] p-6 text-xl bg-white text-center rounded-2xl self-center mt-8"
        to={"/login"}
      >
        Empezar
      </NavLink>
    </body>
  );
};
export default VerifyRejister;
