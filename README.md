# The Movie Project

Bem-vindo ao **The Movie Project**!

O **The Movie Project** é um site de filmes onde você pode pesquisar filmes e obter informações sobre as avaliações deles. Este projeto é desenvolvido utilizando **Next.js 14**, **Typescript**, **Tailwind CSS**, entre outras bibliotecas, como **React Query**, **Next Themes**, **Helmet Async**, **Nuqs Adapter** e **Shadcn**.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React para construção da aplicação.
- **Typescript**: Para garantir tipagem estática e facilitar o desenvolvimento.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
- **React Query**: Para gerenciamento de estado e requisições à API.
- **Next Themes**: Para gerenciamento de temas claro/escuro.
- **Docker**: Para facilitar o processo de construção e execução do ambiente de desenvolvimento.

## Bibliotecas e Ferramentas Específicas

### 1. **Helmet Async**
O **Helmet Async** é uma biblioteca usada para gerenciar o título da página, meta tags e outros elementos no `<head>` de uma página HTML, de maneira assíncrona, no contexto de uma aplicação React. Isso é especialmente útil para SEO e para a manipulação de conteúdo dinâmico da página, como títulos que mudam conforme o conteúdo da página.

- **O que ele faz**: Ele permite definir valores dinâmicos como título da página, meta descrições, e tags sociais (como Open Graph) de forma eficiente, aproveitando a renderização do lado do servidor para otimizar o SEO.
  
- **Por que usar**: Ele é útil em aplicativos React, como o Next.js, onde você precisa manipular informações que devem ser exibidas no `<head>`, dependendo da página que o usuário está visitando. Com o **Helmet Async**, você pode garantir que essas informações sejam renderizadas corretamente e de forma assíncrona, garantindo que os motores de busca consigam indexar seu conteúdo corretamente.

### 2. **Nuqs Adapter**
O **Nuqs Adapter** é uma biblioteca que facilita a integração entre diferentes fontes de dados e o estado de gerenciamento do aplicativo, permitindo abstrair a comunicação com APIs e sistemas de back-end. Ele é usado principalmente para conectar a aplicação com APIs externas de maneira eficiente, gerenciando cache, validação e transformação de dados.

- **O que ele faz**: Ele adapta os dados de entrada e saída de APIs de forma que a aplicação não precise lidar diretamente com a lógica de comunicação com o back-end. Isso torna o código mais limpo e modular, pois o **Nuqs Adapter** gerencia a lógica de comunicação com a API, enquanto a aplicação se foca na exibição e manipulação dos dados.
  
- **Por que usar**: Ele simplifica a forma como o front-end se comunica com as APIs, centralizando a lógica de requisições e processamento de dados. Isso melhora a manutenibilidade do código, tornando-o mais fácil de escalar e otimizar.

### 3. **Shadcn**
O **Shadcn** é uma biblioteca de componentes de interface de usuário (UI) que oferece componentes prontos para usar e que seguem boas práticas de acessibilidade e design. Ele é otimizado para ser facilmente integrado em projetos React, oferecendo componentes como botões, modais, carrosséis e muito mais.

- **O que ele faz**: Ele oferece componentes reutilizáveis que podem ser usados em qualquer aplicação React. Esses componentes seguem as melhores práticas de design, acessibilidade e são altamente configuráveis.
  
- **Por que usar**: Usar **Shadcn** acelera o desenvolvimento da interface de usuário, permitindo que você se concentre mais nas funcionalidades do aplicativo em vez de criar cada componente do zero. Além disso, ele já possui integração com práticas recomendadas de acessibilidade, garantindo que sua aplicação seja utilizável por um público mais amplo.

## Arquitetura do Projeto

O projeto segue uma **arquitetura baseada em hooks**, onde organizamos o código em **hooks**, **interfaces**, **componentes**, **libs**, **styles** e a estrutura de **app**. Essa abordagem permite que o código seja modular, reutilizável e fácil de manter, além de promover a separação de responsabilidades.

Utilizamos o **App Router** do Next.js para gerenciar as rotas de forma eficiente e declarativa, o que melhora a experiência de desenvolvimento e manutenção do projeto.

A aplicação possui **responsividade** para diferentes dispositivos como **celulares**, **desktops**, **televisões** e **tablets**, garantindo uma boa experiência de usuário em qualquer tamanho de tela.

## Instalação

### Requisitos

- **Docker**: Certifique-se de ter o Docker instalado em sua máquina. Se não tiver, você pode seguir o guia de instalação oficial [aqui](https://docs.docker.com/get-docker/).

### Passos para rodar o projeto com Docker

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-repositorio>
   ```

2. **Construa a imagem Docker**:
   Execute o comando para construir a imagem do Docker.
   ```bash
   docker-compose build
   ```

3. **Inicie o container Docker**:
   Após a construção da imagem, inicie o container com o seguinte comando:
   ```bash
   docker-compose up
   ```

4. **Acesse a aplicação**:
   Abra o navegador e acesse a URL:
   ```bash
   http://localhost:3000
   ```

   Sua aplicação estará disponível na porta 3000 do seu navegador.

## Vídeos e Imagens

---

## English Version

Welcome to **The Movie Project**!

The **The Movie Project** is a film site where you can search for movies and get information on their ratings. This project is developed using **Next.js 14**, **Typescript**, **Tailwind CSS**, and other libraries such as **React Query**, **Next Themes**, **Helmet Async**, **Nuqs Adapter**, and **Shadcn**.

### Technologies Used

- **Next.js 14**: React framework for building the application.
- **Typescript**: For static typing and better development.
- **Tailwind CSS**: CSS framework for fast and responsive styling.
- **React Query**: For state management and API requests.
- **Next Themes**: For dark/light theme management.
- **Docker**: For streamlining the build and run process in the development environment.

### Libraries and Tools Used

#### 1. **Helmet Async**
**Helmet Async** is a library used for managing the title, meta tags, and other elements in the `<head>` of a page asynchronously in a React app. It is especially useful for SEO and handling dynamic page content, such as titles that change depending on the page content.

- **What it does**: It allows you to set dynamic values like the page title, meta descriptions, and social tags (such as Open Graph) efficiently. It ensures that these are rendered correctly and asynchronously for SEO purposes.
  
- **Why use it**: It is useful in React applications, like Next.js, where you need to manage `<head>` elements that change based on the page the user is visiting. **Helmet Async** ensures these are rendered properly and asynchronously for optimal SEO.

#### 2. **Nuqs Adapter**
**Nuqs Adapter** is a library that facilitates the integration between different data sources and the app's state management, allowing for seamless API communication and data transformation.

- **What it does**: It abstracts API communication by handling the input and output of data efficiently, so the app doesn't need to directly manage back-end communication. This helps keep the code clean and modular.
  
- **Why use it**: It simplifies front-end API interactions, centralizing request logic and data processing. This improves code maintainability, scalability, and optimization.

#### 3. **Shadcn**
**Shadcn** is a UI component library offering reusable, accessible, and configurable UI elements like buttons, modals, carousels, and more, built to work seamlessly with React.

- **What it does**: It provides a set of ready-to-use components that follow design and accessibility best practices. These components are customizable and can be used across different applications.
  
- **Why use it**: Using **Shadcn** accelerates UI development, allowing you to focus on functionality rather than building each component from scratch. It also ensures accessibility best practices are followed, making your app usable by a wider audience.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build the Docker image:
   ```bash
   docker-compose build
   ```

3. Start the Docker container:
   ```bash
   docker-compose up
   ```

4. Access the app:
   ```bash
   http://localhost:3000
   ```

Your application will be available on port 3000 in your browser.
