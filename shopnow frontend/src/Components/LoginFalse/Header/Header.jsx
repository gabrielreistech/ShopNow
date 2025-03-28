import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import img from "./carrinho-de-compras-de-design-xadrez.png";
import { use, useContext, useEffect, useState } from "react";
import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import ProductsInCarts from "../ProductsInCarts/ProductsInCarts";

const Header = () => {

  const { quantidade } = useContext(CarrinhoDeComprasContext);

  const { produtosNosCarrinhos } = useContext(ProductsContext);

  const [contem, setContem] = useState(false);

  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
     setMouseEnter(true);
  }

  const handleMouseLeave = () => {
     setMouseEnter(false);
  }

  useEffect(() => {
    const isProdutosNosCarrinhos = produtosNosCarrinhos.some((produto) => produto.quantidadeNoCarrinho > 0) && mouseEnter == true;
    setContem(isProdutosNosCarrinhos);
  }, [produtosNosCarrinhos, mouseEnter])

  return (
    //Parte do código onde fica o nome da loja, o SHOPNOW.
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          <Link to="/">SHOPNOW</Link>
        </h1>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.containerCarrinho}>
        <div className={styles.carrinhoDeCompras}>
          <img src={img} alt="ícone do carrinho de compras." />
          <p>{quantidade}</p>
        </div>

        {/* Essa parte do código é onde fica a lista dos items que estão no carrinho de compras */}
        {contem && (
         <div className={`${mouseEnter ? styles.produtosNosCarrinhosOnMouseEnter : styles.produtosNosCarrinhos}`}>
            <div className={styles.tituloDoCarrinhoDeCompras}>
              <p>Itens do carrinho de compras</p>
            </div>

            <div>
              {produtosNosCarrinhos.map((produto, index) => <ProductsInCarts key={index} produto={produto} />)}
            </div>

            <div className={styles.valorTotalDoCarrinho}>
              <p>Valor total do carrinho: R${produtosNosCarrinhos.reduce((soma, produto) => soma + (produto.preco * produto.quantidadeNoCarrinho), 0)}</p>
            </div>
          </div>
         )}
      </div>
      {/* Parte do código onde fica a barra de pesquisa */}
      <div className={styles.search}>
        <label htmlFor="text"></label>
        <input id="text" type="text" placeholder="Pesquise aqui" />
      </div>

      {/* Parte do código que fica o Home, Todas as Categorias, Sobre e Login*/}
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
