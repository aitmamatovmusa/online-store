import Header from "../common/Header"
import { RouterProvider } from "react-router-dom"
import { router } from "../router"
import "./app.scss"

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
