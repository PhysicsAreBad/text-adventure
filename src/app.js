var health = 100;
var strength = 100;
var timeHour = 0;
var timeDay = 1;
var actionNumber = 0;
var bad = false;
var charName;
var textInfo = "- Welcome to the text based adventure <i>Adventure for the End of the World</i> made by Jack Gonser. This adventure places you inside the shoes of a scientist who resides in Dallas, Texas. You have been contacted to develop a government project that will destroy all of the Asian countries due to the threat that our current president, Donald Trump has identified. You get to chose how this situation plays out with many endings. Choose wisely as this games does not forgive or forget. Have fun protecting or ending the world!";
var button1 = "button-1";
var button2 = "button-2";
let $button2 = $('#button2');
const $form = $('#form');
const textBox = "text-box";
const newMail = new Audio('src/DingDongNewEmail.wav');
const sad = new Audio('src/sad.wav');
const siren = new Audio('src/siren.wav');
const think = new Audio('src/think.wav');
const bombSound = new Audio('src/bomb.wav');
const usaSound = new Audio('src/usa.wav');
const canadaSound = new Audio('src/canada.mp3');
const isFirefox = typeof InstallTrigger !== 'undefined';

$button2.hide();
$('#usa-flag').hide();
$('#form').hide();
$('#canada-flag').hide();

if (isFirefox) {
	window.location.href = "unable.html";
}

function a() {
	if (actionNumber == 0) {
		$button2.fadeIn();
		textInfo = textInfo + "<br><br>- You have been contacted by the government immediatly at 12:00 am from what seems like an automated system sent it to you. It says the government is conducting research into a new project simalier to the Manhatten project from the 40's. What do you do?";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "Respond to the message";
		document.getElementById(button2).innerHTML = "Its just spam!";
		newMail.play();
		actionNumber++; 
		$('#button-2').show();
	} else if (actionNumber == 1 && timeHour != 1) {
		newMail.pause();
		newMail.currentTime = 0;
		textInfo = textInfo + "<br><br>- You send a message, an hour later you get a response but this time it looks like a coded message. Do you";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "look to the internet for ideas";
		document.getElementById(button2).innerHTML = "look for clues in the email";
		timeHour = 1;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		newMail.play();
		actionNumber++
	} else if (actionNumber == 2) {
		textInfo = textInfo + "<br><br>- When you search the internet, you alert reddit about this operation. The FBI is now after you. Do you";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "hide in your closet";
		document.getElementById(button2).innerHTML = "drive to mexico";
		timeHour = 2;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		siren.play();
		bad = true;
		actionNumber++;
	} else if (actionNumber == 3 && !bad) {
		textInfo = textInfo + "<br><br>- You arrive at a room that looks about 100 feet underground but you can't be sure. You walk into the room, you can";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "talk to the women in center of the room";
		document.getElementById(button2).innerHTML = "destroy everything";
		timeHour = 9;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		actionNumber++;
		$button2.show();
	} else if (actionNumber == 3 && bad) {
		textInfo = textInfo + "<br><br>- You get caught and arrested. The world is saved but you are arrested for life. You were forgotten after a year of publicty. Have a happy lonely death!";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "";
		document.getElementById(button2).innerHTML = "";
		timeHour = 17;
		timeDay = 3879;
		health = 0;
		strength = 0;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		sad.play();
	} else if (actionNumber == 4) {
		textInfo = textInfo + "<br><br>The Lady- Hello! May I ask, who are you? (enter name below)"
		$('#buttons').hide();
		$('#form').fadeIn();
		document.getElementById(textBox).innerHTML = textInfo;
	}
}
function b() {
	if (actionNumber == 1) {
		newMail.pause();
		newMail.currentTime = 0;
		textInfo = textInfo + "<br><br>- You become an unimportant scientist and die alone. All of Asia was destroyed and the USA rules the world. Long live America.";
		health = 0;
		strength = 0;
		timeDay = 3879;
		timeHour = 17;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		document.getElementById(textBox).innerHTML = textInfo;
		usaSound.play();
		$('#usa-flag').fadeIn();
		document.getElementById(button2).innerHTML = "";
		document.getElementById(button1).innerHTML = "";
		$('#buttons').hide();
		setTimeout(function() {reset();}, 10000);
		$('#button-3').hide();
	} else if (actionNumber == 2) {
		textInfo = textInfo + "<br><br>- The message at the bottom said 'eat yummy food, it is very tasty and you should try it now, yummy good food'. You think that is a key to a vigenere cipher. The rest said 'qexrufsmasfquxvlcirbjuskreevbofdhgnpatjmkebqgqbmdn' Enter decoded message below exactly like shown on the other page";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "";
		document.getElementById(button2).innerHTML = "";
		timeHour = 2;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		think.play();
		$('#form').show();
		$('#buttons').hide();
		window.open("http://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx");
	} else if (actionNumber == 3 && bad) {
		textInfo = textInfo + "<br><br>- You expose the government and live in russia. The USA collapses and Canada takes all!";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "";
		document.getElementById(button2).innerHTML = "";
		timeHour = 2;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		actionNumber++;
		canadaSound.play();
		$('#canada-flag').fadeIn();
	} else if (actionNumber == 4 && !bad) {
		textInfo = textInfo + "<br><br>- The world explodes and life does not exist anymore.";
		document.getElementById(textBox).innerHTML = textInfo;
		document.getElementById(button1).innerHTML = "talk to the women in center of the room";
		document.getElementById(button2).innerHTML = "destroy everything";
		timeHour = 2;
		document.getElementById("stats-box").innerHTML = "Health:" + health + "  Strength:" + strength + "  Day:" + timeDay + "  Hour:" + timeHour;
		actionNumber++;
		bombSound.play();
	}
}
function textResponse(form) {
	var text = form.inputbox.value;
	if (actionNumber == 2) {
		if (text == "meetatgovernmentheadquartersdallastexasoclocksharp") {
			$('#buttons').show();
			$button2.hide();
			document.getElementById(button1).innerHTML = "continue";
			textInfo = textInfo + "<br><br>- The email says go to the government headquarters at nine."
			document.getElementById(textBox).innerHTML = textInfo;
			$('#form').hide();
			actionNumber++;
			text = "";
	} 	else {
			const computerError = new Audio('src/computerError.wav');
			computerError.play();
			$('#form').hide();
			textInfo = textInfo + "<br><br>- Incorrect, Reset activated"
			setTimeout(function() {reset();}, 5000);
			document.getElementById(textBox).innerHTML = textInfo;
	}

	} else {
		const helloSound = new Audio('src/hello.mp3');
		charName = text;
		$form.hide();
		textinfo = textInfo + "<br><br> You- Hello, my name is " + charName;
		helloSound.play();
		document.getElementById(textBox).innerHTML = textInfo;
		textInfo = textInfo + "<br><br>The Lady - Oh, your " + charName + '! My name is Maria, the operations manager for this place. We are looking at some old plans from the 1980s due to the "Asian Threat". We have discovered some space wepoans and are forced to secretly go on with the plans we found. You will be playing a central part as you will be helping devolp and launch by 2019. Get Ready, because we are protected the world... A bit too much?'
		setTimeout(function() {document.getElementById(textBox).innerHTML = textInfo;}, 3000);
	}
}
function reset() {
	location.reload(true);
}