const Header = () => {
  return (
    <header className="border-b border-white rounded-b-xl min-h-[11vh] mb-0 flex justify-between items-center">
      <img
        src="../public/images/omf-logo.png"
        alt="logo"
        className="m-1 border-b border-white rounded-b-lg  max-h-[11vh]"
      />
      <div className="flex gap-1 m-2">
        <button className="bg-buttonPrimary rounded-3xl p-3  max-w-[9vh] text-white ">
          Login
        </button>
        <button className="bg-buttonPrimary rounded-3xl p-2 max-w-[9vh] text-white ">
          Registrar
        </button>
      </div>
    </header>
  );
};
export default Header;
