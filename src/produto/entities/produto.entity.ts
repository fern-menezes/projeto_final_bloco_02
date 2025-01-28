import { IsNotEmpty } from "class-validator";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto {
  
    @PrimaryGeneratedColumn()    
    id: number
  
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    estoque: number

    @IsNotEmpty()
    preco: number

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    imagem: string
  
   @ManyToOne(() => Produto, (produto) => produto.categoria, {
     onDelete: 'CASCADE'
   })
    categoria: Categoria
}