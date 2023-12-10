import { Home } from "./components/Home"
import { Nav } from "./components/Nav"


function App() {
  return (
    <>
      <div className="relative h-screen ">
        <div
          className="fixed inset-0 z-0 w-full h-full bg-cover bg-no-repeat bg-center blur-sm"
          style={{
            backgroundImage:
              "url('src/assets/sunset.jpg')",
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
