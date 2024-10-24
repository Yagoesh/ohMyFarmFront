import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-footerGrad1/20 from-[7%] via-footerGrad2/20 via-[47%] to-footerGrad3/20 to-[88%] min-h-8 mb-0 flex flex-col mt-2 mx-2">
      <NavLink
        className="mx-2 my-0 "
        to="/register/tienda"
        state={{ role: "tienda" }}
      >
        Colaborar como tienda
      </NavLink>
      <a className="mx-2   " href="">
        Sobre nosotros
      </a>
    </footer>
  );
};
export default Footer;
