var timer = 30;
var intervalId;
var timerRunning = false;
var winnerLoser;

//need a function to take time off the timer
function countdown() {
  var timeLeft = (timer == timer--);

setInterval(function(){countdown,1000});

console.log(timeLeft);
};


function timerStart() {
   //this function needs to begin the timer countdown 
    
     intervalId = setInterval(countdown, 1000);
    //   clearInterval(intervalId);
     console.log(timer);
     
}//I need this function to being the countdown on a button push
$("#timerButton").on("click", countdown(timer))
;



function questions() {
    //this function needs to see if the answers picked are correct

}

function timesup() {
    //this needs to check the answers at the end of the time and declare a winner or loser
}