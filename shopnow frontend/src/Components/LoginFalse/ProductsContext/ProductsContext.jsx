import { createContext, useState} from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [produtos] = useState([
      {id: 1, nome: "Sofá 3 Lugares", preco: 1500, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0 },
      {id: 2, nome: "Abajur de Mesa", preco: 120, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
      {id: 3, nome: "Cortina Blackout", preco: 250, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
      {id: 4, nome: "Quadro Decorativo", preco: 80, categoria: "Casa e Decoração", quantidadeNoCarrinho: 0  },
      {id: 5, nome: "Tapete Redondo", preco: 200, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
      {id: 6, nome: "Vaso de Flores", preco: 40, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
      {id: 7, nome: "Conjunto de Cadeiras", preco: 800, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
      {id: 8, nome: "Estante de Livros", preco: 400, categoria: "Casa e Decoração" , quantidadeNoCarrinho: 0 },
  
      {id: 9, nome: "Computador", preco: 3500, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
      {id: 10, nome: "Televisão 32p", preco: 2000, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
      {id: 11, nome: "Rádio", preco: 170, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
      {id: 12, nome: "Fone de ouvido", preco: 80, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
      {id: 13, nome: "Carregador de celular", preco: 120, categoria: "Eletrônicos", quantidadeNoCarrinho: 0  },
      {id: 14, nome: "Micro-ondas", preco: 500, categoria: "Eletrônicos", quantidadeNoCarrinho: 0  },
      {id: 15, nome: "Geladeira", preco: 2500, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
      {id: 16, nome: "Forno Elétrico", preco: 600, categoria: "Eletrônicos" , quantidadeNoCarrinho: 0 },
  
      {id: 17, nome: "Bola de Futebol", preco: 60, categoria: "Brinquedos", quantidadeNoCarrinho: 0  },
      {id: 18, nome: "Boneca de Pano", preco: 40, categoria: "Brinquedos" , quantidadeNoCarrinho: 0 },
      {id: 19, nome: "Carrinho de Controle Remoto", preco: 150, categoria: "Brinquedos" , quantidadeNoCarrinho: 0 },
      {id: 20, nome: "Jogo de Tabuleiro", preco: 100, categoria: "Brinquedos", quantidadeNoCarrinho: 0  },
      {id: 21, nome: "Quebra-Cabeça 500 Peças", preco: 30, categoria: "Brinquedos", quantidadeNoCarrinho: 0  },
      {id: 22, nome: "Pelúcia de Ursinho", preco: 70, categoria: "Brinquedos" , quantidadeNoCarrinho: 0 },
      {id: 23, nome: "Trenzinho de Brinquedo", preco: 80, categoria: "Brinquedos", quantidadeNoCarrinho: 0 },
      {id: 24, nome: "Set de Blocos de Construção", preco: 90, categoria: "Brinquedos" , quantidadeNoCarrinho: 0 },
  
      {id: 25, nome: "Camiseta Básica", preco: 50, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0  },
      {id: 26, nome: "Tênis Esportivo", preco: 250, categoria: "Moda e acessórios" , quantidadeNoCarrinho: 0 },
      {id: 27, nome: "Bolsa de Couro", preco: 350, categoria: "Moda e acessórios" , quantidadeNoCarrinho: 0 },
      {id: 28, nome: "Relógio Masculino", preco: 400, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0  },
      {id: 29, nome: "Óculos de Sol", preco: 120, categoria: "Moda e acessórios", quantidadeNoCarrinho: 0  },
      {id: 30, nome: "Cinto de Couro", preco: 80, categoria: "Moda e acessórios" , quantidadeNoCarrinho: 0 },
      {id: 31, nome: "Vestido Feminino", preco: 150, categoria: "Moda e acessórios" , quantidadeNoCarrinho: 0 },
      {id: 32, nome: "Jaqueta de Couro", preco: 450, categoria: "Moda e acessórios" , quantidadeNoCarrinho: 0 },
      ]);

      const aumentarQuantidade = (id) => {
         produtos.map(produto => { if(id === produto.id) { produto.quantidadeNoCarrinho += 1}});
      } 

      const diminuirQuantidade = (id) => {
         produtos.map(produto => { if(id === produto.id && produto.quantidadeNoCarrinho > 0) { produto.quantidadeNoCarrinho -= 1}});
      }
    
      const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    
      const filtrarPorCategoria = (categoria) => {
        setCategoriaSelecionada(categoria);
      };

      const produtosFiltrados = categoriaSelecionada ? produtos.filter(produto => produto.categoria === categoriaSelecionada) : produtos;

      const produtosAbaixoDe100Reais = produtos.filter(produto => produto.preco <= 100);

      return(
         <ProductsContext.Provider value={{produtosFiltrados, filtrarPorCategoria, produtosAbaixoDe100Reais, aumentarQuantidade, diminuirQuantidade}}>
            {children}
         </ProductsContext.Provider>

      );
}
