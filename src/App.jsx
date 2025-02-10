import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Movies from "./pages/Movies";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
