require('dotenv').config();
const { getMeme, getMemes } = require('../db/data-helpers'); 

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

  it('gets all memes', async() => {
    const memes = await getMemes();
    
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by its id', async() => {
    const meme = await getMeme();

    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });

  it('updates a meme', async() => {
    const meme = await getMeme();

    return request(app)
      .put(`/api/v1/memes/${meme._id}`)
      .send({ top: 'some new string' })
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
          top: 'some new string'
        });
      });
  });

  it('deletes a meme', async() => {
    const meme = await getMeme();

    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme); 
      });
  });
});
