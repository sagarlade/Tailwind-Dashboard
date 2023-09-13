
import Navbar from "./components/Navbar";
import MainText from "./components/Home";

import SubNavbar from "./components/subNav";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <main>
          <div className="py-6 lg:px-3 bg-[#dde3ed] shadow w-full">
            <SubNavbar />
          </div>
        </main>
        <main>
          <div className="">
            <MainText />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
