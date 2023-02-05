import Bootcamps from "./Bootcamps";
import Footer from "./Footer";
import Header from "./Header";
import Journey from "./Journey";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="lg:h-screen lg:px-48 lg:grid grid-cols-3 grid-rows-2 gap-2">
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
