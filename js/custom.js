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

var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 

$("video").click(function() {
	//console.log(this); 
	if (this.paused) {
		this.play();
		document.getElementById('play').style.display = "none";
	} else {
		document.getElementById('play').style.display = "block";
		this.pause();
	}
});

function playVid() {
	var mediaVideo = $("video").get(0);
	if (mediaVideo.paused) {
		mediaVideo.play();
		document.getElementById('play').style.display = "none";
	} else {
		document.getElementById('play').style.display = "block";
		mediaVideo.pause();
	}
}

function left(){
	var nyedva = document.getElementById('nav');
	nyedva.scrollLeft += 100;
}

function right(){
	var nyedva = document.getElementById('nav');
	nyedva.scrollLeft -= 100;
}

var tabdriver = document.getElementById("driver-layout");
tabdriver.style.height = "0px";

function tabFunction(){
	tabdriver.style.height = "auto";
}