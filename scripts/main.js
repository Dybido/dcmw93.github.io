var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/GoogleLogoSept12015.png'){
		myImage.setAttribute('src', 'images/google2.png');
	} else{
		myImage.setAttribute('src', 'images/GoogleLogoSept12015.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hi ' + myName + "! Welcome to the 1990s";

}

if(! localStorage.getItem('name')){
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hi ' + myName + "! Welcome to the 1990s";
}

myButton.onclick = function(){
	setUserName();
}

