const searchButton = document.getElementById("search-button");
const queryInput = document.getElementById("query-input");
const articleListEl = document.getElementById("article-list");

searchButton.addEventListener("click", () => {
  const query = queryInput.value;
  if (query === "") return;

  callAPI(query);
});

async function callAPI(query) {
  const responses = await fetch(`http://localhost:5000/get-article/${query}`);

  const data = await responses.json();

  // clear any elements that are there
  articleListEl.innerHTML = "";

  for (const article of data) {
    // Create the h3 element
    let h3 = document.createElement("h5");

    // Set the text content of the h3 element
    h3.textContent = article;

    // Place articles in the web page
    articleListEl.appendChild(h3);
  }
}
