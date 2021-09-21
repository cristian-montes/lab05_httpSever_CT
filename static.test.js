import request from 'supertest';
import { readFile } from 'fs/promises';
import app from './lib/app.js';

describe('get static file routes', () => {
  it('should return index.html from GET /', async () => {
    const [res, index]  = await Promise.all([
      request(app).get('/'),
      readFile('./public/css/main.css', 'utf-8')
    ]);
    expect(res.text).toEqual(index);
  });
});
