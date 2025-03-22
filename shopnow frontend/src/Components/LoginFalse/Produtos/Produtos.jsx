import { useContext, useState } from "react";
import styles from "./Produtos.module.css";
import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";
import { ProductsContext } from "../ProductsContext/ProductsContext";

const Produtos = ( {produto} ) => {
 
    const { adicionarItem, removerItem} = useContext(CarrinhoDeComprasContext);
    
    const { aumentarQuantidade, diminuirQuantidade } = useContext(ProductsContext);

    const [quantidade, setQuantidade] = useState(0);

    return(
       <div className={styles.container}>
          <div className={styles.containerInterno}>
            <div className={styles.nomeDoProduto}>
                <p>{produto.nome}</p>
            </div>
            <div>
                <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-computador-desktop-moderno_114360-11616.jpg" alt="Foto do produto" />
            </div>
            <div className={styles.preco}>
                <p>R${produto.preco}</p>
            </div>
            <div className={styles.carrinho}>
                <p>Adicionar ao Carrinho</p>
                <p className={styles.quantidadeDoCarrinho}>{produto.quantidadeNoCarrinho}</p>
                <button onClick={() => {adicionarItem(); aumentarQuantidade(produto.id) }}>+</button>
                <button onClick={() => {if(produto.quantidadeNoCarrinho !== 0) { removerItem(), diminuirQuantidade(produto.id)}}}>-</button>
            </div>
          </div>
       </div>
    );
}

export default Produtos;