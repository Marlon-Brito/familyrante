// Importando imagens
import ImgServicos from '../../public/assets/images/servicos.jpg';

export default function Servicos(){
    return(
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

                <img src={ImgServicos} alt="Sobre"/>
            </div>
        </section>
    )
}