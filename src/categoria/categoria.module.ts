import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Module } from "@nestjs/common";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controller/categoria.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [],
})

export class CategoriaModule { }