const words = ["An Enterprise SaaS Platform for Taxi Dispatch.", "Easy Switching from Manual to Automatic Dispatch.", "Designed For High Speed."];
let i = 0;
let timer;
let animTime = 130;
let delayTimeout = 4000;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, animTime);
	};
	loopTyping();
};

function deletingEffect() {
	setTimeout(function(){ 
		let word = words[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, animTime);
		};
		loopDeleting();
	 }, delayTimeout);
};

typingEffect();