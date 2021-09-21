import request from 'supertest';
import { readFile } from 'fs/promises';
import app from './lib/app.js';
import jest from 'jest'


describe('get static file routes', () => {
  it('should return index.html from GET /', async () => {
    const [res, index]  = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8')
    ]);
    expect(res.text).toEqual(index);
  });

  it('should return main.css from GET /', async () => {
  
    const [res, index]  = await Promise.all([
      request(app).get('/css/main.css'),
      readFile('./public/css/main.css', 'utf-8')
    ]);
    expect(res.text).toEqual(index);
  });



});
