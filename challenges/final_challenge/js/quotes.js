


const quotes = [
    {
    quote:"There are better starters than me but I’m a strong finisher.",
    author:"Usain Bolt"
},
{
    quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
    author:"Michael Jordan"
}, 
{
    quote:"If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author:"Angelina Jolie"
},  
{
    quote:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
},
{
    quote:"In order to succeed, we must first believe that we can.",
    author:"Nikos Kazantzakis"
},
{
    quote:"Do not try to be original, just try to be good.",
    author:"Paul Rand"
},
{
    quote:"Only I can change my life. No one can do it for me. ",
    author:"Carol Burnett"
},
{
    quote:"The longest night must end.",
    author:"Victor Marie Hugo"
},
{
    quote:"Remember Why You Started",
    author:"hyomin"
},
{
    quote:"The greatest mistake you can make in life is to be continually fearing you will make one.",
    author:"Elbert Hubbard"
}];




const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random()*quotes.length)]);
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;






