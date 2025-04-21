import { createContext, useState, useMemo} from "react";
import computador from "../../../assets/eletronicosFotos/fotoDeComputador.jpeg";
import televisao from "../../../assets/eletronicosFotos/tv32.jpeg";
import radio from "../../../assets/eletronicosFotos/radio.jpeg";
import foneDeOuvido from "../../../assets/eletronicosFotos/fonedeouvido.jpeg";
import carregadorDeCelular from "../../../assets/eletronicosFotos/carregador.jpeg";
import microondas from "../../../assets/eletronicosFotos/microondas.jpeg";
import geladeira from "../../../assets/eletronicosFotos/geladeira.jpeg";
import fornoEletrico from "../../../assets/eletronicosFotos/fornoeletrico.jpeg";

import tenisEsportivo from "../../../assets/modaEAcessoriosFotos/01-tenis-esportivo-masculino-olympikus-em-tecido-preto.webp";
import bolsaDeCouro from "../../../assets/modaEAcessoriosFotos/7-3752399760ffa59df717044557360372-1024-1024.png";
import camisetaBasica from "../../../assets/modaEAcessoriosFotos/Camiseta-Basica-Preta.jpg";
import cintoDeCouro from "../../../assets/modaEAcessoriosFotos/CintodeCouroGenuinoMasculinoRustico_3_800x.webp";
import jaquetaDeCouro from "../../../assets/modaEAcessoriosFotos/jaquetadecouro.webp";
import oculosDeSol from "../../../assets/modaEAcessoriosFotos/oculos_de_sol_masculino_run_modelo_3535p_c3_123_1_6686f09094bfd1df49be6d1e2c7a5831.webp";
import relogio from "../../../assets/modaEAcessoriosFotos/relogio.webp";
import vestidoFeminino from "../../../assets/modaEAcessoriosFotos/vestidofeminino.webp";

import abajur from "../../../assets/casaEDecoracaoFotos/abajur_cor_madeira_e_cupula_palha_luminaria_de_mesa_quarto_4573_2_81c349e07a1932a2e057326d00df9bbe.webp";
import cadeiras from "../../../assets/casaEDecoracaoFotos/Conjunto-Sala-de-Jantar-4-Cadeiras-San-Francisco-Carraro-Freijo-01.webp";
import cortina from "../../../assets/casaEDecoracaoFotos/cortina-blackout-100-vedacao-premium-440x260m-sala-quarto-varao-3m-areia-60b63dbd4de54-large.jpg";
import estanteDeLivros from "../../../assets/casaEDecoracaoFotos/estanteDeLivros.webp";
import quadro from "../../../assets/casaEDecoracaoFotos/pendure_quadro-4591-721b4e4ab797be8c6016594627748320-1024-1024.png";
import sofa from "../../../assets/casaEDecoracaoFotos/sofa.webp";
import tapete from "../../../assets/casaEDecoracaoFotos/tapete-redondo-croche-peca-rara1-351dd983cf6b03155f16067377094430-640-0.jpg";
import vaso from "../../../assets/casaEDecoracaoFotos/vaso_de_flores_em_madeira_natural_981_1_1c0c6c848d166e97273d22609f0667ec.webp";

