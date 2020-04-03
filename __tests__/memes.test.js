require('dotenv').config();
require('../db/data-helpers'); 

const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'some string',
        image: 'a url',
        bottom: 'the other half of the meme string'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'some string',
          image: 'a url',
          bottom: 'the other half of the meme string',
          __v: 0
        });
      });
  });
});
