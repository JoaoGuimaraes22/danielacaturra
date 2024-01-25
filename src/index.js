import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NoPage from "./pages/nopage";
import Archive from "./pages/archive";
import About from "./pages/about";
import Arch_Breathing from "./pages/archive/arch_breathing";
import Arch_Cinema from "./pages/archive/arch_cinema";
import Arch_Ice from "./pages/archive/arch_ice";
import Arch_Maat from "./pages/archive/arch_maat";
import Arch_Pantyfier from "./pages/archive/arch_pantyfier";
import Arch_Viaggio from "./pages/archive/arch_viaggio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archive />} />
        <Route path="about" element={<About />} />
        <Route path="archive/breathing" element={<Arch_Breathing />} />
        <Route path="archive/cinema" element={<Arch_Cinema />} />
        <Route path="archive/ice" element={<Arch_Ice />} />
        <Route path="archive/maat" element={<Arch_Maat />} />
        <Route path="archive/pantyfier" element={<Arch_Pantyfier />} />
        <Route path="archive/viaggio" element={<Arch_Viaggio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
