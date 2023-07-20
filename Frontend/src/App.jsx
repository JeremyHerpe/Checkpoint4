import React from "react"
import Router from "./02.navigation/Router"
import Footer from "./03.globals/03.Components/Footer"
import Navbar from "./03.globals/03.Components/Navbar"

function App() {

  return (
    <>
      <div className="relative h-screen">
        <Router />
        <Footer />
      </div>
    </>
  )
}

export default App
