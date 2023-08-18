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
    citation:"The principles of psychology",
    year:"1890"
  },
  {
    quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston S. Churchill",
    citation:"",
    year:""
  },
  {
    quote:"I never dreamed about success. I worked for it",
    source:"Estée Lauder",
    citation:"",
    year:""
  },
  {
    quote:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    source:"Winston S. Churchill",
    citation:"",
    year:""
  },
  {
    quote:"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    source:"Steve Jobs",
    citation:"",
    year:""
  },
  {
    quote:"Experience is a hard teacher because she gives the test first, the lesson afterwards.",
    source:"Vernon Sanders Law",
    citation:"",
    year:""
  },
  {
    quote:"Setting goals is the first step in turning the invisible into the visible.",
    source:"Tony Robbins",
    citation:"Unlimited Power",
    year:"1986"
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

  //display the message
  message += "</p>";
  document.getElementById('quote-box').innerHTML = message;
}



//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);