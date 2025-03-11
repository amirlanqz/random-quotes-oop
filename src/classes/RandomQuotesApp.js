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

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async randomQuoteViaApiHandler() {
    this.changeCurrentQuote(await RandomQuote.apiGetRandomQuote());
  }

  init() {
    this.choseRandomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.apiRandomQuiteBtn.addEventListener('click', () =>
      this.randomQuoteViaApiHandler()
    );
  }
}

export default RandomQuotesApp;
