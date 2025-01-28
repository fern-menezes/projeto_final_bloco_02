import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Testes dos Módulos Produto e Categoria', () => {

  let app: INestApplication;
  let produtoId: any;
  let categoriaId: any;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [__dirname + "./../src/**/entities/*.entity.ts"],
          synchronize: true,
          dropSchema: true,
        }),
        AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("00 - Deve Cadastrar uma Categoria", async () => {
    const resposta = await request(app.getHttpServer())
      .post('/categorias')
      .send({
        id: 1,
        titulo: 'Categoria 1'
      })
      .expect(201);

    categoriaId = resposta.body.id;
  });

  it("01 - Deve Cadastrar um Produto", async () => {
    const resposta = await request(app.getHttpServer())
      .post('/produtos')
      .send({
        id: 1,
        nome: 'Produto 1',
        preco: 10.0,
        estoque: 100,
        imagem: 'url_da_imagem.jpg',
        categoria: {
          id: categoriaId,
          titulo: 'Categoria 1'
        }
      });

    expect(resposta.status).toBe(201);

    produtoId = resposta.body.id;
  });
});
