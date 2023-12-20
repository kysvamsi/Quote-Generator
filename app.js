// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { quote: "\"The only limit to our realization of tomorrow will be our doubts of today.\"", person: "Franklin D. Roosevelt" },
    { quote: "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"", person: "Winston S. Churchill" },
    { quote: "\"In three words I can sum up everything I've learned about life: it goes on.\"", person: "Robert Frost" },
    { quote: "\"The only way to do great work is to love what you do.\"", person: "Steve Jobs" },
    { quote: "\"Believe you can and you're halfway there.\"", person: "Theodore Roosevelt" },
    { quote: "\"The only thing we have to fear is fear itself.\"", person: "Franklin D. Roosevelt" },
    { quote: "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"", person: "Buddha" },
    { quote: "\"You miss 100% of the shots you don't take.\"", person: "Wayne Gretzky" },
    { quote: "\"Strive not to be a success, but rather to be of value.\"", person: "Albert Einstein" },
    { quote: "\"The best way to predict the future is to create it.\"", person: "Peter Drucker" },
    { quote: "\"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.\"", person: "Charles Darwin" },
    { quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"", person: "Nelson Mandela" },
    { quote: "\"The only source of knowledge is experience.\"", person: "Albert Einstein" },
    { quote: "\"I have not failed. I've just found 10,000 ways that won't work.\"", person: "Thomas A. Edison" },
    { quote: "\"Life is what happens when you're busy making other plans.\"", person: "John Lennon" },
    { quote: "\"Success usually comes to those who are too busy to be looking for it.\"", person: "Henry David Thoreau" },
    { quote: "\"Your time is limited, don't waste it living someone else's life.\"", person: "Steve Jobs" },
    { quote: "\"In the end, we will remember not the words of our enemies, but the silence of our friends.\"", person: "Martin Luther King Jr." },
    { quote: "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\"", person: "Ralph Waldo Emerson" },
    { quote: "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"", person: "Albert Einstein" }
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})