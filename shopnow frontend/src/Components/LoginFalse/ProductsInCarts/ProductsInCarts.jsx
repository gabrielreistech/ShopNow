import styles from "./ProductsInCarts.module.css";
import AdicionarERemoverDoCarrinho from "../AdicionarERemoverDoCarrinho/AdicionarERemoverDoCarrinho";

const ProductsInCarts = ({ produto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.containerDasVariaveis}>
                <div className={styles.nome}>Nome: {produto.nome}</div>
                <div className={styles.preco}>Preço: R${produto.preco}</div>
                <div className={styles.quantidadeNoCarrinho}>Total no carrinho: {produto.quantidadeNoCarrinho}</div>
            </div>
            <div className={styles.containerDoBotao}>
                <AdicionarERemoverDoCarrinho produto={produto} />
            </div>
        </div>
    );
}

export default ProductsInCarts;