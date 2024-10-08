import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-headerBorder rounded-b-xl min-h-[11vh] mb-0 flex justify-between items-center">
      <NavLink to="/">
        <img
          src="../public/images/omf-logo.png"
          alt="logo"
          className="m-1 border-b border-white rounded-b-lg  max-h-[11vh]"
        />
      </NavLink>

      <div className="flex gap-1 m-2">
        <NavLink
          to="/login"
          className="bg-buttonPrimary rounded-3xl p-2 max-w-[20vh] text-white "
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="bg-buttonPrimary rounded-3xl p-2 max-w-[20vh] text-white "
        >
          Registrar
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
