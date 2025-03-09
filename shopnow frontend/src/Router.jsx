import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"
import MeiosDePagamentos from "./Pages/MeiosDePagamentos/MeiosDePagamentos";
import Eletronicos from "./Pages/Eletronicos/Eletronicos";
import ModaEAcessorios from "./Pages/ModaEAcessorios/ModaEAcessorios";
import CasaEDecoracao from "./Pages/CasaEDecoracao/CasaEDecoracao";
import Brinquedos from "./Pages/Brinquedos/Brinquedos";
import { CarrinhoDeComprasProvider } from "./Contexts/CarrinhoDeComprasContext";

const Router = () => {

    return(
        <CarrinhoDeComprasProvider>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/login" element={<Login />} />
               <Route path="/cadastro" element={<Cadastro />}/>
               <Route path="/meiosdepagamentos" element={<MeiosDePagamentos />} />

               <Route path="/eletronicos" element={<Eletronicos />} />
               <Route path="//modaeacessorios" element={<ModaEAcessorios />} />
               <Route path="/casaedecoracao" element={<CasaEDecoracao />} />
               <Route path="/brinquedos" element={<Brinquedos />} />
           </Routes>
        </BrowserRouter>
        </CarrinhoDeComprasProvider>
    );
}

export default Router;