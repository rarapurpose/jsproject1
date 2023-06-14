const quotes = [
  {
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    author: "-Oprah Winfrey-",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "-Helen Keller-",
  },
  {
    quote: "In every moment, the world is changing into something else.",
    author: "-Haruki Murakami-",

  },
  {
    quote: "There is nothing as mysterious as a fact clearly described.",
    author: "-Ryunosuke Akutagawa-",
  },
  {
    quote: "There is nothing as mysterious as a fact clearly described.",
    author: "-Ryunosuke Akutagawa-",
  },
  {
    quote: "Believe you can, and you're halfway there.",
    author: "-Theodore Roosevelt-",
  },
  {
    quote: "What happens when people open their hearts? They get better.",
    author: "-Haruki Murakami-",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "-Steve Jobs-",
  },
  {
    quote: "Believe you can and you're halfway there..",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The harder the times, the more you need to face forward.",
    author: "-Akio Morita- ",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "-Norman Vaughan-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 
