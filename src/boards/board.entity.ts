import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

@Entity() //아래 엔티티로 지정
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() //기본키 지정
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
