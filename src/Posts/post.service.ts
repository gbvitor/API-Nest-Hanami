import { Injectable } from '@nestjs/common';
import { Prisma, Posts } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.PostsWhereUniqueInput,
  ): Promise<Posts | null> {
    return this.prisma.posts.findUnique({
      where: postWhereUniqueInput,
    });
  }
  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostsWhereUniqueInput;
    where?: Prisma.PostsWhereInput;
    orderBy?: Prisma.PostsOrderByWithRelationInput;
  }): Promise<Posts[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.posts.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  //Cria um post
  async createPost(data: Prisma.PostsCreateInput): Promise<Posts> {
    return this.prisma.posts.create({
      data,
    });
  }

  //Retorna todos os posts
  async findAll(): Promise<Posts[]> {
    return this.prisma.posts.findMany();
  }

  //Retorna um post
  async findOne(id: number): Promise<Posts | null> {
    return this.prisma.posts.findUnique({
      where: {
        id: id,
      },
    });
  }

  //Atualiza um post
  async updatePost(params: {
    where: Prisma.PostsWhereUniqueInput;
    data: Prisma.PostsUpdateInput;
  }): Promise<Posts> {
    const { where, data } = params;
    return this.prisma.posts.update({
      data,
      where,
    });
  }

  //Deleta um post
  async deletePost(where: Prisma.PostsWhereUniqueInput): Promise<Posts> {
    return this.prisma.posts.delete({
      where,
    });
  }
}
