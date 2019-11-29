var title = document.getElementById('title');
var image = document.getElementById('image');
var description = document.getElementById('description');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');

var lighter = false;
var key = false;

function startGame(){
		title.innerHTML = "Identity VI";
		description.innerHTML = 'Door op de button te klikken begint het spel.';
		description.style.textAlign = "center"
		description.style.fontSize = "20px"
		inventoryItem.style.display = "none";
		button1.innerHTML = 'Start Game';
		button1.setAttribute("onclick", "level1();")
		button2.innerHTML = 'How to Play';
		button2.setAttribute ("onclick","instructions();")
		button3.innerHTML ='Credits';
		button3.setAttribute ("onclick","credits();")
}
function instructions(){
	description.style.fontSize = "20px" 
	description.innerHTML ='Instructies:<br>In deze game moet je ervoor zorgen dat je levend uit het huis komt!.';
	description.style.textAlign = "center"
	description.style.margin = "10px"
}

function credits(){
	description.style.fontSize = "40px" 
	description.innerHTML ='Gemaakt door: <br> Sunny Tavares Delagdo. <br> Klas: <br> LPIAO19A3';
	description.style.textAlign = "center"
	description.style.margin = "150px"
}

function level1(){
	image.src = "img/horror3.jpg";
	title.style.display = "none"
	description.innerHTML = "Maak een keuze uit de 2 deuren "
	description.style.marginLeft = "300px"
	button1.innerHTML = "deur 1"
	button2.innerHTML = "deur 2"
	button3.style.display = "none"
	
	
}








startGame();
