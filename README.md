# Wiki de Repositórios GitHub

Uma aplicação para buscar e gerenciar repositórios do GitHub de forma simples e intuitiva. Digite o repositório desejado e adicione à sua lista pessoal, com persistência de dados no navegador.

## Stacks Utilizadas

- React 18
- Styled Components
- Axios
- GitHub API

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Como Usar

### Iniciar o servidor de desenvolvimento

```bash
npm start
```

A aplicação abrirá em [http://localhost:3000](http://localhost:3000) no seu navegador.

### Construir para produção

```bash
npm run build
```

Gera uma versão otimizada pronta para deploy na pasta `build`.

### Executar testes

```bash
npm test
```

Inicia o test runner em modo interativo.

## Funcionalidades

- Buscar repositórios pelo nome (ex: facebook/react, microsoft/vscode)
- Adicionar repositórios à lista pessoal
- Remover repositórios da lista
- Persistência automática com localStorage
- Design responsivo com tema escuro
- Validação de duplicatas
- Mensagens de erro informativas
- Suporte a buscar pressionando Enter

## Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   ├── Input/
│   └── ItemRepo/
├── hooks/
│   └── useRepositories.js
├── pages/
│   └── App.js
├── services/
│   └── api.js
├── styles.js
└── index.js
```

## Custom Hook - useRepositories

O hook centraliza toda a lógica de gerenciamento de repositórios, incluindo:

- Busca na API do GitHub
- Armazenamento em localStorage
- Adição e remoção de repositórios
- Validação de duplicatas
- Tratamento de erros

## Contribuindo

Sinta-se livre para fazer fork, criar branches e enviar pull requests com melhorias.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# Wiki-de-Reposit-rios-do-GitHub-Com-React"  
