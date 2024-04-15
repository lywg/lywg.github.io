const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J.R.R Tolkein",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "It is better to have loved and lost than never to have loved at all",
    author: "Alfred Lord Tennyson",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Think like a queen. A queen is not afraid of to fail.",
    author: "Oprah Winfrey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
