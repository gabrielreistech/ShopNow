import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import img from "./carrinho-de-compras-de-design-xadrez.png";
import { useContext, useEffect, useRef, useState } from "react";
import { CarrinhoDeComprasContext } from "../../../Contexts/CarrinhoDeComprasContext";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import ProductsInCarts from "../ProductsInCarts/ProductsInCarts";
import menu from "./icons8-cardápio-192.png";

const Header = ({ inputRef }) => {

  const navigate = useNavigate();

  const { quantidade } = useContext(CarrinhoDeComprasContext);

  const { produtosNosCarrinhos, filtrarPorNome } = useContext(ProductsContext);

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

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedValue = localStorage.getItem("searchValue");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, [])

  useEffect(() => {
    filtrarPorNome(inputValue);
  }, [inputValue])

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    localStorage.setItem("searchValue", value);

    if (value) {
      navigate("/todososprodutos");
    }
  }

  return (
    //Parte do código onde fica o nome da loja, o SHOPNOW.
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1>
          <Link to="/">SHOPNOW</Link>
        </h1>
      </div>

      {/* Parte do código onde fica o ícone do carrinho de compras e a quantidade no carrinho. */}
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
              <p>Valor total do carrinho: R$<span className={styles.valorTotalDoCarrinhoNumero}>{produtosNosCarrinhos.reduce((soma, produto) => soma + (produto.preco * produto.quantidadeNoCarrinho), 0)}</span></p>
              <button><Link to="/proximaversao">Comprar agora</Link></button>
            </div>
          </div>
        )}
      </div>

      {/* Parte do código onde fica a barra de pesquisa */}
      <div className={styles.pesquisa}>
        <label htmlFor="text"></label>
        <input ref={inputRef} id="text" type="text" placeholder="Pesquise aqui" onChange={handleOnChange} value={inputValue} />
      </div>

      {/* Parte do código que fica o Home, Todas as Categorias, Sobre e Login*/}

      <div className={styles.containerList}>
        <img className={styles.iconeDeMenu} src={menu} alt="ícone de menu" />
        <div className={styles.categorias}>
          <ul>
            <li><Link to="/">Home</Link></li>

            <li className={styles.todasCategorias}>
              Todas categorias
              <div className={styles.coluna}>
                <ul >
                  <Link to="/eletronicos"><li>Eletrônicos</li></Link>
                  <Link to="/modaeacessorios"><li>Moda e Acessórios</li></Link>
                  <Link to="/casaedecoracao"><li>Casa e Decoração</li></Link>
                  <Link to="/brinquedos"><li>Brinquedos</li></Link>
                </ul>
              </div>
            </li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li className={styles.login}><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </div>

  );
};
export default Header;
