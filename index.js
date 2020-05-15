var button = document.getElementById("roll-button");

function rollDice() {
	//random # 1-6 for first dice
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;

	//player 1 (left) dice image
	document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

	//random # 1-6 for second dice
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	//player 2 (right) dice image
	document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

	//Changes h1 to display winner
	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
	} else if (randomNumber2 > randomNumber1) {
		document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
	} else {
		document.querySelector("h1").innerHTML = "Draw! 🤝";
    }
}

button.addEventListener("click", rollDice);
