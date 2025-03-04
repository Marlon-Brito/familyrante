// Importando hooks (funções que conectam recursos do react a componentes funcionais)
import { useState } from 'react';

// Importando styles e scripts
import '../public/assets/css/index.css';
import '../public/assets/js/cardapio.js';
import { bebidas, pratosPrincipais, sobremesas } from '../public/assets/js/cardapio.js'; // Estrutura de dados

// Importando componentes
import Header from './components/Header.jsx';
import ItemCardapio from './components/ItemCardapio.jsx';
import Navegacao from './components/Navegação.jsx';
import Carrossel from './components/Carrossel.jsx';

import Sobre from './components/Sobre.jsx';
import Servicos from './components/Servicos.jsx';
import Reservas from './components/Reservas.jsx';
import Contato from './components/Contato.jsx';

function App() {
  // Definindo lista de páginas do menu
  const paginaMenu = [pratosPrincipais, sobremesas, bebidas]
  // Monitorando qual página está selecionada com state
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0); 

  return (
    <>
      {/* Cabeçalho */}
      <Header/>

      {/* Conteúdo Principal */}
      <main className='conteudo--principal' id='inicio'>
        <Carrossel />

        <div className="apresentacao container">
          <h1 className='titulo'>Seja bem-vindo ao <span className="titulo--destaque">Familyrante</span>!</h1>
          <p className='slogan'>O melhor restaurante, onde você come em família.</p>
        </div>
        
        <section className='cardapio' id='cardapio'>
          {/* Cardápio: menu de navegação e itens do cardápio */}
          <h2 className='subtitulo'>Cardápio</h2>

          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>

          <ul className='menu__cardapio'>
            {
              paginaMenu[paginaSelecionada].map(item => <ItemCardapio 
                nome={item.nome} 
                preco={item.preco} 
                descricao={item.descricao} 
                imagem={item.imagem}
              />)
            }
          </ul>
        </section>

        {/* Seção Sobre */}
        <Sobre/>

        {/* Seção Serviços */}
        <Servicos/>

        {/* Seção Reservas */}
        <Reservas/>

        {/* Seção Contato */}
        <Contato/>
      </main>

      {/* Rodapé */}
      <footer className='rodape'>
        <p>© Copyright Familyrante. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App;