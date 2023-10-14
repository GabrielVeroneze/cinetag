<p align="center"> <img src="https://github.com/GabrielVeroneze/space-app/assets/95183901/cb713a42-33f4-41cf-83d5-9df0ffad05c6" style="border-radius: 20px"> </p>
<p>Projeto desenvolvido durante o curso "React: estilize componentes com Styled Components e manipule arquivos estáticos" da Alura.</p>

<hr>

## Índice

- [Descrição](#descricao)
- [Funcionalidades e Recursos](#toolbox-funcionalidades-e-recursos)
   - [Página Inícial](#página-inícial)
   - [Recursos de Interatividade](#recursos-de-interatividade)
   - [Filtros e Busca](#filtros-e-busca)
   - [Navegação](#navegação)
   - [Recursos Utilizados](#recursos-utilizados)
   - [Responsividade](#responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#demonstração-visual)

<h1 align="center" id="descricao"><img width="250px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/900fd7ea-e4a4-41a7-ab64-c964bd2b5072"></h1>
<p align="center">O Space App é um catálogo de imagens do espaço, nele os usuários podem explorar imagens do universo de forma eficiente e conveniente. A aplicação oferece diversas funcionalidades para tornar a experiência do usuário mais envolvente e informativa.</p>

## :toolbox: Funcionalidades e Recursos

### Páginas Principais

- #### Home:
   - `Listagem de Vídeos`: Os usuários podem explorar uma lista de filmes e vídeos disponíveis para visualização. Eles são apresentados em cards contendo sua imagem, título e um ícone de favoritar.

- #### Favoritos:
   - `Listagem de Favoritos`: Nesta página, os usuários podem acessar rapidamente os filmes e vídeos que marcaram como favoritos. Os cards dos itens favoritados são exibidos nesta página.

- #### Player:
   - `Visualização do Vídeo`: A página "Player" exibe o vídeo ou filme selecionado pelo usuário.

- #### Não Encontrada:
   - `Aviso de Erro`: Quando um usuário tenta acessar uma rota que não existe na aplicação, a página 404 é exibida, fornecendo um aviso sobre o erro.

### Recursos de Interatividade

- `Favoritar Vídeo`: Os usuários têm a capacidade de favoritar um filme ou vídeo clicando no ícone de coração de cada card, adicionando ele na lista de "Favoritos".

- `Reproduzir Vídeo`: Ao clicar na imagem de um filme ou vídeo, os usuários são direcionados para a página de "Player" correspondente, onde os filmes e vídeos podem ser reproduzidos.

### Navegação

- `Links de Navegação`: Implementa uma navegação eficiente por meio de links de navegação no cabeçalho, que está presente em todas as páginas.

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

| &nbsp; React | &nbsp; Vite | Styled Components | 
| ------------ | ----------- | ----------------- |
<img height="65px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="65px" src="https://github.com/GabrielVeroneze/space-app/assets/95183901/6810d45b-69d9-4282-a255-f4afa9c06f54"> | &nbsp; &nbsp; <img height="100px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/17447cac-f50e-4b9a-91bf-52617c28a16f">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/space-app/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/space-app.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd space-app
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

## Demonstração Visual
`Página Inícial`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/d1c29281-76ef-4eb5-9e2c-cfd3cfbf166b)

`Filtrando por Tags`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/0aaeee2b-b55c-40b2-83ff-9297ec7e0366)

`Filtrando por Título`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/444c6b1c-f953-40ac-8d83-bb5767236417)

`Favoritando Imagem`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/ca4c360b-2c46-47a4-9c14-36c30acdc32a)

`Ampliando Imagem`
![Space App](https://github.com/GabrielVeroneze/space-app/assets/95183901/f3c1710d-9f9e-49a3-8490-3acc847f8497)
