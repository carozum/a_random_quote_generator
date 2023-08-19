/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
author - Caroline Zumbiehl
******************************************/

// create an array to store the quotes
const quotes = [
  {
    quote: "Act as if what you do makes a difference. It does.",
    source: "William James",
    citation: "The principles of psychology",
    year: "1890",
    tags: ["success", "life"]
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston S. Churchill",
    citation: "",
    year: "",
    tags: ["success"]
  },
  {
    quote: "I never dreamed about success. I worked for it",
    source: "Estée Lauder",
    citation:"",
    year: "",
    tags: ["success", "dreams"]
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    source: "Winston S. Churchill",
    citation: "",
    year: "",
    tags: ["success", "difficulty"]
  },
  {
    quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    source: "Steve Jobs",
    citation: "",
    year: "",
    tags: ["work", "vision"]
  },
  {
    quote: "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
    source: "Vernon Sanders Law",
    citation: "",
    year: "",
    tags: ["work", "life"]
  },
  {
    quote: "Setting goals is the first step in turning the invisible into the visible.",
    source: "Tony Robbins",
    citation: "Unlimited Power",
    year: "1986",
    tags: ["life", "goal"]
  }
];


/**
 * Function that create a random number, and use that random number to return a random quote object from the quotes arr
 * @param {array} quotes - array of quote objects
 * @return {object} random quote
 */

function getRandomQuote(quotes){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/**
 * generate random number between 0 and 255
 */
function randomNumber(num){
  return Math.floor(Math.random() * (num+1));
}

/**
 * change the color of the background and of the font
 * 
 */
function changeColors(){
  const red = randomNumber(255);
  const green = randomNumber(255);
  const blue = randomNumber(255);
  document.querySelector("body").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //document.querySelector("body").style.color = `rgb(${255-red}, ${255-green}, ${255-blue})`;
}


/**
 * function that displays a random quote each time a button is clicked
 * @param {array} quotes - array of quote objects
 * displays in html.
 */

function printQuote(){
  // select a random quote using getRandomQuote() function
  const currentQuote = getRandomQuote(quotes);
  let message = `
    <p class="quote">${currentQuote.quote}</p>
    <p class="source">${currentQuote.source} 
  `;

  // check if the quote has a citation property
  if (currentQuote.citation){
    message += `<span class="citation">${currentQuote.citation} </span> `;
  } 

  // check if the quote has a year property
  if (currentQuote.year){
    message += `<span class="year">${currentQuote.year} </span> ` ;
  }

  //check if the quote has tags
  if (currentQuote.tags){
    for (let i=0; i < currentQuote.tags.length; i++){
      message += `<span class="tags"> #${currentQuote.tags[i]} </span> `
    }
  }

  //change the changeColors
  changeColors();

  //display the message
  message += "</p>";
  document.getElementById('quote-box').innerHTML = message;
}

// print a new quote at regular interval
setInterval(printQuote, 5000);

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);