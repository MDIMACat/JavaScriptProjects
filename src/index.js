import apiKey from "./config/config.js";

const apiUrl = "https://favqs.com/api/quotes";

const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token token=${apiKey}`,
  },
};

export async function fetchQuotes() {
  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching quotes: ${error.message}`);
    return null;
  }
}

export async function processQuotes() {
  const quoteArray = [];
  const data = await fetchQuotes();

  if (data && data.quotes) {
    for (let i = 0; i < data.quotes.length; i++) {
      let quote = data.quotes[i].body;
      let author = data.quotes[i].author;

      quoteArray.push({
        body: quote,
        author: author,
      });
    }
  } else {
    console.warn("No quotes available in the response.");
  }

  return quoteArray;
}
