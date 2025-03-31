import styles from "./TelaDoProduto.module.css";
import Header from "../Header/Header";
import MainContent from "../../LoginFalse/MainContent/MainContent";
import Footer from "../../LoginFalse/Footer/Footer";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { useContext, useEffect } from "react";
import AdicionarERemoverDoCarrinho from "../AdicionarERemoverDoCarrinho/AdicionarERemoverDoCarrinho";

const TelaDoProduto = () => {

    const { filtrarPorId, produtoFiltradoPorId, setProdutoFiltradoPorId } = useContext(ProductsContext);

    const { id } = useParams();

    console.log(id)

    useEffect(() => {

        setProdutoFiltradoPorId(null);

        if (id)
            filtrarPorId(id);

        return () => {
            setProdutoFiltradoPorId(null);
        };
    }, [filtrarPorId, id, setProdutoFiltradoPorId]);

    return (
        <>
            <Header />
            {produtoFiltradoPorId ? (
                <div className={styles.containerExterno}>
                    <div className={styles.containerInterno}>
                        <div>
                            <p>Categoria: {produtoFiltradoPorId.categoria}</p>
                        </div>
                        <div>
                            <p>Nome: {produtoFiltradoPorId.nome}</p>
                        </div>
                        <div>
                            <img src={produtoFiltradoPorId.imagem} alt="" />
                        </div>
                        <div>
                            <p>R${produtoFiltradoPorId.preco},00</p>
                        </div>
                        <div>
                            <p>{produtoFiltradoPorId.descricao}</p>
                        </div>
                        <div>
                            <hr />
                            <p>Quantidade de produtos no carrinho: {produtoFiltradoPorId.quantidadeNoCarrinho}</p>
                        </div>
                        <div>
                        <AdicionarERemoverDoCarrinho produto={produtoFiltradoPorId} />
                        </div>
                    </div>
                </div>)
                : (<div className={styles.naoEncontrado}>Produto não encontrado.</div>)}
                < Footer />
        </>

    );
}

export default TelaDoProduto;