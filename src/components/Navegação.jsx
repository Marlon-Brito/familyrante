export default function Navegacao(props){
    return(
        <div className='navegacao container'>
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
            <label htmlFor="pagina-0">
                <i class="fa-solid fa-bowl-food"></i>
                <span>Pratos Principais</span>
            </label>

            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
            <label htmlFor="pagina-1">
                <i class="fa-solid fa-ice-cream"></i>
                <span>Sobremesas</span>
            </label>

            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
            <label htmlFor="pagina-2">
                <i class="fa-solid fa-mug-saucer"></i>
                <span>Bebidas</span>
            </label>
        </div>
    )
}