import "./App.css"
import Countries from "./components/Countries"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import CountryInfo from "./pages/CountryInfo"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:country" element={<CountryInfo />} />
        {/* 404 error */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
