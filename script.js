
// square fields sizing
let fieldSize = document.querySelector(".field").offsetWidth;
let FieldSizeAll = document.querySelectorAll(".field")

function setFieldSize(){

	for(i=0; i < FieldSizeAll.length; i++){
		FieldSizeAll[i].style.height = fieldSize + "px";
		FieldSizeAll[i].addEventListener("click", addMark);
	}
	}

	setFieldSize();

	function checkFieldSize(){
		if((fieldSize * 3) > window.innerHeight){
			let max = (window.innerHeight * 0.6)/3;
			for(i=0; i < FieldSizeAll.length; i++){
			FieldSizeAll[i].style.height = max + "px";
			FieldSizeAll[i].style.maxWidth = max + "px";

			
			}
		}
		
	}
	checkFieldSize();

function resizeCustom(){
	setFieldSize();
	checkFieldSize();
}


window.addEventListener("resize", resizeCustom);





/* player objects*/ 


const playerOne = {
	name : "rok",
	score : 0,
	mark : true,
	markID: "markOne",
}

const playerTwo = {
	name : "haha",
	score : 0,
	mark : false,
	markID: "markTwo",
}



/*	data input */
function getUsername(){
let playerName1 = document.getElementById("player1");
let playerName2 = document.getElementById("player2");
	playerOne.name = playerName1.value;
	playerTwo.name = playerName2.value;
	document.getElementById("player1Name").innerHTML= playerOne.name;
	document.getElementById("player2Name").innerHTML= playerTwo.name;
	playerTurn();
}

getUsername();


let saveUserName = document.getElementById("savePlayerData");
saveUserName.addEventListener("click", getUsername);


function getScore(){
	document.getElementById("player1Score").innerHTML = "Score: " + playerOne.score;
	document.getElementById("player2Score").innerHTML = "Score: " + playerTwo.score;
}
getScore();

function playerTurn(){
	if(playerOne.mark === true){
		document.getElementById("turn").innerHTML = "It's " + playerOne.name + "'s turn";
	} else {
		document.getElementById("turn").innerHTML = "It's " + playerTwo.name + "'s turn";
	}

}
playerTurn();

/* ----------------- game logic -------------------- */




function addMark(){
	if(this.firstElementChild === null){
		if(playerOne.mark === true){
			let mark = document.createElement("div");
			let markText = document.createTextNode("");
			mark.className = "markOne";
			mark.appendChild(markText);
			this.appendChild(mark);
			playerOne.mark = false;
			playerTwo.mark = true;
		
		} else {
			let mark = document.createElement("div");
			let markText = document.createTextNode("");
			mark.className = "markTwo";
			mark.appendChild(markText);
			this.appendChild(mark);
			playerOne.mark = true;
			playerTwo.mark = false;
		}
		playerTurn();
		checkWin(playerOne.markID);
		checkWin(playerTwo.markID);
	}

}

function playerWon(playerWonL){
	if(playerWonL === playerOne.markID){
					playerOne.score = playerOne.score + 1;
					playerOne.mark = false;
					playerTwo.mark = true;
					alert(playerOne.name + " wins!");
				}else{
					playerTwo.score = playerTwo.score + 1;
					playerOne.mark = true;
					playerTwo.mark = false;
					alert(playerTwo.name + " wins!");
				}
	getScore();
}

function checkWin(player){
	let fieldContent = document.querySelectorAll('.field');
	let fieldContentId = [];
		
	for(i=0; i < fieldContent.length; i++){
		if(fieldContent[i].firstElementChild !== null ){
			fieldContentId[i] = fieldContent[i].firstElementChild.classList.value;

			if(fieldContentId[0] === player && fieldContentId[1] === player && fieldContentId[2] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[3] === player && fieldContentId[4] === player && fieldContentId[5] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[6] === player && fieldContentId[7] === player && fieldContentId[8] === player){
				playerWon(player);
			
			break;
			}

			if(fieldContentId[0] === player && fieldContentId[3] === player && fieldContentId[6] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[1] === player && fieldContentId[4] === player && fieldContentId[7] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[2] === player && fieldContentId[5] === player && fieldContentId[8] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[0] === player && fieldContentId[4] === player && fieldContentId[8] === player){
				playerWon(player);
				
			break;
			}

			if(fieldContentId[2] === player && fieldContentId[4] === player && fieldContentId[6] === player){
				playerWon(player);
				
			break;
			}
		}

	}

}




function removeMarks(){
	let fieldContent = document.querySelectorAll('.field');	
	for(i=0; i < 9; i++){
		if(fieldContent[i].firstElementChild !== null ){
			fieldContent[i].removeChild(fieldContent[i].childNodes[0]);
		}
	}
}












