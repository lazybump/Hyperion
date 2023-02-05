const Bootcamps = () => {
  return (
    <div className="px-12 py-8 space-y-8 lg:col-span-2">
      <h2 className="ml-5">Trial another Bootcamp</h2>
      <ul className="space-y-4 font-bold lg:flex lg:space-y-0 lg:space-x-8">
        <li>
          <a
            href="/"
            className="flex h-20 rounded-r-lg overflow-hidden drop-shadow-sm"
          >
            <img src="/assets/images/layer-115.png" alt="android-robot" />
            <p className="bg-white p-4 flex items-center">
              Mobile Developer Bootcamp
            </p>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex h-20 rounded-r-lg overflow-hidden drop-shadow-sm"
          >
            <img src="/assets/images/layer-114.png" alt="android-robot" />
            <p className="bg-white p-4 flex items-center">
              Software Engineer Bootcamp
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Bootcamps;
