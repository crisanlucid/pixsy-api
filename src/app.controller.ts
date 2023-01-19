import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getPhotos() {
    return this.appService.getPhotos();
  }
}
