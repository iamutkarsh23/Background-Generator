var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("randomButton");

color1.value = "#00ff00"
color2.value = "#ff0000"

changeGradient();

function changeGradient(){
	body.style.background="linear-gradient(to right, " 
	+ color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";

	random.style.background="linear-gradient(to right, " 
	+ color2.value + "," + color1.value + ")";
}

function setRandomHexNumbers(){
	var color = Math.floor(Math.random()*16777215).toString(16);
	return color;
}
setRandomHexNumbers();
function setRandomHexColors(){
	color1.value = "#" + setRandomHexNumbers();
	color2.value = "#" + setRandomHexNumbers();
	changeGradient();
	// console.log(color1);
	// console.log(color2);
}

color1.addEventListener("input",changeGradient);
color2.addEventListener("input",changeGradient);
random.addEventListener("click",setRandomHexColors);