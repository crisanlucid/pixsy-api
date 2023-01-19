import { Injectable } from '@nestjs/common';
import * as mockResponse from './assets/photos.json';

@Injectable()
export class AppService {
  async getPhotos() {
    return new Promise((resolve) =>
      setInterval(() => resolve({ data: mockResponse?.photos }), 1000),
    );
  }
}
