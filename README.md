# ReactJS Activities

Este repositório contém diversas atividades de aprendizado e prática com ReactJS, divididas em componentes que abordam diferentes conceitos da biblioteca. Cada atividade foi criada com o intuito de melhorar o entendimento sobre componentes, estado, manipulação de eventos, entre outros.

## Estrutura do Projeto

O projeto está dividido nas seguintes pastas e arquivos:

### **1. Form**

A pasta `Form` contém componentes para manipulação de formulários e interação com o usuário. Os componentes principais são:

- **Form.jsx**: Este componente cria um formulário simples onde o usuário pode preencher informações e enviar.
- **Welcome.jsx**: Exibe uma mensagem de boas-vindas após o envio do formulário, utilizando o estado gerenciado no componente `Form`.

### **2. ImageGallery**

A pasta `ImageGallery` contém componentes para exibir e interagir com uma galeria de imagens. Os componentes são:

- **ImageGallery.jsx**: Exibe a galeria de imagens, permitindo que o usuário visualize uma coleção de imagens.
- **Modal.jsx**: Um modal que é aberto ao clicar em uma imagem da galeria, exibindo-a em tamanho maior.

### **3. Tabs**

A pasta `Tabs` contém o componente que implementa um sistema de abas (tabs), permitindo alternar entre diferentes conteúdos.

- **Tabs.jsx**: Exibe diferentes abas, e o conteúdo de cada aba muda dinamicamente quando a aba é clicada.

### **4. Outros Componentes**

Além das pastas principais, existem outros componentes que abordam funcionalidades diversas:

- **BackgroundColor.jsx**: Altera a cor de fundo da página com base em interações do usuário.
- **DataRequest.jsx**: Realiza uma requisição de dados, podendo ser usada para simular a obtenção de informações de uma API.
- **Home.jsx**: Página inicial que reúne outros componentes e serve como ponto de entrada para o aplicativo.
- **ListFilter.jsx**: Permite filtrar uma lista de itens conforme a entrada do usuário.
- **SimpleCounter.jsx**: Um contador simples que incrementa e decrementa valores ao clicar em botões.
- **Timer.jsx**: Um componente que implementa um temporizador, iniciando e parando a contagem regressiva.
- **TimerWithInterval.jsx**: Similar ao Timer, mas com a adição de um intervalo configurável para execuções repetitivas.
- **ToDoList.jsx**: Implementa uma lista de tarefas (ToDo), onde o usuário pode adicionar e remover itens da lista.

## Instalação

Para rodar este projeto localmente, siga as etapas abaixo:

### 1. Criação do Projeto com Vite

Primeiro, você precisa criar um projeto React usando **Vite**, que é uma ferramenta moderna de build para projetos frontend. Para isso, execute os seguintes comandos:

1. **Crie o projeto com Vite**:
   ```bash
   npm create vite@latest nome-do-projeto --template react

Substitua `nome-do-projeto` pelo nome que deseja para o diretório do seu projeto.

2. **Acesse o diretório do projeto**:
   ```bash
   cd nome-do-projeto
   
### 2. Instalação das Dependências
Após criar o projeto com Vite, instale as dependências necessárias para o funcionamento do React:

1. **Instale as dependências do Vite e React**:
   ```bash
   npm install

### 3. Substituição do Código Fonte
Agora, você precisará substituir o conteúdo do diretório `src` do seu projeto pelo conteúdo do repositório.

1. **Clone o repositório**: Em um diretório separado, clone o repositório com as atividades React:
   ```bash
   git clone https://github.com/Kauansct/ReactJs-activities.git
   
2. **Substitua o conteúdo do diretório `src`**: Copie todos os arquivos e pastas dentro de `src` do repositório clonado e substitua o conteúdo da pasta `src` do seu projeto Vite recém-criado.

**Atenção**: Isso vai substituir o conteúdo padrão de `src` gerado pelo Vite, incluindo os arquivos de exemplo.

### 4. Rodando o Projeto
1. **Inicie o servidor de desenvolvimento**: Após substituir o código, inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   
2. **Acesse o projeto**: Abra o navegador e acesse http://localhost:5173 para ver o projeto em funcionamento.

## Dependências
Este projeto foi construído utilizando as seguintes dependências:

- **React**: A biblioteca principal para construção de interfaces de usuário.
- **React-DOM**: O pacote que serve para integrar o React com o DOM do navegador.
- **Vite**: A ferramenta de build rápida para projetos frontend.
- **Outras dependências**: Caso necessário, o projeto pode incluir outras bibliotecas como `react-router-dom` e `axios` para facilitar o desenvolvimento, dependendo dos componentes em uso.
