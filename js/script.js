/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
let quotes = [
  { quote : "The greatest glory lies not in  never falling, but in rising every time we fall",
    source: "Nelson Mandela"
  },
  { quote : "The only impossible journey is the one you never begin",
    source: "Tony Robbins"
  },
  { quote: "They destroy the man I was, but then I was reborn, and this time I came out breathing fire",
    source: "Akecheta",
    citation: "Westworld: Season 2",
    year: "2016"

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
  },
  { quote: "When you play the game of thrones, you win or die",
    source: "Cersei Lannister",
    citation: "Game of Thrones: Season 1; Episode 1",
    year: "2011"

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
    function printQuote(){ //this function pints the quotes according to certain conditions

        let newQuote = getRandomQuote();//calls the getRandomQuote function
        let html = " ";//sets the html variAble to empty strings initially
        html += '<p class = "quote">' + newQuote.quote + '</p>';//the quote printout
        html += '<p class = "source">' + newQuote.source ;//the source printout

        if("citation" in newQuote ){//checks to see if  the object has a year, and it prints to the page
          html += '<span class = "citation" >' + newQuote.citation  ;
      }
           if("year" in newQuote ){ //checks to see if  the object has a year, and it prints to the page
           html += '<span class = "year" >' + newQuote.year + '</span>'+ '</p>';
      }
      
            document.getElementById("quote-box").innerHTML=html;
    }


    function getRandomColor() {//function generates random color
      var color1 = Math.floor(Math.random() * 256);
      var color2 = Math.floor(Math.random() * 256);
      var color3 = Math.floor(Math.random() * 256);
      var randomColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
      console.log(randomColor);
    
        document.body.style.background = randomColor;//applies random color to background
      }
  

    function changeQuote(){ //function to refrsh the quotes
          document.location.reload();

    }
    getRandomColor();//calls the function
    printQuote();//calls the function and outputs the quotes 
    console.log(printQuote());
    setInterval(changeQuote, 10000);//setInterval passes a function as a parameter to refresh the quotes every 10sec
    
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//when the button is clicked a different quote pops up
document.getElementById('load-quote').addEventListener("click", printQuote, false);
