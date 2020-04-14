const mongoose = require('mongoose');
const Meme = require('./Meme');

describe('Meme model', () => {
  it('has top, image and bottom fields', () => {
    const meme = new Meme({
      top: 'some string',
      image: 'a url',
      bottom: 'the other half of the meme string'
    });

    expect(meme.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      top: 'some string',
      image: 'a url',
      bottom: 'the other half of the meme string'
    });
  });
});
