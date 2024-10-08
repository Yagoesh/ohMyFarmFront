const RegisterTienda = () => {
  return (
    <body className="min-h-[76vh] mt-5">
      <div className="bg-gradient-to-t from-gradienteB1 from-[20%] via-gradienteB2 via-[38%] to-gradienteB3 to-[80%] rounded-xl mx-4 my-18 min-h-[68vh] shadow-lg shadow-gray-500/50 flex flex-col items-center gap-8">
        <h1 className="m-2 text-xl ">Registra tu tienda</h1>
        <form action="" className="flex flex-col gap-6 justify-center">
          <input
            type="text"
            placeholder="Nombre"
            className="rounded-lg p-2 w-[32vh]"
          />
          <input
            type="text"
            placeholder="Primer Apellido"
            className="rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Segundo Apellido"
            className="rounded-lg p-2"
          />
          <input type="email" placeholder="Email" className="rounded-lg p-2" />
          <input
            type="password"
            placeholder="Contraseña"
            className="rounded-lg p-2"
          />
          <input
            type="select"
            placeholder="Ciudad"
            className="rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Dirección"
            className="rounded-lg p-2"
          />
          <button className="bg-buttonPrimary rounded-3xl p-2 text-white ">
            Registrar
          </button>
        </form>
      </div>
    </body>
  );
};
export default RegisterTienda;
