import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"

const Router = () => {

    return(
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/login" element={<Login />} />
               <Route path="/cadastro" element={<Cadastro />}/>
           </Routes>
        </BrowserRouter>
    );
}

export default Router;