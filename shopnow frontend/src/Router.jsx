import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Login from "./Pages/Login/Login"

const Router = () => {

    return(
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/login" element={<Login />} />
           </Routes>
        </BrowserRouter>
    );
}

export default Router;