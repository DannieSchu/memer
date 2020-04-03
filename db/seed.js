const chance = require('chance').Chance();

const Meme = require('../lib/models/Meme');

// Seed database with random test data
module.exports = async({ memesToCreate = 10 } = {}) => {

  const meme = chance.sentence({ words: 5 });

  const gnomeURLs = ['https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/02/lawn-gnome.jpg', 'https://i2-prod.dailyrecord.co.uk/incoming/article1918891.ece/ALTERNATES/s615/IKEA-Gnomes.jpg', 'https://images.unsplash.com/photo-1517968999727-292e5049d12a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/photo-1509409836982-c0d71b087fd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'https://images.unsplash.com/photo-1575167730400-dad23e0a30a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'https://images.unsplash.com/photo-1550860056-6f1236dfed8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 'https://images.unsplash.com/photo-1528659432556-884cfe1480ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80', 'https://images.unsplash.com/photo-1518616480984-3a64f08a8374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', ''];
  
  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: meme.slice(0, 8),
    image: chance.pickone(gnomeURLs),
    bottom: meme.slice(9)
  })));
};
