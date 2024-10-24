import { useForm } from "react-hook-form";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { VITE_BASE_URL } from "../config/env.js";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "../schemas/registerSchema";
import { useParams } from "react-router-dom";

const Register = () => {
  const [modal, setModal] = useState(false);
  const [ciudades, setCiudades] = useState([]);
  const [selectedCiudad, setSelectedCiudad] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { role } = useParams();
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
      data.role = role;

      data.ciudadId = selectedCiudad;
      const response = await axios.post(
        `${VITE_BASE_URL}/users/register`,
        data
      );
      if (response.data.status === "ok" || response.data.status === 201) {
        toast.success(
          "Usuario registrado correctamente, Verifica tu correo y ya puedes disfruta de OhMyFarm.com"
        );

        reset();
        setIsDisabled(true);
        setModal(true);

        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
  return (
    <body className="min-h-[76vh] mt-5 ">
      <ToastContainer autoClose={2000} />
      {modal ? (
        <div className="min-h-[46vh] min-w-[36vh] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-customlightgreen via-customlightblue to-secondarylight shadow-[0px_2px_5px_1px_rgba(255,255,255,0.2)] rounded-3xl">
          <h2 className="my-4 text-2xl">REGISTRAD@</h2>
          <p className="mx-4 my-3 text-xl">
            Desde este momento formas parte de una gran familia que se encarga
            de llevar a tu mesa los alimentos más frescos!
          </p>
          <p className="mx-4 text-2xl">
            Ya sólo falta que verifiques tu correo electronico para disFRUTAr de
            Oh My Farm.
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="min-h-[68vh] from-gradienteB1 from-[20%] via-gradienteB2 via-[38%] to-gradienteB3 to-[80%] rounded-xl mx-4 my-18 max-h-[68vh] shadow-lg shadow-gray-500/50 flex flex-col items-center gap-8 overflow-y-auto">
        <h1 className="m-2 text-xl font-Whisper text-white">
          Registrate en 2 minutos ...
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 justify-center"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="rounded-lg p-2 w-[32vh]"
            {...register("nombre")}
            disabled={isDisabled}
          />

          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.nombre ? errors.nombre.message : ""}
          </p>

          <input
            type="text"
            placeholder="Primer Apellido"
            className="rounded-lg p-2"
            {...register("primerApellido")}
            disabled={isDisabled}
          />

          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.primerApellido ? errors.primerApellido.message : ""}
          </p>
          <input
            type="text"
            placeholder="Segundo Apellido"
            className="rounded-lg p-2"
            {...register("segundoApellido")}
            disabled={isDisabled}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.segundoApellido ? errors.segundoApellido.message : ""}
          </p>
          <input
            type="tel"
            placeholder="movil"
            className="rounded-lg p-2"
            {...register("movil")}
            disabled={isDisabled}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.movil ? errors.movil.message : ""}
          </p>
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg p-2"
            {...register("email")}
            disabled={isDisabled}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.email ? errors.email.message : ""}
          </p>
          <input
            type="password"
            placeholder="Contraseña"
            className="rounded-lg p-2"
            {...register("password")}
            disabled={isDisabled}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.password ? errors.password.message : ""}
          </p>
          <select
            id="ciudadId"
            className={`rounded-lg p-2 z-0 ${modal ? "hidden" : ""}`}
            {...register("ciudadId")}
            onChange={(e) => setSelectedCiudad(e.target.value)}
            disabled={isDisabled}
          >
            <option value="">Selecciona tu ciudad</option>
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
            disabled={isDisabled}
          />
          <p className="text-red-500 mt-0 w-[32vh]">
            {errors.direccion ? errors.direccion.message : ""}
          </p>
          <button
            className="bg-buttonPrimary rounded-3xl p-2 m-5  mt-2  text-white "
            disabled={isDisabled}
          >
            Registrar
          </button>
        </form>
      </div>
    </body>
  );
};
export default Register;
