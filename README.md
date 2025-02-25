# Familyrante

**Familyrante** é um site feito com base no Intensivão de JS da Hashtag Treinamentos, elaborado no formato SPA (Single Page Application), cujas funcionalidades estão centradas numa única página. Sendo um restaurante com cardápio digital adaptável e interativo.

## 🛠️ Tecnologias Utilizadas

* HTML
* SCSS
* JS
* React + Vite

## 📥 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Marlon-Brito/familyrante.git

2. Acesse a pasta do projeto:
   ```bash
   cd nome-projeto

## 🚀 Como usar
   Após acessar o projeto, abra um terminal e execute o seguinte comando para rodar a aplicação:
   ```
   npm run dev
   ```
   
   Este comando é usado ao criar um projeto **React** (biblioteca JS que permite criar interfaces de usuário dinâmicas e interativas) com __Vite__ (que é um servidor de desenvolvimento local e usado por padrão para modelos de projeto _React_). Para mais informações         sobre     *React* e a criação de um projeto com _Vite_ veja a documentação completa deles: [documentação React](https://react.dev/) e [documentação Vite](https://pt.vite.dev/guide/).

   Neste projeto também foi usado o **SCSS** (Syntactically Awesome Style Sheets), que é uma linguagem de extensão do CSS. A sua ideia é dar "superpoderes" ao CSS adicionando recursos especiais como: variáveis, operadores, mixins (funções), extends, partials e outras       opções variadas. Sendo uma nova forma de escrever o CSS, grosseiramente é como se programasse o arquivo de estilo, pois ele funciona de forma pré-processada, não se usando o arquivo fonte SCSS em produção, mas sim, o que será processado em CSS para utilização final. 
   Para mais informações sobre o *SCSS* [acesse](https://sass-lang.com/) o site oficial.

   ### Instalando o SCSS
   Via NPM se instalará o SCSS globalmente para depois podê-lo usar em qualquer projeto:
   ```
   npm install -g sass
   ```

   Verificando se foi instalado corretamente:
   ```
   sass --version
   ```

   ### Usando o SCSS
   Dá para usá-lo via linha de comando, mas para facilitar usaremos a extensão **Live SASS Compiler** que pode ser baixada pelo menu de extensões do VSCode. Para quem já usou o *Live Server* ela é semelhante mas ao invés de criar um servidor local para desenvolvimento      ela faz uma compilação, convertendo SCSS em CSS convencional ao ativá-la. Por exemplo:
   
   1. Se cria uma pasta "styles" no seu projeto onde ficaram os estilos;
   2. Nela se cria um arquivo "index.scss";
   3. Aí no arquivo principal do projeto "index.html" (supondo que seja este)  se referencia o caminho do arquivo de estilo, mas não será o "index.scss" e sim o futuro "index.css" (por isso ele deve ter o mesmo nome de arquivo) que será processado a partir deste;
   4. Após se fazer toda estilização se ferá o seguinte, lembra que baixou a extensão **Live SASS Compiler**? Então, no menu de baixo do VSCode terá uma opção agora chamada "Watch Sass" que você irá clicar;
   5. Depois disso a entensão irá compilar o arquivo SCSS e processará um novo com o mesmo nome mas em CSS. E ficará "Watching", ou seja, assistindo as mudanças que ocorrerem no decorrer do projeto para continuar convertendo o SCSS em CSS.

## 🖥️ Deploy
[Clique aqui para ver a implementação do site](https://marlon-brito.github.io/familyrante/).
