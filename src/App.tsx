import { Home } from "./components/Home"
import { Nav } from "./components/Nav"
import bgimg from "./assets/sunset.jpg";

function App() {

  return (
    <>

      <div className="relative h-screen ">
        <div
          className="fixed inset-0 z-0 w-full h-full bg-cover bg-no-repeat bg-center blur-sm"
          style={{
            backgroundImage:
              `url(${bgimg})`,
          }}>
        </div>



        <div className="relative ">
          <Nav />
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
