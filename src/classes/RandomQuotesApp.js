import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.choseRandomQuoteBtn = document.getElementById(
      'chose-random-quote-btn'
    );
    this.apiRandomQuiteBtn = document.getElementById('api-random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteApi() {
    RandomQuote.apiGetRandomQuote().then((quote) => {
      this.changeCurrentQuote(quote);
    });
  }

  init() {
    this.choseRandomQuoteBtn.addEventListener('click', () =>
      this.getRandomQuote()
    );
    this.apiRandomQuiteBtn.addEventListener('click', () =>
      this.getRandomQuoteApi()
    );
  }
}

export default RandomQuotesApp;
