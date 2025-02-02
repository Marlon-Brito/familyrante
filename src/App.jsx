import { useEffect, useState } from 'react'
// Importando imagens e videos
import Sobre from '../public/assets/images/sobre.jpg';
import Video from '../public/assets/videos/restaurante.mp4';
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
    const observer = new IntersectionObserver((entries, observerInstance) => {
      // Agora se receberá todas entradas, então deve-se separar estas listas de dados
      entries.forEach((entry) => {
        // Verá cada entrada, se ela estiver na tela se aplicará a classe 
        if (entry.isIntersecting) {
          // Adicionar a classe "show" para torná-la visível
          entry.target.classList.add('show');
          // Parar de observar essa seção
          observerInstance.unobserve(entry.target);
        }
      });
    });

    // Selecionar todas as seções com a classe "hidden"
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));

    // Cleanup (limpeza) para evitar memory leaks (vazamentos de memória)
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Cabeçalho */}
      <Header/>

      {/* Conteúdo Principal */}
      <main className='conteudo--principal'>
        <video autoPlay loop muted>
          <source src={Video}  type="video/mp4" />
        </video>

        <div className="apresentacao">
          <h1 className='titulo'>Seja bem-vindo ao <span className="titulo--destaque">Familyrante</span>!</h1>
          <p className='slogan'>O melhor restaurante! Onde você come em família.</p>
        </div>
        
        <section className='hidden' id='cardapio'>
          {/* Cardápio: menu de navegação e itens do cardápio */}
          <h2 className='subtitulo container'>Cardápio</h2>

          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>

          <ul className='menu__cardapio container'>
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
          <h2 className='subtitulo container'>Sobre</h2>
          <p>Família, restaurante e comida. Venha conhecer o Familyrante, o restaurante que busca trazer aquele gostinho caseiro e aconchegante de poder apreciar uma comida junto da família, comida bem feita e de qualidade para saciar a fome.</p>

          <img src={Sobre} alt="Sobre"/>
        </section>

        <section className='funcionamento hidden' id='funcionamento'>
          <h2 className='subtitulo container'>Serviços</h2>
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
        </section>

        <section className='contato hidden' id='contato'>
          <h2 className='subtitulo container'>Contato</h2>

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