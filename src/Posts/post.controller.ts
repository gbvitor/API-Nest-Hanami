import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Prisma, Posts } from '@prisma/client';

@Controller('Posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() data: Prisma.PostsCreateInput): Promise<Posts> {
    try {
      return await this.postService.createPost(data);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Post não pode ser criado',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: e,
        },
      );
    }
  }

  @Get()
  async findAll(): Promise<Posts[]> {
    try {
      return await this.postService.findAll();
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Nenhum Post encontrado',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e,
        },
      );
    }
  }
  @Patch(':id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.PostsUpdateInput,
  ): Promise<Posts> {
    try {
      return await this.postService.updatePost({ where: { id }, data });
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Post não pode ser atualizado',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: e,
        },
      );
    }
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
    try {
      return await this.postService.deletePost({ id });
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Post não pode ser deletado',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: e,
        },
      );
    }
  }
}
