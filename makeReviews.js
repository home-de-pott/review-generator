// import { LoremIpsum } from 'lorem-ipsum';
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const fs = require('fs');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 12,
    min: 4,
  },
  wordsPerSentence: {
    max: 10,
    min: 2,
  },
});

class Review {
  constructor() {
    this.userName = lorem.generateWords(1);
    this.date = new Date(Math.random() * Date.now()).toDateString();
    this.header = lorem.generateSentences(1);
    this.review = lorem.generateParagraphs(1);
    this.verifiedPurchase = this.randobool();
    this.recommend = this.randobool();
    this.helpfulCount = Math.floor(Math.random() * 50);
    this.notHelpfulCount = Math.floor(Math.random() * 50);
  }
  randobool() {
    return Math.floor(Math.random() * 10) % 2 === 0 ? false : true;
  }
}

const generateReviews = function(n) {
  const reviews = [];
  for (let i = 0; i < n; i++) {
    reviews.push(new Review());
  }
  fs.writeFile('reviews.json', JSON.stringify(reviews), 'utf-8', err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

generateReviews(100);

module.exports = generateReviews;
