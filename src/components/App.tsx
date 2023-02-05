import Bootcamps from "./Bootcamps";
import Footer from "./Footer";
import Header from "./Header";
import Journey from "./Journey";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="lg:px-48 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-2 lg:mt-20">
        <MainContent />
        <Bootcamps />
        <div className="col-start-3 row-start-1 row-span-2">
          <Journey />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
