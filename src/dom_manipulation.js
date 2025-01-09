import { processQuotes } from "./index.js";

// Render quotes on the page
export async function renderQuotes() {
  const quotes = await processQuotes();

  if (!quotes.length) {
    console.warn("No quotes to display.");
    return;
  }

  const quoteBody = document.querySelector(".quoteBody");
  const quoteAuthor = document.querySelector(".quoteAuthor");

  if (quoteBody && quoteAuthor) {
    const firstQuote = quotes[0];
    quoteBody.textContent = firstQuote.body;
    quoteAuthor.textContent = `— ${firstQuote.author}`;
  } else {
    console.warn("Required DOM elements not found.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuotes();
});
