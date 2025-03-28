import AdicionarERemoverDoCarrinho from "../AdicionarERemoverDoCarrinho/AdicionarERemoverDoCarrinho";
import styles from "./Produtos.module.css";

const Produtos = ( {produto} ) => {
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

            <div className={styles.funcao}>
                <p className={styles.funcaoP}>Quantidade no Carrinho: </p>
                <p>{produto.quantidadeNoCarrinho}</p>
            </div>
            <AdicionarERemoverDoCarrinho produto={produto} />
          </div>
       </div>
    );
}

export default Produtos;