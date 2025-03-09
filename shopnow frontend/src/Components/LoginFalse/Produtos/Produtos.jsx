import styles from "./Produtos.module.css";

const Produtos = () => {
    return(
       <div className={styles.container}>
          <div className={styles.containerInterno}>
            <div className={styles.nomeDoProduto}>
                <p>Nome do Produto</p>
            </div>
            <div>
                <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-computador-desktop-moderno_114360-11616.jpg" alt="Foto do produto" />
            </div>
            <div className={styles.preco}>
                <p>R$2000,00</p>
            </div>
            <div className={styles.carrinho}>
                <p>Adicionar ao Carrinho</p>
                <p className={styles.quantidadeDoCarrinho}>0</p>
                <button>+</button>
                <button>-</button>
            </div>
          </div>
       </div>
    );
}

export default Produtos;