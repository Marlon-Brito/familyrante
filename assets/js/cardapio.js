// Estrutura com todas as informações do cardápio
import pizzaImg from '../images_cardapio/pratos-principais/pizza-queijo.jpg';
import ratatouilleImg from '../images_cardapio/pratos-principais/ratatouille.jpg';
import hotDogImg from '../images_cardapio/pratos-principais/hot-dog.jpg';
import lasanhaImg from '../images_cardapio/pratos-principais/lasanha.jpg';
import strogonoffImg from '../images_cardapio/pratos-principais/strogonoff.jpg';

import pudimImg from '../images_cardapio/sobremesas/pudim.jpg';
import sorveteImg from '../images_cardapio/sobremesas/sorvete-casquinha.jpg';

import cocaImg from '../images_cardapio/bebidas/coca-cola-lt.jpg';
import guaranaImg from '../images_cardapio/bebidas/guarana-lt.jpg';
import pepsiImg from '../images_cardapio/bebidas/pepsi-lt.jpg';
import monsterMangaImg from '../images_cardapio/bebidas/monster-manga-lt.jpg';

// Pratos Principais
const pizza = {
    nome: 'Pizza de Queijo',
    preco: 'R$ 49,99',
    imagem: pizzaImg,
    descricao: 'Coberta com molho de tomate, queijo tipo mussarela, azeitonas pretas e orégano e massa com fermentação natural, oferece mais sabor e qualidade à sua mesa.',
}
const ratatouille = {
    nome: 'Ratatouille',
    preco: 'R$ 33,80',
    imagem: ratatouilleImg,
    descricao: 'É uma clássica receita francesa provençal de legumes cozidos, embora ela varie os ingredientes básicos geralmente incluem berinjela, abobrinha, pimentão, cebola e tomate.',
}
const hotDog = {
    nome: 'Hot-Dog',
    preco: 'R$ 7,99',
    imagem: hotDogImg,
    descricao: 'Um cachorro-quente (também conhecido pelo anglicismo hot dog) é uma comida típica dos Estados Unidos em que se coloca salsicha dentro de um pão sovado.',
}
const lasanha = {
    nome: 'Lasanha',
    preco: 'R$ 25,00',
    imagem: lasanhaImg,
    descricao: 'É tanto um tipo de massa alimentícia formada por fitas largas, como também um prato, feito com essas fitas colocadas em camadas, e entremeadas com recheio (queijo, presunto, carne moída ou outros) e molho.',
}
const strogonoff = {
    nome: 'Strogonoff',
    preco: 'R$ 24,99',
    imagem: strogonoffImg,
    descricao: 'Estrogonofe (do russo строганов, stroganov) é um prato originário da culinária russa composto de cubos de carne ou legumes, servidos num molho de creme de leite.',
}

// Sobremesas
const pudim = {
    nome: 'Pudim',
    preco: 'R$ 7,50',
    imagem: pudimImg,
    descricao: 'Com um sabor delicado e uma textura cremosa, o pudim é uma combinação perfeita de ingredientes simples, como ovos, leite e leite condensado, que resultam em um doce saboroso e requintado.',
}
const sorvete = {
    nome: 'Sorvete',
    preco: 'R$ 5,00',
    imagem: sorveteImg,
    descricao: 'Uma casquinha de sorvete é uma massa em forma de cone, geralmente feita com uma textura semelhante a um waffle, para que o sorvete possa ser transportado e comido sem uma tigela ou colher.',
}

// Bebidas
const coca = {
    nome: 'Coca-Cola 350ml LT',
    preco: 'R$ 3,50',
    imagem: cocaImg,
    descricao: 'A Coca-Cola Original é o refrigerante mais tradicional e consumido no mundo. Possui sabor inconfundível e único. É feito a partir de água gaseificada, açúcar, extrato de noz de cola e cafeína.',
}
const guarana = {
    nome: 'Guaraná 350ml LT',
    preco: 'R$ 4,00',
    imagem: guaranaImg,
    descricao: 'Guaraná Antarctica é a marca que captura a paixão e a alegria do povo brasileiro. É feita a partir de água gaseificada, açúcar, extrato de guaraná e acidulante ácido cítrico.',
}
const pespi = {
    nome: 'Pepsi 350ml LT',
    preco: 'R$ 2,99',
    imagem: pepsiImg,
    descricao: 'A Pepsi é produzida com ingredientes selecionados e de alta qualidade, como açúcar refinado, água gaseificada, corantes e aromatizantes naturais. Possuindo sabor equilibrado entre doce e ácido.',
}
const monsterManga = {
    nome: 'Monster Mango Loco 473ml LT',
    preco: 'R$ 11,99',
    imagem: monsterMangaImg,
    descricao: 'O Monster Mango Loco possui suco de manga e a mistura especial de energético da marca. Sua fórmula conta com taurina, cafeína, inositol e vitaminas B3, B2, B6, B12.',
}

// Exportando dados
export const pratosPrincipais = [pizza, ratatouille, hotDog, lasanha, strogonoff];
export const sobremesas = [pudim, sorvete];
export const bebidas = [coca, guarana, pespi, monsterManga];