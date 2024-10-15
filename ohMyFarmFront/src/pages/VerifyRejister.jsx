import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const VerifyRejister = () => {
  const { role, regCode } = useParams();
  console.log(role);
  console.log(regCode);
  return (
    <body className="min-h-[76vh] mt-5 mx-4 flex flex-col gap-50">
      <div className="min-h-[10vh] max-w-[30vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-4 rounded-xl">
        Te has registrado con exito!!!,{" "}
      </div>
      <div className="max-w-[30vh] self-end shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-4 rounded-xl">
        Te damos la bienvenida a nuestra granja virtual. Olvidate de
        supermercados y sus productos manipulados.
      </div>
      <div className="max-w-[30vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-4 rounded-xl">
        Cada dia se suman granjeros que colaboran con OhMyFarm para que la
        alimentacion no sea negocio sino SALUD.
      </div>
      <div className="max-w-[30vh] self-end shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-4 rounded-xl">
        Aqui enconntrarás granjeros particulares de todas las categorias en tu
        ciudad.
      </div>
      <div className="max-w-[30vh] shadow-[0px_4px_8px_2px_rgba(255,255,255,0.4)] flex items-center p-4 rounded-xl">
        Añade a tu cesta virtual lo que necesites y en menos de 24 horas lo
        tienes
      </div>
      <NavLink
        className=" min-h-[5vh] p-6 text-xl bg-white text-center rounded-2xl self-center mt-6"
        to={"/login"}
      >
        Empezar
      </NavLink>
    </body>
  );
};
export default VerifyRejister;
