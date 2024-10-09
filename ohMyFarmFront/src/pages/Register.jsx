import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { VITE_BASE_URL } from "../config/env.js";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "../schemas/registerSchema";

const Register = () => {
  const [ciudades, setCiudades] = useState([]);
  const [selectedCiudad, setSelectedCiudad] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: joiResolver(registerSchema),
  });

  useEffect(() => {
    const fetchCiudades = async () => {
      try {
        const ciudades = await axios.get(`${VITE_BASE_URL}/ciudades`);
        const ciudadesArray = Object.values(ciudades.data.data.ciudades);
        setCiudades(ciudadesArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCiudades();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      data.role = "cliente";
      data.ciudadId = selectedCiudad;
      const response = await axios.post(
        `${VITE_BASE_URL}/users/register`,
        data
      );
      if (response.data.status === "ok" || response.data.status === 201) {
        toast.success("Usuario registrado correctamente");
        reset();
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
  return (
    <body className="min-h-[76vh] mt-5">
      <ToastContainer autoClose={1500} />
      <div className="min-h-[68vh] from-gradienteB1 from-[20%] via-gradienteB2 via-[38%] to-gradienteB3 to-[80%] rounded-xl mx-4 my-18 max-h-[68vh] shadow-lg shadow-gray-500/50 flex flex-col items-center gap-8 overflow-y-auto">
        <h1 className="m-2 text-xl ">Registrate en 2 minutos ...</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 justify-center"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="rounded-lg p-2 w-[32vh]"
            {...register("nombre")}
          />

          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.nombre ? errors.nombre.message : ""}
          </p>

          <input
            type="text"
            placeholder="Primer Apellido"
            className="rounded-lg p-2"
            {...register("primerApellido")}
          />

          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.primerApellido ? errors.primerApellido.message : ""}
          </p>
          <input
            type="text"
            placeholder="Segundo Apellido"
            className="rounded-lg p-2"
            {...register("segundoApellido")}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.segundoApellido ? errors.segundoApellido.message : ""}
          </p>
          <input
            type="tel"
            placeholder="movil"
            className="rounded-lg p-2"
            {...register("movil")}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.movil ? errors.movil.message : ""}
          </p>
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg p-2"
            {...register("email")}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.email ? errors.email.message : ""}
          </p>
          <input
            type="password"
            placeholder="Contraseña"
            className="rounded-lg p-2"
            {...register("password")}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.password ? errors.password.message : ""}
          </p>
          <select
            id="ciudadId"
            className="rounded-lg p-2"
            {...register("ciudadId")}
            onChange={(e) => setSelectedCiudad(e.target.value)}
          >
            <option value="">Selecciona un tipo</option>
            {ciudades.map((ciudad) => {
              return (
                <option value={ciudad.ciudadId} key={ciudad.ciudadId}>
                  {ciudad.ciudad}
                </option>
              );
            })}
          </select>
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.ciudad ? errors.ciudad.message : ""}
          </p>
          <input
            type="text"
            placeholder="Dirección"
            className="rounded-lg p-2"
            {...register("direccion")}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.direccion ? errors.direccion.message : ""}
          </p>
          <button className="bg-buttonPrimary rounded-3xl p-2 m-5  mt-2  text-white ">
            Registrar
          </button>
        </form>
      </div>
    </body>
  );
};
export default Register;
