let divBingoCard = document.getElementById("divBingoCard");
let txtInput = document.getElementById("txtInput");
let pcardCount = document.getElementById("pcount");
let btnDraw = document.getElementById("btnDraw");
let pdrawBall = document.getElementById("pdrawBall");
let counter = 0;
let card;
let ballDraw;
let cardMatrixTotal = [];
let cardMatrix;
let cardLength;
let BingoWinner = false;
//the function darw() will darw a number of card depend on the value given by the user
function draw(){
//condition if the user click the draw btn with out existing value in a field
if(txtInput.value == ""){
alert("enter value in the field!");
}
else{
//validation number only
if(isNaN(txtInput.value)){
alert("enter number only");
txtInput.value = null;
}
else{
     for(var i = 0; i < txtInput.value; i++){
	 //create object of Bingo cad class
	 card = new BingoCard();
	 card.generateMatrix();
	 divBingoCard.innerHTML += card.darwCard();
	 counter++;
	 cardMatrix = card.matrix;
	 cardMatrixTotal.push(cardMatrix);
	}
	//txt input field set to null
	txtInput.value = null;
  }
}
pcardCount.innerHTML = 'No. of cards: ${counter}';
}


function drawBall(){
//create object of BallDraw class
ballDraw = new BallDraw();
ballDraw.drawBall();

//display darw ball
pdrawBall.innerHTML = ballDraw.ballDrawnLetter+"-"+ballDraw.ballDrawnNumber;
//loop through the bingo card number
   for(var i = 0; i < cardMatrixTotal.length; i++){
    for(var j = 0; j < cardMatrixTotal[i].length; j++){
     for(var k = 0; k < cardMatrixTotal[i][j].length; k++){
  // highlight the number matched from darwball into the bingo card
  if(cardMatrixTotal[i][j][k] == ballDraw.ballDrawnNumber){
   document.getElementById(cardMatrixTotal[i][j][k]).style.background = "red";
   
   //function call to check winner
   checkBingoWinner();
   }
  }
 }
}
//check if there is a bingo winner
   if(BingoWinner == true){
     showWinnerCard();
	}
  }
  
 function showWinnerCard(){
 //user confirmation to display winner card
 let confirmation = confirm("there is a winner! BINGO! \nDisplay BINGO card?");
    if(confirmation != true){
      clearCards();
    }
   }
  function clearCards(){
//user confirmation before restarting
  let confirmation = confirm("do you want to clear/reset games?");
  if(confirmation == true){
  //restart
  window.location.reload();
  }
 }
 //check bingo winner
