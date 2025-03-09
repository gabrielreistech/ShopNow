import { useContext, useState } from "react";
import styles from "./Produtos.module.css";
import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";

const Produtos = ( props ) => {
 
    const { adicionarItem, removerItem} = useContext(CarrinhoDeComprasContext);

    const [quantidade, setQuantidade] = useState(0);

    return(
       <div className={styles.container}>
          <div className={styles.containerInterno}>
            <div className={styles.nomeDoProduto}>
                <p>{props.nome}</p>
            </div>
            <div>
                <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-computador-desktop-moderno_114360-11616.jpg" alt="Foto do produto" />
            </div>
            <div className={styles.preco}>
                <p>R${props.preco}</p>
            </div>
            <div className={styles.carrinho}>
                <p>Adicionar ao Carrinho</p>
                <p className={styles.quantidadeDoCarrinho}>{quantidade}</p>
                <button onClick={() => {adicionarItem(); setQuantidade(prevQuantidade => prevQuantidade +1)}}>+</button>
                <button onClick={() => {if(quantidade !== 0){removerItem(); setQuantidade(prevQuantidade => prevQuantidade - 1)}}}>-</button>
            </div>
          </div>
       </div>
    );
}

export default Produtos;