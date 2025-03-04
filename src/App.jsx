// Importando hooks (funções que conectam recursos do react a componentes funcionais)
import { useEffect, useState } from 'react';
// Importando imagens
import Sobre from '../public/assets/images/sobre.jpg';
import Servicos from '../public/assets/images/servicos.jpg';

// Importando styles e scripts
import '../public/assets/css/index.css';
import '../public/assets/js/cardapio.js';
import { bebidas, pratosPrincipais, sobremesas } from '../public/assets/js/cardapio.js'; // Estrutura de dados

// Importando componentes
import Header from './components/Header.jsx';
import ItemCardapio from './components/ItemCardapio.jsx';
import Navegacao from './components/Navegação.jsx';
import Carrossel from './components/Carrossel.jsx';

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
        <section className='sobre' id='sobre'>
          <div className='sobre__conteudo'>
            <h2 className='subtitulo'>Sobre</h2>
            <p>Família, restaurante e comida. Venha conhecer o Familyrante, o restaurante que busca trazer aquele gostinho caseiro e aconchegante de poder apreciar uma comida junto da família, bem feita e de qualidade para saciar a fome.</p>

            <img src={Sobre} alt="Sobre"/>
          </div>
        </section>

        {/* Seção Serviços */}
        <section className='servicos' id='servicos'>
          <div className='servicos__conteudo'>
            <div>
              <h2 className='subtitulo'>Serviços</h2>
              <h3 className='subtitulo__horario'>Horário de Funcionamento</h3>
              <ul className='lista__horario'>
                <li>Domingo: Fechado</li>
                <li>Segunda-feira: 08 às 20:00</li>
                <li>Terça-feira: 08 às 20:00</li>
                <li>Quarta-feira: 08 às 20:00</li>
                <li>Quinta-feira: 08 às 20:00</li>
                <li>Sexta-feira: 08 às 20:00</li>
                <li>Sábado: Fechado</li>
              </ul>

              <h3 className='subtitulo__pagamento'>Formas de Pagamento</h3>
              <ul className='lista__pagamento'>
                <li>Dinheiro</li>
                <li>Pix</li>
                <li>Cartão de Crédito</li>
                <li>Cartão de Débito</li>
                <li><small>( Aceitamos todas as bandeiras )</small></li>
              </ul>
            </div>

            <img src={Servicos} alt="Sobre"/>
          </div>
        </section>

        {/* Seção Reservas */}
        <section className='reservas' id="reservas">
            <h2 className='subtitulo'>Reservas</h2>

            <div>
              <p><span>O que está esperando?</span> Faça sua reserva agora mesmo e venha degustar comida de qualidade feita com carinho para você e sua família!</p>

              <form action="#" className='formulario__reservas'>
                <div className='campos nome'>
                  <label htmlFor="nome">Nome: </label>
                  <input type="text" id="nome" />
                </div>

                <div className='campos numero--contato'>
                  <label htmlFor="numero">Número: </label>
                  <input type="number" id="numero" />
                </div>

                <div className='campos email'>
                  <label htmlFor="email">E-mail: </label>
                  <input type="email" id="email" />
                </div>

                <div className='campos numero--pessoas'>
                  <label htmlFor="numero__pessoas">Número de pessoas na mesa: </label>
                  <input type="number" id="numero__pessoas" />
                </div>

                <div className='campos data'>
                  <label htmlFor="data">Data: </label>
                  <input type="date" id="data" />
                </div>

                <div className='campos horario'>
                  <label htmlFor="horario">Horário: </label>
                  <input type="time" id="horario" />
                </div>

                <input type="submit" value="Reservar" id='btn__reservar' />
              </form>
            </div>
        </section>

        {/* Seção Contato */}
        <section className='contato hidden' id='contato'>
          <h2 className='subtitulo'>Contato</h2>

          <ul>
            <li><a href="#"><i class="fa-brands fa-square-instagram icones" id='insta'></i> Instagram</a></li>
            <li><a href="#"><i class="fa-brands fa-square-facebook icones" id='face'></i> Facebook</a></li>
            <li><a href="#"><i class="fa-brands fa-square-whatsapp icones" id='whats'></i> WhatsApp</a></li>
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

export default App;