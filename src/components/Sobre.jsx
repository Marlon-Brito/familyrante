import ImgSobre from '../../public/assets/images/sobre.jpg';

export default function Sobre(){
    return(
        <section className='sobre' id='sobre'>
          <div className='sobre__conteudo'>
            <h2 className='subtitulo'>Sobre</h2>
            <p>Família, restaurante e comida. Venha conhecer o Familyrante, o restaurante que busca trazer aquele gostinho caseiro e aconchegante de poder apreciar uma comida junto da família, bem feita e de qualidade para saciar a fome.</p>

            <img src={ImgSobre} alt="Sobre"/>
          </div>
        </section>
    )
}