<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a> </p>

<h1 align="center">Farmácia - Gestão de Estoque</h1>

<p align="center"> <strong>Um projeto para gerenciar o estoque de uma farmácia, construído com o framework NestJS.</strong> </p>

📦 Bibliotecas Usadas
Aqui estão algumas das principais bibliotecas usadas neste projeto:

NestJS - Um framework progressivo para Node.js

TypeORM - ORM para TypeScript e JavaScript

SQLite - Banco de dados leve e autônomo

class-validator - Biblioteca para validação de objetos

class-transformer - Biblioteca para transformar objetos

🛠️ Linguagens
Este projeto utiliza as seguintes linguagens:

TypeScript - Principal linguagem de programação utilizada no projeto.

SQL - Usado para interação com o banco de dados SQLite.

🗂️ Estrutura das Pastas
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
🧪 Testes
O projeto inclui testes end-to-end (e2e) para garantir a funcionalidade das APIs. As etapas para executar os testes são:

Configuração dos Testes
Instalar as dependências do projeto:

bash
$ npm install
Executar os Testes
Para rodar os testes end-to-end, utilize o comando:

bash
$ npm run test:e2e

📚 Recursos
Documentação do NestJS

Canal no Discord

Cursos Oficiais

Ferramentas de Dev

Suporte Empresarial

Siga-nos no Twitter e LinkedIn

🤝 Suporte
Nest é um projeto open source licenciado pelo MIT. Ele cresce graças aos patrocinadores e ao suporte dos incríveis apoiadores. Se você gostaria de se juntar a eles, leia mais aqui.

🌐 Contato
Autor - Kamil Myśliwiec

Website - https://nestjs.com

Twitter - @nestframework

LinkedIn - Seu LinkedIn
