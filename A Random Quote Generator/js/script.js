/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array: stores an array of quote objects. 
***/
const quotes = [
  {
    quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", 
    source: "Albert Einstein", 
    citation: "", 
    year: "1929",
    tags: ["1929", "imagination", "inspirational", "viereck-interview"]
  },
  {
    quote: "There is no greater agony than bearing an untold story inside you.", 
    source: "Maya Angelou", 
    citation: "I Know Why the Caged Bird Sings", 
    year: "1970",
    tags: ["1970", "inspirational", "stories", "writing"]
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.", 
    source: "Helen Keller", 
    citation: "", 
    year: "",
    tags: ["inspirational"]
  },
  {
    quote: "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.", 
    source: "Stephen Chbosky", 
    citation: "The Perks of Being a Wallflower", 
    year: "",
    tags: ["charlie", "favourite-books", "inspirational", "sad", "soul-searching", "wallflower"]
  },
  {
    quote: "Everything you can imagine is real.", 
    source: "Pablo Picasso", 
    citation: "", 
    year: "",
    tags: ["art", "imagination", "inspirational", "life"]
  }
]


/***
 * `randomRBG` function: will randomly return a RGB value.
***/
function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}


/***
 * `getRandomQuote` function: will randomly select a quote object from quotes based on the index.
***/
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length);
  console.log(randomNumber)
  return quotes[randomNumber]
}


/***
 * `printQuote` function: will print the randomly selected quote and change the page background color to the random rgb value.
***/
function printQuote() {  
  let quote = "";
  let html = "";
  const randomValue = () => Math.floor(Math.random() * 256);
  quote = getRandomQuote();
  console.log(quote)
  html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `
  if (quote.citation !== ""){
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year !== ""){
    html += `<span class="year">${quote.year}</span>`;
  }
  html += "</p>";
  if (quote.tags.length !== 0){
    html += `<p class="tags">tags: ${quote.tags.join(", ")}</span>`;
  }
  document.getElementById("quote-box").innerHTML = html; 
  document.body.style.backgroundColor = `${randomRGB(randomValue)}`;
}


printQuote(); //sets the initial quote and page background rgb that is displayed.


/***
 * setInterval: The setInterval() method calls a function at specified intervals (in milliseconds). - w3schools.com
 * Code sample from Stack Overflow.
***/
setInterval(function(){
  printQuote()
}, 15000)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);