import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavMenu from "../../components/NavMenu/NavMenu";
import Basket from "../../pages/Basket/Basket";
import MainPage from "../../pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
