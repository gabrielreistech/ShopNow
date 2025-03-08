import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          <Link>SHOPNOW</Link>
        </h1>
      </div>

      <div className={styles.search}>
        <label htmlFor="text"></label>
        <input id="text" type="text" placeholder="Pesquise aqui" />
      </div>

      <div className={styles.list}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
           <ul className={styles.category}>
              <li>
                Todas as categorias
                <div className={styles.column}>
              <ul>
                <li>Eletrônicos</li>
                <li>Moda e Acessórios</li>
                <li>Casa e Decoração</li>
                <li>Brinquedos</li>
              </ul>
            </div>
              </li>
           </ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.login}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
