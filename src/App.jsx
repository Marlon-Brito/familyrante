import { useEffect, useState } from 'react'
// Importando imagens
import Fundo from '../public/assets/images/home_background.jpg';
import Sobre from '../public/assets/images/sobre.jpg';
// Importando styles e scripts
import '../public/assets/css/index.css';
import '../public/assets/css/cardapio.css';
import '../public/assets/js/cardapio.js';
// Importando componentes
import Header from './components/Header.jsx';
import ItemCardapio from './components/ItemCardapio.jsx';
import Navegacao from './components/Navegação.jsx';
// Importando estrutura de dados
import { bebidas, pratosPrincipais, sobremesas } from '../public/assets/js/cardapio.js';

function App() {
  // Definindo lista de páginas do menu
  const paginaMenu = [pratosPrincipais, sobremesas, bebidas]
  // Monitorando qual página está selecionada com state
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  useEffect(() => {
    // Necessita instanciar e passar uma função com parâmetro
    const myObserver = new IntersectionObserver((entries) => {
      // Agora se receberá todas entradas, então deve-se separar estas listas de dados
      entries.forEach((entry) => {
        // Aí verá cada entrada, se ela estiver na tela se aplicará a classe show senão continuará hidden
        if (entry.isIntersecting){
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show');
        }
      })
    });

    // Selecionando todos elementos escondidos para observar e mostrar
    const elements = document.querySelectorAll('.hidden');

    // Pra funcionar ele vai observar todos elementos e acessará suas informações vendo quando são visíveis ou não, assim percorrerá e observará cada elemento
    elements.forEach((element) => myObserver.observe(element));
  });

  return (
    <>
      {/* Cabeçalho */}
      <Header/>

      {/* Conteúdo Principal */}
      <main className='conteudo--principal'>
        <div className="container__fundo">
          <img src={Fundo} alt="Fundo de Entrada" className='img__fundo'/>
          <h1 className='titulo'>Seja bem-vindo ao <span className="titulo--destaque">Familyrante</span>!</h1>
        </div>
        
        <section className='hidden'>
          {/* Cardápio: menu de navegação e itens do cardápio */}
          <h2 className='subtitulo container'>Cardápio</h2>

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

        {/* Seções de Informações: Sobre, Serviços e Contato */}
        <section className='sobre hidden' id='sobre'>
          <h2 className='container'>Sobre</h2>
          <p>Família, restaurante e comida. Venha conhecer o Familyrante, o restaurante que busca trazer aquele gostinho caseiro e aconchegante de poder apreciar uma comida junto da família, à comida bem feita e de qualidade para saciar a fome.</p>

          <img src={Sobre} alt="Sobre"/>
        </section>

        <section className='funcionamento hidden' id='funcionamento'>
          <h2 className='container'>Serviços</h2>
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Sábado: Fechado</li>
            <li>Segunda-feira: 08 às 20:00</li>
            <li>Terça-feira: 08 às 20:00</li>
            <li>Quarta-feira: 08 às 20:00</li>
            <li>Quinta-feira: 08 às 20:00</li>
            <li>Sexta-feira: 08 às 20:00</li>
            <li>Domingo: Fechado</li>
          </ul>

          <h3>Formas de Pagamento</h3>
          <ul>
            <li>Dinheiro</li>
            <li>Pix</li>
            <li>Cartão de Crédito</li>
            <li>Cartão de Débito</li>
            <li><small>( Aceitamos todas as bandeiras )</small></li>
          </ul>
        </section>

        <section className='contato hidden' id='contato'>
          <h2 className='container'>Contato</h2>

          <ul>
            <li><a href="#"><i class="bi bi-instagram icones" id='insta'></i> Instagram</a></li>
            <li><a href="#"><i class="bi bi-facebook icones" id='face'></i> Facebook</a></li>
            <li><a href="#"><i class="bi bi-whatsapp icones" id='whats'></i> WhatsApp</a></li>
          </ul>
        </section>
      </main>

      {/* Rodapé */}
      <footer className='rodape'>
        <p>© Copyright Familyrante. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
