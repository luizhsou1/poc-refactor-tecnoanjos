<h1 align="center"> POC Refactor tecnoanjos </h1>

<p align="justify">Poc feita com intuito de propor uma nova arquitetura para projeto Tecnoanjos</p>

## 👨‍💻 Desenvolvedor

- Luiz <luizhsou1@gmail.com>

## ✋ Pré-requisitos

- Node.js e NPM instalado

## 🚀 Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Jest](https://jestjs.io/)

## 🔥 Instalação e execução 

1. Faça um clone desse repositório;
2. Entre na pasta `cd poc-refactor-tecnoanjos`;
3. Renomeie o arquivo `.env.example` para `.env`
4. Rode `docker up -d`
5. Rode `npm i` para instalar as dependências;
6. Rode `npm run dev` para executar o projeto;

## 📜 Scripts

Rode `npm run <script name>`:

- `dev`: Roda a aplicação em desenvolvimento, já libera a porta 9222 para debug
- `test`: Roda todos os testes
- `test:verbose`: Roda todos os testes de forma detalhada
- `test:unit`: Roda apenas os testes unitários (No futuro terá `test:integration` e esse comando fará mais sentido)
- `test:cov`: Roda cobertura de testes da aplicação, irá criar um html dentro de `coverage/lcov-report` caso queira visualizar no browser
- `test:clear`: Limpa cache de testes (ideal para grandes refatorações)

# ⚡️ Funcionalidades

1. [Registrar Técnico](./register-technician.md)

## ⚠️ Observações

1. Arquitetura foi inicialmente baseada no **Clean Architecture**, porém foi repensada, pois aumentaria significamente a carga cognitiva do código, trazendo muitas abstrações e padrões ao código, com a vantagem de ser mais fácil futuras mudanças, porém por hora a equipe de desenvolvimento não tem esses conhecimentos.
2. Caso deseje debugar **utilizando o VS Code**, já acompanha um arquivo de configuração para dar um attach no processo em execução, basta antes ter rodado `npm run dev`, caso use outra IDE, basta configurar para escutar o processo que rode na porta 9223.
3. Cobertura de testes está apenas no caso de uso  **Registrar Técnico**, porém com o tempo outras camadas também devem ser cobertas por testes, inclusive testes de integração.
4. Foi configurado o linter para utilizar as configurações usadas pelo **Airbnb**, com algumas modificações que gosto de usar nos meus projeto.
5. Caso deseje testar o projeto, sem configurar na sua máquina, comunique com o serviço criado no heroku, usando a seguinte url: 