const newQuotebtnEl = document.querySelector(".generate-quote");
const QuoteEl = document.querySelector(".quote");
const url = "https://type.fit/api/quotes";
newQuotebtnEl.addEventListener("click", getQuote);

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  QuoteEl.innerHTML = data[1].text;
}
