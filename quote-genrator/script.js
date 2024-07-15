const newQuotebtnEl = document.querySelector(".generate-quote");
const QuoteEl = document.querySelector(".quote");
const AuthorEl = document.querySelector(".author");
const tweetEl = document.querySelector(".tweet");
const url = "https://type.fit/api/quotes";
const tweetUrl = "http://twitter.com/intent/tweet?text=";
let i = 0;

newQuotebtnEl.addEventListener("click", getQuote);

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();

  if (i >= data.length) {
    i = 0;
  }

  const quoteText = data[i].text;
  let author = data[i].author;

  author = author.replace(", type.fit", "");

  QuoteEl.innerHTML = `"` + quoteText + `"`;
  AuthorEl.innerHTML = author;

  i++;
}

tweetEl.addEventListener("click", () => {
  window.open(tweetUrl + QuoteEl.innerHTML + " " + " - " + AuthorEl.innerHTML);
});

getQuote();
