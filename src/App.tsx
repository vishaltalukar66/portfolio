import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
// import bgimg from "./assets/sunset.jpg";

function App() {
  return (
    <>
      <div className="relative h-screen ">
        <div className="bg-gradient-to-r from-stone-300 to-slate-400 fixed inset-0 z-0 w-full h-full bg-cover bg-no-repeat bg-center blur-sm" />

        <div className="relative ">
          <Nav />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
