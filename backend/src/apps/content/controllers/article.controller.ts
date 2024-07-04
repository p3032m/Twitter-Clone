import { Controller, Get, UseGuards } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { JwtAuthGuard } from 'src/apps/auth/gaurds/jwt-auth.guard';

@Controller('tweets')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllArticles() {
    const articles = await this.articleService.getArticles();
    return { message: 'Fetched Successfully', data: articles };
  }
}