function chekBIngoWinner(){
  //colmn 0 and respective rows
 let c0r0 = document.getElementById(cardMatrixTotal[0][0][0]);
  let c0r0_color = c0r0.style.background;
 let c0r1 = document.getElementById(cardMatrixTotal[0][0][1]);
  let c0r1_color = c0r1.style.background;
 let c0r2 = document.getElementById(cardMatrixTotal[0][0][2]);
  let c0r2_color = c0r2.style.background;
 let c0r3 = document.getElementById(cardMatrixTotal[0][0][3]);
  let c0r3_color = c0r3.style.background;
 let c0r4 = document.getElementById(cardMatrixTotal[0][0][4]);
  let c0r4_color = c0r4.style.background;
  //colmn 1 and respective rows
 let c1r0 = document.getElementById(cardMatrixTotal[0][1][0]);
  let c1r0_color = c1r0.style.background;
  let c1r1 = document.getElementById(cardMatrixTotal[0][1][1]);
  let c1r1_color = c1r1.style.background;
   let c1r2 = document.getElementById(cardMatrixTotal[0][1][2]);
  let c1r2_color = c1r2.style.background;
   let c1r3 = document.getElementById(cardMatrixTotal[0][1][3]);
  let c1r3_color = c1r3.style.background;
   let c1r4 = document.getElementById(cardMatrixTotal[0][1][4]);
  let c1r4_color = c1r4.style.background;
  //colmn 2 
 let c2r0 = document.getElementById(cardMatrixTotal[0][2][0]);
 let c2r0_color = c2r0.style.background;
 let c2r1 = document.getElementById(cardMatrixTotal[0][2][1]);
 let c2r1_color = c2r1.style.background;
 let c2r2 = document.getElementById(cardMatrixTotal[0][2][2]);
 let c2r2_color = c2r2.style.background;
 let c2r3 = document.getElementById(cardMatrixTotal[0][2][3]);
 let c2r3_color = c2r3.style.background;
 let c2r4 = document.getElementById(cardMatrixTotal[0][2][4]);
 let c2r4_color = c2r4.style.background;
 //colm 3
 let c3r0 = document.getElementById(cardMatrixTotal[0][3][0]);
 let c3r0_color = c3r0.style.background;
 let c3r1 = document.getElementById(cardMatrixTotal[0][3][1]);
 let c3r1_color = c3r1.style.background;
 let c3r2 = document.getElementById(cardMatrixTotal[0][3][2]);
 let c3r2_color = c3r2.style.background;
 let c3r3 = document.getElementById(cardMatrixTotal[0][3][3]);
 let c3r3_color = c3r3.style.background;
 let c3r4 = document.getElementById(cardMatrixTotal[0][3][4]);
 let c3r4_color = c3r4.style.background;
 //colmn 4
 let c4r0 = document.getElementById(cardMatrixTotal[0][4][0]);
 let c4r0_color = c4r0.style.background;
 let c4r1 = document.getElementById(cardMatrixTotal[0][4][1]);
 let c4r1_color = c4r1.style.background;
 let c4r2 = document.getElementById(cardMatrixTotal[0][4][2]);
 let c4r2_color = c4r2.style.background;
 let c4r3 = document.getElementById(cardMatrixTotal[0][4][3]);
 let c4r3_color = c4r3.style.background;
 let c4r4 = document.getElementById(cardMatrixTotal[0][4][4]);
 let c4r4_color = c4r4.style.background;
 
//check if winner is vertical
if(c0r0_color == "red" && c0r1_color == "red" && c0r2_color == "red" && c0r3_color == "red" && c0r4_color == "red"){
BingoWinner = true;
c0r0.style.background = "yellow";
c0r1.style.background = "yellow";
c0r2.style.background = "yellow";
c0r3.style.background = "yellow";
c0r4.style.background = "yellow";
}
else if(c1r0_color == "red" && c1r1_color == "red" && c1r2_color == "red" && c1r3_color == "red" && c1r4_color == "red"){
c1r0.style.background = "yellow";
c1r1.style.background = "yellow";
c1r2.style.background = "yellow";
c1r3.style.background = "yellow";
c1r4.style.background = "yellow";
BingoWinner = true;
}
else if(c2r0_color == "red" && c2r1_color == "red" && c2r2_color == "red" && c2r3_color == "red" && c2r4_color == "red"){
c2r0.style.background = "yellow";
c2r1.style.background = "yellow";
c2r2.style.background = "yellow";
c2r3.style.background = "yellow";
c2r4.style.background = "yellow";
BingoWinner = true;
}
else if(c3r0_color == "red" && c3r1_color == "red" && c3r2_color == "red" && c3r3_color == "red" && c3r4_color == "red"){
c3r0.style.background = "yellow";
c3r1.style.background = "yellow";
c3r2.style.background = "yellow";
c3r3.style.background = "yellow";
c3r4.style.background = "yellow";
BingoWinner = true;
}
else if(c4r0_color == "red" && c4r1_color == "red" && c4r2_color == "red" && c4r3_color == "red" && c4r4_color == "red"){
c4r0.style.background = "yellow";
c4r1.style.background = "yellow";
c4r2.style.background = "yellow";
c4r3.style.background = "yellow";
c4r4.style.background = "yellow";
BingoWinner = true;
}

//check winner horizontal
else if(c0r0_color == "red" && c1r0_color == "red" && c2r0_color == "red" && c3r0_color == "red" && c4r0_color == "red"){
c0r0.style.background = "yellow";
c1r0.style.background = "yellow";
c2r0.style.background = "yellow";
c3r0.style.background = "yellow";
c4r0.style.background = "yellow";
BingoWinner = true;
}
else if(c0r1_color == "red" && c1r1_color == "red" && c2r1_color == "red" && c3r1_color == "red" && c4r1_color == "red"){
c0r1.style.background = "yellow";
c1r1.style.background = "yellow";
c2r1.style.background = "yellow";
c3r1.style.background = "yellow";
c4r1.style.background = "yellow";
BingoWinner = true;
}
else if(c0r2_color == "red" && c1r2_color == "red" && c2r2_color == "red" && c3r2_color == "red" && c4r2_color == "red"){
c0r2.style.background = "yellow";
c1r2.style.background = "yellow";
c2r2.style.background = "yellow";
c3r2.style.background = "yellow";
c4r2.style.background = "yellow";
BingoWinner = true;
}
else if(c0r3_color == "red" && c1r3_color == "red" && c2r3_color == "red" && c3r3_color == "red" && c4r3_color == "red"){
c0r3.style.background = "yellow";
c1r3.style.background = "yellow";
c2r3.style.background = "yellow";
c3r3.style.background = "yellow";
c4r3.style.background = "yellow";
BingoWinner = true;
}
else if(c0r4_color == "red" && c1r4_color == "red" && c2r4_color == "red" && c3r4_color == "red" && c4r4_color == "red"){
c0r4.style.background = "yellow";
c1r4.style.background = "yellow";
c2r4.style.background = "yellow";
c3r4.style.background = "yellow";
c4r4.style.background = "yellow";
BingoWinner = true;
}
//check winner diagonal
else if(c0r0_color == "red" && c1r1_color == "red" && c2r2_color == "red" && c3r3_color == "red" && c4r4_color == "red"){
c0r0.style.background = "yellow";
c1r1.style.background = "yellow";
c2r2.style.background = "yellow";
c3r3.style.background = "yellow";
c4r4.style.background = "yellow";
BingoWinner = true;
}
else if(c0r4_color == "red" && c1r3_color == "red" && c2r2_color == "red" && c3r1_color == "red" && c4r0_color == "red"){
c0r4.style.background = "yellow";
c1r3.style.background = "yellow";
c2r2.style.background = "yellow";
c3r1.style.background = "yellow";
c4r0.style.background = "yellow";
BingoWinner = true;
}
else{
console.log('NO bingo winner yet');
}
}






 
 

