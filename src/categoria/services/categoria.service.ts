import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({});
    }

    async findById(id: number): Promise<Categoria> {

        const categoria = await this.categoriaRepository.findOne({
            where: {
                id
            }
        });

        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
    }

    async findByTitulo(titulo: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            }
        })
    }

    async create(categoria: Categoria): Promise<Categoria> {
      const categoriaExistente = await this.categoriaRepository.findOne({
          where: {
              id: categoria.id
          }
      });
      if (categoriaExistente) {
          throw new HttpException('Categoria já existe!', HttpStatus.BAD_REQUEST);
      }
  
      return await this.categoriaRepository.save(categoria);
  }
  

    async update(categoria: Categoria): Promise<Categoria> {
        await this.findById(categoria.id);                
        return await this.categoriaRepository.save(categoria);
    
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.categoriaRepository.delete(id);

    }

}
