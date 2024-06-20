import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  providers: [BoardsService],
})
export class AppModule {}
