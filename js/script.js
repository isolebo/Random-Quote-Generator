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
    source: "Nelson Mandela"
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
    citation: "Ferris Bueller's Day Off",
    year:     "1986"
  },
  { quote : "What we do in life echoes in eternity",
    source: "Maximus, Gladiator",
    year: "2000"
  }
]

/***
 * `getRandomQuote` function
***/

    function getRandomQuote(){ //this function gets the quote from the object array
    
      let randomQuote = Math.floor(Math.random() * (quotes.length)); //generates a random  number of quote between the first 
                                                                       //and last element
      return quotes[randomQuote]; // returns the quotes in random as an object
    }
    console.log(quotes);  //prints to the console the array off quotes
/***
 * `printQuote` function
***/
    function printQuote(){ //this function pints the quotes
        let printQuote = getRandomQuote();//it sets the variable to call the getRandomQuote function
        let html = " ";
        var message = "<p class = quote "> + quotes.quote + "</p>" + "<p class ='source'" + quotes.source + "</p";
        document.getElementById('quote-box').innerHTML = message;
        html += '<p class = "quote">' + printQuote.quote + '</p>';//the quote printout
        html += '<p class = "source">' + printQuote.source + '</p>'//the source printout

        if("citation" in printQuote ){//checks to see if  the object has a year, and it prints to the page
          html += '<span class = "citation" >' + printQuote.citation + '</span>' + '</p>';
      }
           if("year" in printQuote ){ //checks to see if  the object has a year, and it prints to the page
           html += '<span class = "year" >' + printQuote.year+ '</span>' + '</p>';
      }
            document.getElementById("quote-box").innerHTML=html;
    }
    printQuote();//calls the function and outputs the quotes 
    console.log(printQuote());
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
