const Journey = () => {
  return (
    <div className="p-12 space-y-6">
      <h2>
        Your coding journey
        <span className="hidden lg:inline-flex rounded-full h-6 w-6 p-3 border border-slate-400 text-slate-400 justify-center items-center ml-4">
          ?
        </span>
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="text-primary text-4xl mr-5 font-bold">1</span>Total
          programs written
        </li>
        <li className="flex items-center">
          <span className="text-primary text-4xl mr-5 font-bold">4</span> Total
          code reviews
        </li>
      </ul>
    </div>
  );
};

export default Journey;