import blocoDeConstrucao from "../../../assets/brinquedosFotos/blocoDeContrução.jpg";
import bola from "../../../assets/brinquedosFotos/bola.webp";
import bonecaDePano from "../../../assets/brinquedosFotos/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.webp";
import carrinhoDeControle from "../../../assets/brinquedosFotos/carrinhoDeControleRemoto.webp";
import jogoDeTabuleiro from "../../../assets/brinquedosFotos/jogoDeTabuleiro.webp";
import quebraCabeca from "../../../assets/brinquedosFotos/quebraCabeça.webp";
import trenzinho from "../../../assets/brinquedosFotos/trenzinho_maria_fumaca_em_madeira_colorido_educativo_novo_3611_1_5739fa32477e892c95e847d70fa2da2e.webp";
import ursinhoDePelucia from "../../../assets/brinquedosFotos/Ursinho-de-Pelucia-Cookie-Caramelo.webp";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

   //O máximo de caracteres é 129 na descrição de cada produto.

   const [produtos, setProdutos] = useState([
      {id: 1, nome: "Sofá 3 Lugares", imagem: sofa, preco: 1500, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Sofá confortável para 3 pessoas, ideal para sua sala de estar."},
      {id: 2, nome: "Abajur de Mesa", imagem: abajur, preco: 120, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Abajur moderno e elegante para iluminar o seu ambiente."},
      {id: 3, nome: "Cortina Blackout", imagem: cortina, preco: 250, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Cortina blackout que bloqueia a luz e proporciona privacidade."},
      {id: 4, nome: "Quadro Decorativo", imagem: quadro, preco: 80, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Quadro decorativo para adicionar estilo à sua casa."},
      {id: 5, nome: "Tapete Redondo", imagem: tapete, preco: 200, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Tapete redondo macio, perfeito para a decoração de ambientes."},
      {id: 6, nome: "Vaso de Flores", imagem: vaso, preco: 40, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Vaso elegante para decorar com suas flores favoritas."},
      {id: 7, nome: "Conjunto de Cadeiras", imagem: cadeiras, preco: 800, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Conjunto de cadeiras modernas para sua sala de jantar."},
      {id: 8, nome: "Estante de Livros", imagem: estanteDeLivros, preco: 400, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0, descricao: "Estante funcional e elegante para organizar seus livros."},
    
      {id: 9, nome: "Computador", imagem: computador, preco: 3500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Computador de alta performance para trabalho e entretenimento."},
      {id: 10, nome: "Televisão 32p", imagem: televisao, preco: 2000, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "TV de 32 polegadas com excelente qualidade de imagem."},
      {id: 11, nome: "Rádio", imagem: radio, preco: 170, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Rádio portátil com ótima qualidade sonora."},
      {id: 12, nome: "Fone de ouvido", imagem: foneDeOuvido, preco: 80, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Fone de ouvido confortável para ouvir música com qualidade."},
      {id: 13, nome: "Carregador de celular", imagem: carregadorDeCelular, preco: 120, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Carregador rápido para dispositivos móveis."},
      {id: 14, nome: "Micro-ondas", imagem: microondas, preco: 500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Micro-ondas eficiente para aquecer e cozinhar rapidamente."},
      {id: 15, nome: "Geladeira", imagem: geladeira, preco: 2500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Geladeira espaçosa e eficiente para sua cozinha."},
      {id: 16, nome: "Forno Elétrico", imagem: fornoEletrico, preco: 600, categoria: "Eletrônicos", quantidadeNoCarrinho: 0, descricao: "Forno elétrico de alta qualidade para assar seus alimentos."},
    
      {id: 17, nome: "Bola de Futebol", imagem: bola, preco: 60, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Bola de futebol ideal para brincar e se divertir."},
      {id: 18, nome: "Boneca de Pano", imagem: bonecaDePano, preco: 40, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Boneca de pano, macia e segura para as crianças."},
      {id: 19, nome: "Carrinho de Controle Remoto", imagem: carrinhoDeControle, preco: 150, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Carrinho de controle remoto divertido para todas as idades."},
      {id: 20, nome: "Jogo de Tabuleiro", imagem: jogoDeTabuleiro, preco: 100, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Jogo de tabuleiro clássico para reunir a família e amigos."},
      {id: 21, nome: "Quebra-Cabeça 500 Peças", imagem: quebraCabeca, preco: 30, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Quebra-cabeça divertido para estimular o raciocínio."},
      {id: 22, nome: "Pelúcia de Ursinho", imagem: ursinhoDePelucia, preco: 70, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Pelúcia de ursinho macia e adorável para as crianças."},
      {id: 23, nome: "Trenzinho de Brinquedo", imagem: trenzinho, preco: 80, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Trenzinho de brinquedo para diversão e imaginação."},
      {id: 24, nome: "Set de Blocos de Construção", imagem: blocoDeConstrucao, preco: 90, categoria: "Brinquedos", quantidadeNoCarrinho: 0, descricao: "Blocos de construção para estimular a criatividade."},
    
      {id: 25, nome: "Camiseta Básica", imagem: camisetaBasica, preco: 50, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Camiseta básica e confortável para o dia a dia."},
      {id: 26, nome: "Tênis Esportivo", imagem: tenisEsportivo, preco: 250, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Tênis esportivo, ideal para atividades físicas."},
      {id: 27, nome: "Bolsa de Couro", imagem: bolsaDeCouro, preco: 350, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Bolsa de couro de alta qualidade para todos os dias."},
      {id: 28, nome: "Relógio Masculino", imagem: relogio, preco: 400, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Relógio masculino com design sofisticado."},
      {id: 29, nome: "Óculos de Sol", imagem: oculosDeSol, preco: 120, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Óculos de sol modernos para proteger os olhos e compor o look."},
      {id: 30, nome: "Cinto de Couro", imagem: cintoDeCouro, preco: 80, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Cinto de couro durável e estiloso."},
      {id: 31, nome: "Vestido Feminino", imagem: vestidoFeminino, preco: 150, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Vestido feminino elegante e confortável."},
      {id: 32, nome: "Jaqueta de Couro", imagem: jaquetaDeCouro, preco: 450, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0, descricao: "Jaqueta de couro para um visual moderno e sofisticado."}
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

      const produtosFiltrados = useMemo(() => categoriaSelecionada ? produtos.filter(produto => produto.categoria === categoriaSelecionada) : produtos, [categoriaSelecionada, produtos]);

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
         setProdutoFiltradoPorId(filtradoPorId);
         }
      }

      return(
         <ProductsContext.Provider value={{filtrarPorId ,produtoFiltradoPorId, setProdutoFiltradoPorId, produtos, produtosFiltrados, filtrarPorCategoria, produtosAbaixoDe100Reais, aumentarQuantidade, diminuirQuantidade, produtosNosCarrinhos, produtosFiltradosPorNome, filtrarPorNome}}>
            {children}
         </ProductsContext.Provider>

      );
}
