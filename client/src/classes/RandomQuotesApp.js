import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.choseRandomQuoteBtn = document.getElementById(
      'chose-random-quote-btn'
    );
    this.apiRandomQuitePublicBtn = document.getElementById(
      'api-random-quote-public-btn'
    );
    this.apiRandomQuiteOwnBtn = document.getElementById(
      'api-random-quote-own-btn'
    );
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

  async randomQuoteViaApiPublicHandler() {
    this.changeCurrentQuote(await RandomQuote.apiGetRandomPublicQuote());
  }

  async randomQuoteViaApiOwnHandler() {
    this.changeCurrentQuote(await RandomQuote.apiGetRandomOwnQuote());
  }

  init() {
    this.choseRandomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.apiRandomQuitePublicBtn.addEventListener('click', () =>
      this.randomQuoteViaApiPublicHandler()
    );
    this.apiRandomQuiteOwnBtn.addEventListener('click', () =>
      this.randomQuoteViaApiOwnHandler()
    );
  }
}

export default RandomQuotesApp;
