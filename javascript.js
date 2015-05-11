var question = document.getElementById("question");

var getBirthYear = function () {
	var birthYear =  "";
	while (birthYear.length != 4 || isNaN(birthYear)) {
		question.textContent = "What year were you born? (ex: 1989)";
		birthYear = prompt("");
	}
	return birthYear;
}

var getBirthMonth = function () {
	var birthMonth = "";
	while (birthMonth.length < 1 || birthMonth.length > 2 || isNaN(birthMonth)) {
		question.textContent = "What number month were you born? (ex: 10)";
		birthMonth = prompt("");
	}
	return birthMonth;
}

var getBirthDate = function () {
	var birthDate = "";
	while (birthDate.length < 1 || birthDate.length > 2 || isNaN(birthDate)) {
		question.textContent = "What day of the month were you born? (ex: 29)";
		birthDate = prompt("");
	}
	return birthDate;
}

var birthDate = new Date();
birthDate.setFullYear(getBirthYear());
birthDate.setMonth(getBirthMonth());
birthDate.setDate(getBirthDate());

var currentDate = new Date();

var daysAlive =  Math.floor((Date.parse(currentDate) - Date.parse(birthDate)) / 86400000);
	
var fullMoons = Math.floor(daysAlive / 29.530588853);

var guess = "";

while (guess != fullMoons || guess > fullMoons + 10 || guess < fullMoons - 10) {
	if (guess.length == 0) {
		question.textContent = "About how many full moons have there been since you were born?";
		guess = prompt("");
	} else if (guess > fullMoons + 10) {
		question.textContent = "That's too high, guess again.";
		guess = prompt("");
	} else if (guess < fullMoons - 10) {
		question.textContent = "That's too low, guess again.";
		guess = prompt("");
	} else {
		break;
	}
}

if (guess == fullMoons) {
	question.textContent = "That's the same number we estimated! Way to go.";
} else {
	question.textContent = "That's close enough. We estimated " + fullMoons.toString() + ". Way to go!";
}
