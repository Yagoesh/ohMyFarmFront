import HomeSearch from "../components/HomeSearch";

const Home = () => {
  return (
    <body className=" min-h-[76vh] mt-5 mb-5">
      {" "}
      <div className="relative min-h-[15vh] m-3 rounded-xl mt-3 ">
        <div className="absolute inset-0 bg-[url('../../public/images/campo-Producto.png')] bg-center min-h-[15vh] m-3 rounded-xl mt-3">
          <ul className="p-3 relative z-10 text-white">
            <li className=" ">
              <span>F</span>
              <span className="font-Whisper ">
                ruta, verduras, carne, pescado, frutos secos.
              </span>
            </li>

            <li>
              {" "}
              <span>A</span>
              <span className="font-Whisper">
                gricultores al servicio directo de todos.
              </span>
            </li>
            <li>
              <span>R</span>
              <span className="font-Whisper">
                ecolectar y servir. Por eso ...
              </span>
            </li>
            <li>
              <span>M</span>
              <span className="font-Whisper">i Mercado es OhMyFarm</span>
            </li>
          </ul>
        </div>
      </div>
      <HomeSearch />
    </body>
  );
};
export default Home;
