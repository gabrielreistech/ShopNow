import styles from "./ProductsInCarts.module.css";
import AdicionarERemoverDoCarrinho from "../AdicionarERemoverDoCarrinho/AdicionarERemoverDoCarrinho";

const ProductsInCarts = ({ produto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.nome}>Nome: {produto.nome}</div>
            <div className={styles.preco}>Preço: R${produto.preco}</div>
            <div className={styles.quantidadeNoCarrinho}>Quantidade <br /> no carrinho: {produto.quantidadeNoCarrinho}</div>
            <AdicionarERemoverDoCarrinho produto={produto} />
        </div>
    );
}

export default ProductsInCarts;