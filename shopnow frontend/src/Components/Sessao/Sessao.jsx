import styles from "./Sessao.module.css"

const Sessao = () => {
    return(
       <section className={styles.container}>

          <div className={styles.sections}>
            <p>Entre na sua conta</p>
            <img src="../../../public/conta.png" alt="#" />
            <p>Aproveite ofertas para <br /> comprar tudo que quiser.</p>
          </div>

          <div className={styles.sections}>
            <p>Meios de Pagamentos</p>
            <img src="../../../public/moeda-de-dolar (3).png" alt="#" />
            <p>Pague suas compras com<br /> rapidez e segurança.</p>
          </div>

          <div className={styles.sections}>
            <p>Menos de R$100</p>
            <img src="../../../public/preco-baixo.png" alt="#" />
            <p>Confira produtos<br /> com preços baixos.</p>
          </div>

          <div className={styles.sections}>
            <p>Nossas categorias</p>
            <img src="../../../public/quadrado.png" alt="#" />
            <p>Encontre vários produtos<br /> e muito mais.</p>
          </div>
       </section>
    );
}

export default Sessao;