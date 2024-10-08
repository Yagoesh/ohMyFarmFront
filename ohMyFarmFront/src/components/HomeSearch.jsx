import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_BASE_URL } from "../config/env";

const HomeSearch = () => {
  const [buttonCiudad, setButtonCiudad] = useState(true);
  const [ciudades, setCiudades] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    searchCiudad();
  }, []);
  const searchCiudad = async () => {
    const allCiudades = await axios.get(`${VITE_BASE_URL}/ciudades`);

    setCiudades(allCiudades.data?.data?.ciudades);
    setButtonCiudad(true);
  };
  const searchCategorias = async () => {
    const allCategorias = await axios.get(`${VITE_BASE_URL}/familias`);

    setCategorias(allCategorias.data?.data?.familias);
    setButtonCiudad(false);
  };

  return (
    <div className="bg-gradient-to-t from-gradienteB1 from-[10%] via-gradienteB2 via-[38%] to-gradientB3 to-[80%] rounded-xl mx-4 mt-12">
      {" "}
      <div className="min-h-12  bg-[#B0D9AE] rounded-xl m-5 flex justify-between">
        <button
          className="bg-[#74BB9E] min-h-5 min-w-[130px] rounded-xl m-1 flex justify-center items-center text-white text-xl"
          onClick={searchCiudad}
        >
          Ciudad
        </button>
        <button
          className="bg-[#41788F] min-h-5 min-w-[130px] rounded-xl m-1 flex justify-center items-center text-white text-xl"
          onClick={searchCategorias}
        >
          Categorias
        </button>
      </div>
      <div className="min-h-[25vh] m-5 max-h-[22vh] overflow-y-auto">
        {buttonCiudad
          ? ciudades.map((ciudad) => {
              return (
                <NavLink
                  to="login"
                  className="rounded-xl m-1 bg-[#e3f8fa] min-h-10 max-w-15 m-4 flex justify-center items-center text-xl "
                  key={ciudad.diudadId}
                >
                  {ciudad.ciudad}
                </NavLink>
              );
            })
          : categorias.map((categoria) => {
              return (
                <NavLink
                  to="/login"
                  className="rounded-xl m-1 bg-[#e3f8fa] min-h-10 max-w-15 m-4 flex justify-center items-center text-xl"
                  key={categoria.familiaId}
                >
                  {categoria.familia}
                </NavLink>
              );
            })}
      </div>
    </div>
  );
};
export default HomeSearch;
