import { Link } from "react-router-dom";
import styles from "./Sessao.module.css";

const Sessao = () => {
    return(
       <section className={styles.container}>

          <div className={styles.sections}>
           <Link to="/login">
            <p>Entre na sua conta</p>
            <img src="/conta.png" alt="#" />
            <p>Aproveite ofertas para <br /> comprar tudo que quiser.</p>
            </Link>
          </div>

          <div className={styles.sections}>
            <Link to="/meiosdepagamentos">
            <p>Meios de Pagamentos</p>
            <img src="/moeda-de-dolar (3).png" alt="#" />
            <p>Pague suas compras com<br /> rapidez e segurança.</p>
            </Link>
          </div>

          <div className={styles.sections}>
            <Link to="/produtosabaixode100">
            <p>Abaixo de R$100</p>
            <img src="/preco-baixo.png" alt="#" />
            <p>Confira produtos<br /> com preços baixos.</p>
            </Link>
          </div>

          <div className={styles.sections}>
            <Link to="/sobre">
            <p>Sobre nós</p>
            <img src="/quadrado.png" alt="#" />
            <p>Conheça quem nós somos <br /> e os nossos propósitos.</p>
            </Link>
          </div>
       </section>
    );
}

export default Sessao;