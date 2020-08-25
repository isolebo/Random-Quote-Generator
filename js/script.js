/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { quote : "The greatest glory lies not in  never falling, but in rising every time we fall",
    source: "Nelson Mandel"
  },
  { quote : "The only impossible journey is the one you never begin",
    source: "Tony Robbins"
  },
  { quote : "Whoever is happy will make others happy too",
    source: "Anne Frank"
  },
  { quote : "A man's true wealth is the good he does in the world",
    source: "Khalil Gibran"
  },
  { quote : "Life moves pretty fast. if you don't and look around once ina while, you could miss it",
    source: "Ferris Bueller",
    citation: "Ferris Bueller's Day Off"
  },
  { quote : "What we do in life echoes in eternity",
    source: "Maximus,Gladiator",
    year: 2000
  }
]

/***
 * `getRandomQuote` function
***/
// function getRandomQuote(){
//   
    function getRandomQuote(){//
    
      const randomQuote = Math.floor(Math.random() * (quotes.length)); //generates a random  number of quote between the first 
                                                                       //and last element
      return quotes[randomQuote]; // returns the quotes in random as an object
    }

/***
 * `printQuote` function
***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);
