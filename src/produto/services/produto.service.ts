import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({

            relations:{
                categoria: true
            }
        });
    }

    async findById(id: number): Promise<Produto> {

        const produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations:{
                categoria: true
            }
        });
        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations:{
                categoria: true
            }
        })
    }

    async create(produto: Produto): Promise<Produto> {
        const produtoExistente = await this.produtoRepository.findOne({
            where: {
                id: produto.id
            }
        });
        if (produtoExistente) {
            throw new HttpException('Produto já existe!', HttpStatus.BAD_REQUEST);
        }

        return await this.produtoRepository.save(produto);
    }


    async update(produto: Produto): Promise<Produto> {
        await this.findById(produto.id);
        return await this.produtoRepository.save(produto);

    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.produtoRepository.delete(id);

    }

}
