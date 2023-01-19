import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

import * as pactum from 'pactum';

describe('AppController (e2e)', () => {
  const PORT = 3001;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await app.listen(PORT);
    pactum.request.setBaseUrl(`http://localhost:${PORT}`);
  });

  afterAll(() => {
    app.close();
  });

  describe('Photos', () => {
    it('/api/v1/products (GET) - should return a collection of photos', () => {
      return pactum
        .spec()
        .get('/api/v1/products')
        .expectStatus(200)
        .expect((ctx) => {
          const photos = ctx.res.json;
          expect(photos['data']).toHaveLength(90);
        });
    });
  });
});
