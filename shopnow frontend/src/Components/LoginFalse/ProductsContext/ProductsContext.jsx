import { createContext, useState} from "react";
import computador from "../../../assets/eletronicosFotos/fotoDeComputador.jpeg";
import televisao from "../../../assets/eletronicosFotos/tv32.jpeg";
import radio from "../../../assets/eletronicosFotos/radio.jpeg";
import foneDeOuvido from "../../../assets/eletronicosFotos/fonedeouvido.jpeg";
import carregadorDeCelular from "../../../assets/eletronicosFotos/carregador.jpeg";
import microondas from "../../../assets/eletronicosFotos/microondas.jpeg";
import geladeira from "../../../assets/eletronicosFotos/geladeira.jpeg";
import fornoEletrico from "../../../assets/eletronicosFotos/fornoeletrico.jpeg";


export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

   const [produtos, setProdutos] = useState([
      {id: 1, nome: "Sofá 3 Lugares", imagem: computador, preco: 1500, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Sofá confortável para 3 pessoas, ideal para sua sala de estar."},
      {id: 2, nome: "Abajur de Mesa", imagem: computador, preco: 120, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Abajur moderno e elegante para iluminar o seu ambiente."},
      {id: 3, nome: "Cortina Blackout", imagem: computador, preco: 250, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Cortina blackout que bloqueia a luz e proporciona privacidade."},
      {id: 4, nome: "Quadro Decorativo", imagem: computador, preco: 80, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Quadro decorativo para adicionar estilo à sua casa."},
      {id: 5, nome: "Tapete Redondo", imagem: computador, preco: 200, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Tapete redondo macio, perfeito para a decoração de ambientes."},
      {id: 6, nome: "Vaso de Flores", imagem: computador, preco: 40, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Vaso elegante para decorar com suas flores favoritas."},
      {id: 7, nome: "Conjunto de Cadeiras", imagem: computador, preco: 800, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Conjunto de cadeiras modernas para sua sala de jantar."},
      {id: 8, nome: "Estante de Livros", imagem: computador, preco: 400, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Estante funcional e elegante para organizar seus livros."},
    
      {id: 9, nome: "Computador", imagem: computador, preco: 3500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Computador de alta performance para trabalho e entretenimento."},
      {id: 10, nome: "Televisão 32p", imagem: televisao, preco: 2000, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "TV de 32 polegadas com excelente qualidade de imagem."},
      {id: 11, nome: "Rádio", imagem: radio, preco: 170, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Rádio portátil com ótima qualidade sonora."},
      {id: 12, nome: "Fone de ouvido", imagem: foneDeOuvido, preco: 80, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Fone de ouvido confortável para ouvir música com qualidade."},
      {id: 13, nome: "Carregador de celular", imagem: carregadorDeCelular, preco: 120, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Carregador rápido para dispositivos móveis."},
      {id: 14, nome: "Micro-ondas", imagem: microondas, preco: 500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Micro-ondas eficiente para aquecer e cozinhar rapidamente."},
      {id: 15, nome: "Geladeira", imagem: geladeira, preco: 2500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Geladeira espaçosa e eficiente para sua cozinha."},
      {id: 16, nome: "Forno Elétrico", imagem: fornoEletrico, preco: 600, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Forno elétrico de alta qualidade para assar seus alimentos."},
    
      {id: 17, nome: "Bola de Futebol", imagem: computador, preco: 60, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Bola de futebol ideal para brincar e se divertir."},
      {id: 18, nome: "Boneca de Pano", imagem: computador, preco: 40, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Boneca de pano, macia e segura para as crianças."},
      {id: 19, nome: "Carrinho de Controle Remoto", imagem: computador, preco: 150, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Carrinho de controle remoto divertido para todas as idades."},
      {id: 20, nome: "Jogo de Tabuleiro", imagem: computador, preco: 100, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Jogo de tabuleiro clássico para reunir a família e amigos."},
      {id: 21, nome: "Quebra-Cabeça 500 Peças", imagem: computador, preco: 30, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Quebra-cabeça divertido para estimular o raciocínio."},
      {id: 22, nome: "Pelúcia de Ursinho", imagem: computador, preco: 70, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Pelúcia de ursinho macia e adorável para as crianças."},
      {id: 23, nome: "Trenzinho de Brinquedo", imagem: computador, preco: 80, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Trenzinho de brinquedo para diversão e imaginação."},
      {id: 24, nome: "Set de Blocos de Construção", imagem: computador, preco: 90, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Blocos de construção para estimular a criatividade."},
    
      {id: 25, nome: "Camiseta Básica", imagem: computador, preco: 50, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Camiseta básica e confortável para o dia a dia."},
      {id: 26, nome: "Tênis Esportivo", imagem: computador, preco: 250, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Tênis esportivo, ideal para atividades físicas."},
      {id: 27, nome: "Bolsa de Couro", imagem: computador, preco: 350, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Bolsa de couro de alta qualidade para todos os dias."},
      {id: 28, nome: "Relógio Masculino", imagem: computador, preco: 400, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Relógio masculino com design sofisticado."},
      {id: 29, nome: "Óculos de Sol", imagem: computador, preco: 120, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Óculos de sol modernos para proteger os olhos e compor o look."},
      {id: 30, nome: "Cinto de Couro", imagem: computador, preco: 80, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Cinto de couro durável e estiloso."},
      {id: 31, nome: "Vestido Feminino", imagem: computador, preco: 150, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Vestido feminino elegante e confortável."},
      {id: 32, nome: "Jaqueta de Couro", imagem: computador, preco: 450, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Jaqueta de couro para um visual moderno e sofisticado."}
  ]);
  
  

      const aumentarQuantidade = (id) => {
         setProdutos( produto => 
         produtos.map(produto => id === produto.id ? {...produto, quantidadeNoCarrinho: produto.quantidadeNoCarrinho + 1} : produto));
      } 

      const diminuirQuantidade = (id) => {
         setProdutos( produto => 
         produtos.map(produto => id === produto.id ? {...produto, quantidadeNoCarrinho: produto.quantidadeNoCarrinho - 1} : produto));
      }
    
      const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    
      const filtrarPorCategoria = (categoria) => {
        setCategoriaSelecionada(categoria);
      };

      const produtosFiltrados = categoriaSelecionada ? produtos.filter(produto => produto.categoria === categoriaSelecionada) : produtos;

      const produtosAbaixoDe100Reais = produtos.filter(produto => produto.preco <= 100);

      const produtosNosCarrinhos = produtos.filter(produto => produto.quantidadeNoCarrinho > 0);

      const [produtosFiltradosPorNome, setProdutosFiltradosPorNome] = useState([]);

      const filtrarPorNome = (nome) => {
         const filtrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(nome.toLowerCase()));
         setProdutosFiltradosPorNome(filtrados);
      }

      const [produtoFiltradoPorId, setProdutoFiltradoPorId] = useState();

      const filtrarPorId = (id) => {
         const idInt = parseInt(id);
         const filtradoPorId = produtos.find((produto) => produto.id === idInt);
         if(filtradoPorId){
            console.log("Encontrado");
         setProdutoFiltradoPorId(filtradoPorId);
         }else{
            console.log("Não encontrado");
         }
      }

      return(
         <ProductsContext.Provider value={{filtrarPorId ,produtoFiltradoPorId, setProdutoFiltradoPorId, produtos, produtosFiltrados, filtrarPorCategoria, produtosAbaixoDe100Reais, aumentarQuantidade, diminuirQuantidade, produtosNosCarrinhos, produtosFiltradosPorNome, filtrarPorNome}}>
            {children}
         </ProductsContext.Provider>

      );
}
