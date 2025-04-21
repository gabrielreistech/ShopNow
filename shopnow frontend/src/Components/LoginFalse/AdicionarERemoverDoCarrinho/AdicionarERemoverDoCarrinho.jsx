import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";
import { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import styles from "./AdicionarERemoverDoCarrinho.module.css"

const AdicionarERemoverDoCarrinho = ({produto, categoria, botoesPageProduto}) => {
    const { adicionarItem, removerItem } = useContext(CarrinhoDeComprasContext);

    const { aumentarQuantidade, diminuirQuantidade } = useContext(ProductsContext);

    return ( //Nesse trecho, o styles vai ser de acordo com a aonde o AdicionarERemoverDoCarrinho estiver, dependendo do local, é um stile diferente.
        <div className={
            categoria
              ? styles.botoesCategoria
              : botoesPageProduto
                ? styles.botoesPageProduto
                : styles.botoes
          }>
            <button onClick={() => { adicionarItem(); aumentarQuantidade(produto.id) }}>+</button>
            <button onClick={() => { if (produto.quantidadeNoCarrinho !== 0) { removerItem(), diminuirQuantidade(produto.id) } }}>-</button>
        </div>
    );
}

export default AdicionarERemoverDoCarrinho;