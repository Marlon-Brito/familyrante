import { useState } from "react";

export default function ItemCardapio(props){
    /* 
        Monitorando o estado da descrição via State. 
        Ao clicar na imagem de um item do cardápio ela 
        será substituída pela sua descrição e vice-versa. 
    */
    const [mostrarDescricao, setMostrarDescricao] = useState(false);

    const toggleDescricao = () => {
        setMostrarDescricao(!mostrarDescricao);
    };
    
    return(
        <li className="item__cardapio container">
            <div>
                <h2 className="item__cardapio--nome">{props.nome}</h2>
                <p className="item__cardapio--preco">{props.preco}</p>
            </div>
            
            {mostrarDescricao ? (
                <p className="item__cardapio--descricao" 
                    onClick={toggleDescricao}
                    style={{ cursor: "pointer", textAlign: "justify", width: "90%" }}
                >
                    {props.descricao}
                </p>
            ) : (
                <img 
                    className="item__cardapio--imagem" 
                    src={props.imagem} 
                    alt={props.nome} 
                    onClick={toggleDescricao} 
                    style={{ cursor: "pointer" }}
                />
            )}
        </li>
    )
}