import { IsNotEmpty } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_categorias"})
export class Categoria {
  
    @PrimaryGeneratedColumn()    
    id: number
  
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string
  
    @UpdateDateColumn()
    data: Date
    
    @OneToMany(() => Produto, produto => produto.categoria)
    produtos: Produto[];
    
}