

//명언에 대한 object로 구성된 배열 
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




//Math.random() : 0 과 1 사이 랜덤한 숫자를 제공
// (ex) 0 ~ 10 사이의 랜덤한 숫자 얻기 --> Math.random()*10
// (ex) 0 ~ 100 사이의 랜덤한 숫자 얻기 --> Math.random()*100



//Math.round(): 특정한 소수점자리에서 반올림한 결과를 제공
// (ex) Math.round(1.4) --> 1
// (ex) Math.round(1.5) --> 2
// (ex) Math.round(1.6) --> 2



//Math.ceil():  특정한 소수점자리에서 무조건 올림한 결과를 제공
// (ex) Math.ceil(1.0) --> 1
// (ex) Math.ceil(1.01) --> 2
// (ex) Math.ceil(1.3) --> 2
// (ex) Math.ceil(1.7) --> 2



//Math.floor():  특정한 소수점자리에서 무조건 내림한 결과를 제공
// (ex) Math.floor(1.0) --> 1
// (ex) Math.floor(1.81) --> 1
// (ex) Math.floor(1.9) --> 1
// (ex) Math.floor(2.0) --> 2





//명언 랜덤 출력 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random()*quotes.length)]);
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;



