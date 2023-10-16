<p align="center"> <img height="250px" src="https://github.com/GabrielVeroneze/cinetag/assets/95183901/0148a528-6cf6-4712-a318-1e0dc4893019" style="border-radius: 20px"> </p>
<p>Projeto desenvolvido durante o curso "React: praticando React com Js" da Alura.</p>

<hr>

## Índice

- [Descrição](#descricao)
- [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
   - [Páginas Principais](#páginas-principais)
   - [Recursos de Interatividade](#recursos-de-interatividade)
   - [Navegação](#navegação)
- [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
   - [Estilização e Componentes](#estilização-e-componentes)
   - [Roteamento](#roteamento)
   - [Hooks e Contextos](#hooks-e-contextos)
   - [Consumo de API](#consumo-de-api)
   - [Responsividade](#responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#camera-demonstração-visual)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/cinetag/assets/95183901/c3655089-5676-4536-8d00-9296165f26aa"></h1>
<p align="center">O CineTag é uma plataforma que permite aos usuários assistir a uma variedade de filmes e vídeos, foi projetado para proporcionar aos usuários uma experiência envolvente e interativa.</p>

<p align="center">Além disso, os usuários podem criar sua própria lista de "Favoritos" para acompanhar os conteúdos que mais apreciam. A interface é intuitiva e fácil de usar, permitindo uma navegação suave entre os conteúdos disponíveis.</p>

## :rocket: Funcionalidades e Recursos

### Páginas Principais

- `Home`: Os usuários podem explorar uma lista de filmes e vídeos disponíveis para visualização. Eles são apresentados em cards contendo sua imagem, título e um ícone de favoritar.

- `Favoritos`: Nesta página, os usuários podem acessar rapidamente os filmes e vídeos que marcaram como favoritos. Os cards dos filmes e vídeos favoritados são exibidos nesta página.

- `Player`: A página "Player" exibe o vídeo ou filme selecionado pelo usuário.

- `Não Encontrada`: Quando um usuário tenta acessar uma rota que não existe na aplicação, a página 404 é exibida, fornecendo um aviso sobre o erro.

### Recursos de Interatividade

- `Favoritar Vídeo`: Os usuários têm a capacidade de favoritar um filme ou vídeo clicando no ícone de coração de cada card, adicionando ele na lista de "Favoritos".

- `Reproduzir Vídeo`: Ao clicar na imagem de um filme ou vídeo, os usuários são direcionados para a página de "Player" correspondente, onde os filmes e vídeos podem ser reproduzidos.

### Navegação

- `Links de Navegação`: Implementa uma navegação eficiente por meio de links de navegação no cabeçalho, que está presente em todas as páginas.

## :toolbox: Desenvolvimento e Implementação

### Estilização e Componentes

- `Estilização`: O CineTag utiliza `Sass` e `CSS Modules` para estilizar seus componentes, proporcionando uma experiência visual atraente.

### Roteamento

- `Rotas`: Utiliza o `React Router` para criar um sistema de navegação eficiente com várias páginas. Ele inclui rotas para a página "Home", "Favoritos" e páginas de "Players" individuais.

- `Rotas Aninhadas`: As páginas "Home" e "Favoritos" são roteadas como filhas da página padrão, permitindo a reutilização da estrutura da página.

- `Rotas Dinâmicas`: Usa rotas dinâmicas para exibir os players de filmes ou vídeos individuais. Cada card redireciona para uma rota única, onde o conteúdo do vídeo é renderizado com base em seu ID.

- `Tratamento de Rota não Encontrada`: Uma rota com o caminho `'*'` é configurada para renderizar a página de erro 404 quando a URL não corresponde a nenhuma outra rota.

### Hooks e Contextos

- `Hooks do React`: A aplicação utiliza diversos hooks do React, como `useState`, `useEffect` e `useContext`, para gerenciar o estado e interações com os componentes.

- `Hooks Customizados`: São criados hooks customizados para gerenciar o contexto de favoritos e para buscar dados dos vídeos por meio da `Fetch API`.

- `Contextos`: Utiliza a `Context API` para criar contextos com o `createContext`. É criado o contexto de favoritos, permitindo que os elementos utilizem contextos com o `Provider` e `useContext`.

### Consumo de API

- `API de Mock`: A aplicação consome uma API de mock que fornece dados sobre os vídeos e filmes disponíveis.

- `Hospedagem da API`: A API de mock é hospedada no `My JSON Server` para que possa ser consumida pela aplicação.

- `FetchAPI`: A API é consumida usando a `Fetch API` para recuperar os dados dos filmes e vídeos.

### Responsividade

- `Media Queries`: O projeto utiliza media queries para garantir que a aplicação seja responsiva em dispositivos móveis, tablets e desktops.


## :computer: Ferramentas utilizadas

| &nbsp; React | &nbsp; Vite | Context API | React Router | &nbsp; Sass |
| ------------ | ----------- | ----------- | ------------ | ----------- |
<img height="65px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="65px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/6810d45b-69d9-4282-a255-f4afa9c06f54"> | &nbsp; <img height="70px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/63e05b70-6218-455f-b37d-f5d888cd3748"> | <img height="50px" src="https://github.com/GabrielVeroneze/react-blog/assets/95183901/e4274260-9415-408e-9757-5f2277c42a29"> | <img height="70px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/cinetag/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/cinetag.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd cinetag
   ```
3. Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:
   ```
   npm install
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso irá instalar todas as dependências listadas no arquivo package.json.

4. Após a instalação das dependências, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm run dev
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.
<br>

## :camera: Demonstração Visual
`Página Inícial`
![CineTag](https://github.com/GabrielVeroneze/cinetag/assets/95183901/a22034e7-731d-4a9c-b030-a3f86a86cbb1)

`Favoritando Vídeo`
![CineTag](https://github.com/GabrielVeroneze/cinetag/assets/95183901/624890be-9803-4608-a73a-b97a715b9894)

`Reproduzindo Vídeo`
![CineTag](https://github.com/GabrielVeroneze/cinetag/assets/95183901/b982086d-6fde-4cc8-9049-91f631f576b4)

`Página Não Encontrada`
![CineTag](https://github.com/GabrielVeroneze/cinetag/assets/95183901/63bb33eb-1d35-4495-a096-6f2a21bc9509)
