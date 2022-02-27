  var yourNumber;
  var wins = 0;
  var losses = 0;
  var random_crystal_blue = 0;
  var random_crystal_red = 0;
  var random_crystal_yellow = 0;
  var random_crystal_green = 0;

  var random = Math.floor(Math.random() * 102) + 19;
  function randomCreator (){
      random = Math.floor(Math.random() * 102) + 19;
  }

 random_crystal_blue = Math.floor(Math.random() * 12) + 1;
 random_crystal_red = Math.floor(Math.random() * 12) + 1;
 random_crystal_yellow = Math.floor(Math.random() * 12) + 1;
 random_crystal_green = Math.floor(Math.random() * 12) + 1;


 $("#blue").on("click",function(){
    yourNumber = yourNumber + random_crystal_blue;
    $("#score").text(yourNumber);
    renderMatchingNumber();
 });
 
 $("#red").on("click",function(){
    yourNumber = yourNumber + random_crystal_red;
    $("#score").text(yourNumber);
    renderMatchingNumber();
 });
 
 $("#yellow").on("click",function(){
    yourNumber = yourNumber + random_crystal_yellow;
    $("#score").text(yourNumber);
    renderMatchingNumber();
 });
 
 $("#green").on("click",function(){
    yourNumber = yourNumber + random_crystal_green;
    $("#score").text(yourNumber);
    renderMatchingNumber();
 });

 function startGame() {
   randomCreator();
    yourNumber = 0;
    $("#random_number").text(random);
    random_crystal_blue = Math.floor(Math.random() * 12) + 1;
    random_crystal_red = Math.floor(Math.random() * 12) + 1;
    random_crystal_yellow = Math.floor(Math.random() * 12) + 1;
    random_crystal_green = Math.floor(Math.random() * 12) + 1;
    
    
    
    $("#win").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
  } 
   startGame();
   randomCreator();
   renderMatchingNumber();
   
  function renderMatchingNumber() {
   var scoreNumDiv = $("<div id='score-number'>").text(yourNumber);
   console.log("your current number is :" + yourNumber);
   $("#score").html();
   $("#score").html(scoreNumDiv);

   console.log("your number is: " + yourNumber ,"random number : " + random);
  if(yourNumber === random){ 
   wins= wins + 1;
   console.log("wins : " +wins);
   var y = document.getElementById("win");
   y.innerHTML ="Wins : " + wins;
   document.getElementById("result").innerHTML = "YOU ARE WINNER !!!";
    startGame();
  }
 else if (yourNumber > random){
    losses = losses + 1;
    console.log("losses : " + losses);
    var z = document.getElementById("losses");
    z.innerHTML ="Losses : " + losses;
    document.getElementById("result").innerHTML = "YOU ARE LOOSER !!!";
    startGame();
 }
}
console.log("your number is: " + yourNumber ,"random number : " + random);
