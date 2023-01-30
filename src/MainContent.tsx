const MainContent = () => {
  return (
    <main className="border-2 border-blue-700 bg-white m-4 p-8">
      <section className="border-b grid grid-cols-2 grid-rows-2 items-center">
        <img
          src="/assets/images/beginner-php-fundamentals.png"
          className="h-14"
        />
        <h1 className="text-sm">Web Development Bootcamp Trial</h1>
        <button className="col-start-2 bg-primary text-white text-sm rounded-lg py-2">
          Continue your trial
        </button>
      </section>
      <section>bottom</section>
    </main>
  );
};

export default MainContent;
