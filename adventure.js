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
	image.src = "img/hall.jpg";
	title.style.display = "none"
	description.innerHTML = "Maak een keuze uit de drie volgende doorgangen <br> Deur 1 <br> Deur 2 <br> Lift"
	description.style.marginLeft = "170px"
	button1.innerHTML = "deur 1"
	button1.setAttribute("onclick", "level2();")
	button1.style.marginLeft = "110px"
	button2.innerHTML = "deur 2"
	button2.setAttribute ("onclick","level3();")
	button3.innerHTML = "Lift"
	button3.setAttribute ("onclick","lift();")
}

function level2(){
	image.src = "img/torture.jpg"
	description.innerHTML = "Ga opzoek naar de lift sleutel als ik jou was zal ik goed rond kijken"
	description.style.marginRight = "550px"
	button1.innerHTML = "hall"
	button1.setAttribute("onclick", "level1();")
	button2.innerHTML = "In emmer kijken"
	button3.style.display = "none"
}

function level3(){
	image.src = "img/room.jpg"
	button1.innerHTML = "hall"
	button1.setAttribute("onclick", "level1();")
	button2.style.display = "none"
	button3.style.display = "none"
}

function lift(){
	if (key == false){
	alert("Je hebt geen lift sleutel ga eerst opzoek naar de sleutel")
	}
}	







startGame();
