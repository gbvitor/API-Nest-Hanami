import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './Posts/post.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, PostModule],
})
export class AppModule {}
