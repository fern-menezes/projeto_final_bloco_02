<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a> </p>

<h1>Farmácia - Gestão de Estoque</h1>

<p> <strong>Um projeto para gerenciar o estoque de uma farmácia, construído com o framework NestJS.</strong> </p>

<h2>📦 Bibliotecas Usadas</h2>
Aqui estão algumas das principais bibliotecas usadas neste projeto:

NestJS - Um framework progressivo para Node.js

TypeORM - ORM para TypeScript e JavaScript

SQLite - Banco de dados leve e autônomo

class-validator - Biblioteca para validação de objetos

class-transformer - Biblioteca para transformar objetos

<h2>🛠️ Linguagens</h2>
Este projeto utiliza as seguintes linguagens:

TypeScript - Principal linguagem de programação utilizada no projeto.

SQL - Usado para interação com o banco de dados SQLite.

<h2>🗂️ Estrutura das Pastas</h2>
A estrutura das pastas do projeto é organizada da seguinte forma:

plaintext
/src
  /auth
    - auth.module.ts
    - auth.service.ts
    - jwt.strategy.ts
  /categoria
    - categoria.controller.ts
    - categoria.module.ts
    - categoria.service.ts
    /entities
      - categoria.entity.ts
  /produto
    - produto.controller.ts
    - produto.module.ts
    - produto.service.ts
    /entities
      - produto.entity.ts
  - app.module.ts
  - main.ts
/test
  - produto.e2e-spec.ts
  - jest-e2e.json

<h2>🧪 Testes</h2>
O projeto inclui testes end-to-end (e2e) para garantir a funcionalidade das APIs. As etapas para executar os testes são:

Configuração dos Testes
Instalar as dependências do projeto:

bash
$ npm install
Executar os Testes
Para rodar os testes end-to-end, utilize o comando:

bash
$ npm run test:e2e

<h2>📚 Recursos</h2>
Documentação do NestJS
Canal no Discord
Cursos Oficiais
Ferramentas de Dev

<h2>🌐 Contato</h2>
Website - https://nestjs.com
Twitter - @nestframework
LinkedIn - [https://www.linkedin.com/in/fern-menezes/]
