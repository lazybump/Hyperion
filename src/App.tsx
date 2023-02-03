import Bootcamps from "./Bootcamps";
import Footer from "./Footer";
import Header from "./Header";
import Journey from "./Journey";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="bg-slate-50 h-full relative">
      <Header />
      <MainContent />
      <Bootcamps />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;
