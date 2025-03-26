import styles from "./ProductsInCarts.module.css";

const ProductsInCarts = ({ produto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.nome}>Nome: {produto.nome}</div>
            <div className={styles.preco}>Preço: R${produto.preco}</div>
            <div className={styles.quantidadeNoCarrinho}>Quantidade no carrinho: {produto.quantidadeNoCarrinho}</div>
        </div>
    );
}

export default ProductsInCarts;