import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";
import { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import styles from "./AdicionarERemoverDoCarrinho.module.css"

const AdicionarERemoverDoCarrinho = ({produto}) => {
    const { adicionarItem, removerItem } = useContext(CarrinhoDeComprasContext);

    const { aumentarQuantidade, diminuirQuantidade } = useContext(ProductsContext);

    return (
        <div className={styles.botoes}>
            <button onClick={() => { adicionarItem(); aumentarQuantidade(produto.id) }}>+</button>
            <button onClick={() => { if (produto.quantidadeNoCarrinho !== 0) { removerItem(), diminuirQuantidade(produto.id) } }}>-</button>
        </div>
    );
}

export default AdicionarERemoverDoCarrinho;