import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBorads();
  }

  @Post('/')
  @UsePipes(ValidationPipe) //validationPipe : nest에서 미리 만들어놓은 유효성 체크 파이프.
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardService.updateBoardStatus(id, status);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    //매개변수 데코레이터는 매개변수에 메타 데이터를 추가할 때 사용한다.
    //nest는 ts의 매개변수 데코레이터 기능일 활용해 요청값을 쉽게 받을 수 있게 만들었다.
    return this.boardService.getBoardById(id);
  }
  /* dto 안쓰는 방식
  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardService.createBoard(title, description);
  }
    */
}
