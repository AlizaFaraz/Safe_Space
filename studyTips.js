document.addEventListener('DOMContentLoaded', () => {
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');

  async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quoteText.textContent = `"${data.content}"`;
      quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
      quoteText.textContent = "An error occurred while fetching the quote.";
      quoteAuthor.textContent = "";
    }
  }

  newQuoteButton.addEventListener('click', fetchQuote);

  // Fetch a quote on initial load
  fetchQuote();
});
