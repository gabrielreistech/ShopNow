import styles from "./TodosOsProdutos.module.css";
import Header from "../../Components/LoginFalse/Header/Header";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import { useContext, useEffect, useRef } from "react";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import ConfettiButton from "../../Components/LoginFalse/ConfettiButton/ConfettiButton";

const TodosOsProdutos = ({ nome }) => {

   const inputRef = useRef(null);

   const { produtos, produtosFiltradosPorNome, filtrarPorNome } = useContext(ProductsContext);

   useEffect(() => {
      if (nome) {
         filtrarPorNome(nome);
      }
   }, [produtos, nome])

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, [])

   return (
      <div>
         <Header inputRef={inputRef} />
         <MainContent>
            <div className={styles.container}>
               {produtosFiltradosPorNome.length > 0 ? produtosFiltradosPorNome.map((produto, index) => <Produtos key={index} produto={produto} />) :
                  <div className={styles.produtoNaoEncontrado}>
                     <p>Produto não encontrado.</p>
                     <p>Mas na próxima versão você vai poder adicionar produtos, Ok?</p>
                     <ConfettiButton />
                  </div>}
            </div>
         </MainContent>
         <Footer />
      </div>
   );
}

export default TodosOsProdutos;