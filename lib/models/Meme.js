const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  top: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bottom: {
    type: String,
    required: true
  } 
});

module.exports = mongoose.model('Meme', schema);
