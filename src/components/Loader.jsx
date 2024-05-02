function Loader() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary/50 backdrop-blur-sm">
      <div className="translate-[50%] font-primary text-[60px] md:text-[100px]">
        Loading <span className="loadanim"></span>
        <span className="loadanim"></span>
        <span className="loadanim"></span>
      </div>
    </div>
  );
}

export default Loader;
