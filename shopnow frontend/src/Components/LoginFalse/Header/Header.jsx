import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import img from "./carrinho-de-compras-de-design-xadrez.png";
import { useContext } from "react";
import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";

const Header = () => {

  const {quantidade} = useContext(CarrinhoDeComprasContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          <Link to="/">SHOPNOW</Link>
        </h1>
      </div>
      <div className={styles.carrinhoDeCompras}>
         <img src={img} alt="ícone do carrinho de compras." />
         <p>{quantidade}</p>
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
                <li><Link to="/eletronicos">Eletrônicos</Link></li>
                <li><Link to="/modaeacessorios">Moda e Acessórios</Link></li>
                <li><Link to="/casaedecoracao">Casa e Decoração</Link></li>
                <li><Link to="/brinquedos">Brinquedos</Link></li>
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
