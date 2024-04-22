export default function ItemCardapio(props){
    return(
        <li>
            <div>
                <h2 className="item__cardapio--nome">{props.nome}</h2>
                <p className="item__cardapio--preco">{props.preco}</p>
                <p className="item__cardapio--descricao">{props.descricao}</p>
            </div>
            
            <img className="item__cardapio--imagem" src={props.imagem} alt={props.nome}/>
        </li>
    )
}