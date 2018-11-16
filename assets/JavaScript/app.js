var timer = 30;
var intervalId;
var timerRunning = false;
var winnerLoser;
var questions = [
    {
        question: "Who is Batman?",
        answer: "Bruce Wayne"

    },
    {
        question: "What was Luke Skywalker before he was a Jedi?",
        answer: "Moisture Farmer"
    }
]
//need a function to take time off the timer
function countdown() {
   (timer === timer--);
}

function timerStart() {
   //this function needs to begin the timer countdown 
    
     intervalId = setInterval(countdown, 1000);
    //   clearInterval(intervalId);
     console.log(timer);
     
}
$("#button").on("click", timerStart(timer))
console.log(timer);


function questions() {
    //this function needs to see if the answers picked are correct
}

function timesup() {
    //this needs to check the answers at the end of the time and declare a winner or loser
}