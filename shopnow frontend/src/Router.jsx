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
import { ProductsProvider } from "./Components/LoginFalse/ProductsContext/ProductsContext";
import AbaixoDe100 from "./Pages/AbaixoDe100/AbaixoDe100";
import ProximaVersao from "./Pages/ProximaVersao/ProximaVersao";
import TodosOsProdutos from "./Pages/TodosOsProdutos/TodosOsProdutos";
import TelaDoProduto from "./Components/LoginFalse/TelaDoProduto/TelaDoProduto";

const Router = () => {

    return(

        <ProductsProvider>
        <CarrinhoDeComprasProvider>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/login" element={<Login />} />
               <Route path="/cadastro" element={<Cadastro />}/>
               <Route path="/proximaversao" element={<ProximaVersao />} />
               <Route path="/meiosdepagamentos" element={<MeiosDePagamentos />} />
               <Route path="/produtosabaixode100" element={<AbaixoDe100 />} />
               <Route path="/todososprodutos" element={<TodosOsProdutos />} />
               <Route path="/produto/:id" element={<TelaDoProduto />} />

               <Route path="/eletronicos" element={<Eletronicos />} />
               <Route path="/modaeacessorios" element={<ModaEAcessorios />} />
               <Route path="/casaedecoracao" element={<CasaEDecoracao />} />
               <Route path="/brinquedos" element={<Brinquedos />} />
           </Routes>
        </BrowserRouter>
        </CarrinhoDeComprasProvider>
        </ProductsProvider>
    );
}

export default Router;