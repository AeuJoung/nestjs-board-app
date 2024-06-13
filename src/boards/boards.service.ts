import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() //해당 서비스 인스턴스를 앱 전체 범위의 싱글톤으로 만들어줌
export class BoardsService {
  private boards: Board[] = [];

  getAllBorads(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }
  /* dto 사용 x
  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title, //title : title 을 이렇게 압축 가능
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board; //어떤 게시물 정보가 만들어졌는지 리턴해줌
  }
  */
}
