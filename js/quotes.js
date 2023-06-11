const quotes = [
  {
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "In every moment, the world is changing into something else.",
    author: "Haruki Murakami",

  },
  {
    quote: "There is nothing as mysterious as a fact clearly described.",
    author: "Ryunosuke Akutagawa",
  },
  {
    quote: "There is nothing as mysterious as a fact clearly described.",
    author: "Ryunosuke Akutagawa",
  },
  {
    quote: "The world is full of good and evil, but words are capable of changing the world.",
    author: "Natsume Soseki",
  },
  {
    quote: "The courage to continue chasing your dreams becomes the power to change the future.",
    author: "Forrest Gump",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    author: "Forrest Gump",
  },
  {
    quote: "The harder the times, the more you need to face forward.",
    author: "Akio Morita ",
  },
  {
    quote: "You set your own limits, and you can surpass them by constantly challenging yourself.",
    author: "Hiroshi Y",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 
