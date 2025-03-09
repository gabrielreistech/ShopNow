import { createContext, useState } from "react";

const CarrinhoDeComprasContext = createContext();

const CarrinhoDeComprasProvider = ({children}) => {

   const[quantidade, setQuantidade] = useState(0);

   const adicionarItem = () =>{
       setQuantidade(quantidade => quantidade + 1);
   }

   const removerItem = () =>{
       if(quantidade !== 0)
       setQuantidade(quantidade => quantidade - 1);
   }

    return(
       <CarrinhoDeComprasContext.Provider value={{quantidade, adicionarItem, removerItem}}>
          {children}
       </CarrinhoDeComprasContext.Provider>
    );
}

export {CarrinhoDeComprasContext, CarrinhoDeComprasProvider};