var title = document.getElementById('title');
var image = document.getElementById('image');
var description = document.getElementById('description');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');
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
	description.style.fontSize = "20px" ;
	description.innerHTML ='Instructies:<br>In deze game moet je ervoor zorgen dat je levend uit het huis komt!<br>Door items te zoeken en kijk goed uit want je bent niet alleen';
	description.style.textAlign = "center";
	description.style.margin = "10px";
}

function credits(){
	description.style.fontSize = "40px" 
	description.innerHTML ='Gemaakt door: <br> Sunny Tavares Delagdo. <br> Klas: <br> LPIAO19A3';
	description.style.textAlign = "center";
	description.style.margin = "150px";
}

function level1(){
	image.src = "img/hall.jpg";
	title.style.display = "none";
	description.innerHTML = "Maak een keuze; uit de drie volgende doorgangen <br> 1. Deur 1 <br> 2. Deur 2 <br> 3. Lift";
	description.style.marginLeft = "150px";
	button1.innerHTML = "deur 1";
	button1.setAttribute("onclick", "level2();");
	button1.style.marginLeft = "100px";
	button2.innerHTML = "deur 2";
	button2.setAttribute ("onclick","level3();");
	button2.style.display = "inline-block;"
	button3.innerHTML = "Lift";
	button3.setAttribute ("onclick","lift();");
	button3.style.display = "inline-block";
}

function level2(){
	image.src = "img/torture.jpg"
	description.innerHTML = "Ga opzoek naar de lift sleutel als ik jou was zal ik goed rond kijken";
	description.style.marginRight = "540px";
	button1.innerHTML = "hall";
	button1.setAttribute("onclick", "level1();");
	button1.style.display = "inline-block";
	button1.style.marginLeft = "120px";
	button2.innerHTML = "In emmer kijken";
	button2.setAttribute ("onclick","bucket();")
	button3.style.display = "none";
}
function bucket(){
	if (key == false){
	image.src = "img/bucket-withkey.png";
	description.style.display = "none";
	button1.innerHTML = "oppakken";
	button1.setAttribute("onclick","getkey()");

}else{
	image.src = "img/bucket.png";
	description.innerHTML ="Je hebt nu de lift sleutel";
	description.style.display = "inline-block";
	button1.style.display = "none";
	inventoryItem.style.display = "inline-block";
    inventoryItem.src = "img/key.jpg";
    inventoryItem.style.marginLeft = "20px";
    button2.innerHTML = "kijk uit het emmer";
 	button2.setAttribute("onclick", "level2a()");
	button3.style.display = "none";
}
}

function getkey(){
    key = true;
    bucket();
}
function level2a(){
	image.src = "img/torture.jpg";
	description.innerHTML = "Ga opzoek in de andere kamer";
	button1.innerHTML = "hall";
	button1.setAttribute("onclick", "level1();");
	button1.style.display = "inline-block";
	button1.style.marginLeft = "120px";
	button2.innerHTML = "In emmer kijken";
	button2.setAttribute ("onclick","bucket();");
	button3.style.display = "none";
}

function level3(){
	if (lighter == false){
	image.src = "img/kast-with-lighter.jpg";
	description.innerHTML = "Door zoek de kamer";
	description.style.marginLeft = "120px";
	button1.style.marginLeft = "25px";
	button1.innerHTML = "hall"
	button1.setAttribute("onclick", "level1();");
	button2.innerHTML = "Kijk onder het bed";
	button2.setAttribute("onclick", "gameover();")
	button3.innerHTML = "pak aansteker";
	button3.setAttribute("onclick", "getlighter();");

}else{
	image.src= "img/kast-without-lighter.jpg";
	description.innerHTML ="Je hebt nu de aansteker ";
	description.style.display = "inline-block";
	button1.innerHTML = "hall"
	button1.setAttribute("onclick", "level1();");
	button2.innerHTML = "Kijk onder het bed";
	button3.style.display = "none";
	inventoryItem.src = "img/lighter.jpg";
	inventoryItem.style.display = "inline-block";
	inventoryItem.style.marginLeft = "20px";
}
}
function getlighter(){
	lighter = true;
	level3();
}


function lift(){
	if (key == false){
	alert("Je hebt geen lift sleutel ga eerst opzoek naar de sleutel");
	}else{
	image.src = "img/room2.jpg"
	description.innerHTML = "Je hoort een raar geluid ga naar het geluid toe of loop verder"
	button1.innerHTML = "Loop verder"
	button1.setAttribute("onclick", "lopen();");
	button2.innerHTML = "Ga naar het geluid";
	button2.setAttribute("onclick", "gameover();")
	button3.innerHTML  = "hall";
	button3.setAttribute("onclick", "level1();");
	inventoryItem.style.display = "inline-block";
	inventoryItem.style.marginLeft = "20px";
}
}

function lopen(){
	image.src = "img/darkroom.jpg"
	description.innerHTML = "Je ziet niks gebruik je aansteker"
	button1.innerHTML = "aansteker"
	button1.setAttribute("onclick", "lopen2();");
	button2.style.display = "none"
	button3.style.display = "none"
	inventoryItem.style.display = "inline-block";
	inventoryItem.style.marginLeft = "20px";
}
function lopen2(){
	image.src = "img/lightroom.jpg"
	description.innerHTML = "Loop door een van de 2 deuren <br> Deur 1 <br> Deur 2 "
	button1.innerHTML = "Deur 1";
	button1.setAttribute("onclick", "gameover();");
	button2.innerHTMLL = "Deur 2";
	button3.setAttribute("onclick", "victory();");
	button3.style.display = "none";
	inventoryItem.style.display = "none";
}

// Game Over

function gameover(){
	image.src = "img/monster.jpg";
	description.innerHTML= "Game over"
	description.style.textAlign = "center";
	description.style.fontSize = "20px";
	button1.innerHTML = "Start over";
	button1.setAttribute("onclick","window.location.reload();");
	button2.style.display = "none"
	button3.style.display = "none"
}

// Victory

function victory(){
	image.src = "img/win.jpg"
	description.style.display = "none"
	button1.innerHTML = "Play again";
	button1.setAttribute("onclick","window.location.reload();");
	button2.style.display = "none"
	button3.style.display = "none"
}




startGame();
