import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static apiGetRandomQuote() {
    return fetch('https://quoteslate.vercel.app/api/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        const { id, quote, author } = data;
        return new Quote(id, quote, author);
      })
      .catch((error) => console.log(error));
  }
}

export default RandomQuote;
