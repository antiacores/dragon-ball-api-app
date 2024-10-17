import { Gallery } from "./components/Gallery"

function App() {

  return (
    <>
    <div className="min-h-screen bg-red-950 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">
        DRAGON BALL
      </h1>
      <Gallery />
    </div>
    </>
  )
}

export default App