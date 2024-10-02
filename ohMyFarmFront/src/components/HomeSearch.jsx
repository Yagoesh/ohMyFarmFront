const HomeSearch = () => {
  return (
    <div className="bg-gradient-to-t from-gradienteB1 from-[20%] via-gradienteB2 via-[38%] to-gradientB3 to-[80%] rounded-xl m-4 mt-4">
      {" "}
      <div className="min-h-12  bg-[#B0D9AE] rounded-xl m-5 flex justify-between">
        <div className="bg-[#74BB9E] min-h-5 min-w-[130px] rounded-xl m-1 flex justify-center items-center text-white text-xl">
          Ciudad
        </div>
        <div className="bg-[#41788F] min-h-5 min-w-[130px] rounded-xl m-1 flex justify-center items-center text-white text-xl">
          Categorias
        </div>
      </div>
      <input
        type="text"
        className="rounded-xl m-1 flex justify-center items-center m-auto min-h-5 min-w-[130px] rounded-xl p-2"
        placeholder="Search..."
      />
      <div className="min-h-[25vh]  ">
        <div className="min-h-12 max-w-70 min-w-60 bg-[#f1f1fe] rounded-xl m-5 flex justify-center items-center text-xl">
          Lorem ipsum dolor, si
        </div>
        <div className="min-h-12 max-w-70 min-w-60 bg-[#f1f1fe] rounded-xl m-5 flex justify-center items-center text-xl">
          Lorem ipsu
        </div>
        <div className="min-h-12 max-w-70 min-w-60 bg-[#f1f1fe] rounded-xl m-5 flex justify-center items-center text-xl">
          Lorem i
        </div>
      </div>
    </div>
  );
};
export default HomeSearch;
