import { Link } from "react-router-dom";
import AdicionarERemoverDoCarrinho from "../AdicionarERemoverDoCarrinho/AdicionarERemoverDoCarrinho";
import styles from "./Produtos.module.css";

const Produtos = ({ produto }) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInterno}>
                <Link to={`/produto/${produto.id}`}>
                    <div className={styles.nomeDoProduto}>
                        <p>{produto.nome}</p>
                    </div>
                    <div className={styles.containerImg}>
                        <img src={produto.imagem} alt="Foto do produto" />
                    </div>
                    <div className={styles.preco}>
                        <p>R${produto.preco}</p>
                    </div>

                    <div className={styles.funcao}>
                        <p className={styles.funcaoParagrafo}>Quantidade no Carrinho: </p>
                        <p className={styles.funcaoQuantidade}>{produto.quantidadeNoCarrinho}</p>
                    </div>
                </Link>
                <AdicionarERemoverDoCarrinho produto={produto} category={true} />
            </div>
        </div>
    );
}

export default Produtos;