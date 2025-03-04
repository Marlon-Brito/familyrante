export default function Reservas(){
    return(
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
    )
}