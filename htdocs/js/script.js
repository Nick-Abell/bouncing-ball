function random(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

function randomColor(){
	   let colorHex = "123456ABCDEF";
	   let color = '#';
	   for (var k = 0; k < 6; k++) {
		   color += colorHex.at([random(0,11)]);
	   }
	   return color;
}

$(document).ready(function(){

let $ball = $("#ball");

$ball.css(
	"background-color", randomColor());
	
$("#changeBtn").click(function(){
	$ball.css("background-color", randomColor());
});
let xdir;
let ydir;
var x = random(1,4);

switch (x) { // ball starts in random direction
	case 1:
	xdir = "right";
	ydir = "up";
	break;
	case 2:
	ydir = "down";
	xdir = "left";
	break;
	case 3:
	xdir = "right";
	ydir = "down";
	default: 
		ydir = "up";
		xdir = "left";
		
}
	let bouncing = null;

function animateBall(){
	if (bouncing === null) {
	bouncing = setInterval(function(){
		
		var dir = random(1,2) - 1; // random movement along x or y axis
		var angle = random(1,10); // momentum of the random movement
		$ball.css("background-color", randomColor()); // changes color every interval

		
	switch (dir) {
		
		case 0: // x - direction
		for (var i =0; i<angle; i++) {
	if (xdir === "right") {
				$ball.css({
					left: "+=1px"
				});
			if (parseInt($ball.css("left")) + parseInt($ball.css("width")) >= 500) { xdir = "left";}
	}
	
	if (xdir === "left"){
				$ball.css({
					left: "-=1px"
				});
		if (parseInt($ball.css("left")) <= 0) { xdir = "right";}		
		}
		}
		break;
		
		case 1: //y - direction
		for (var j =0; j < angle; j++) {
		if (ydir === "down"){
				$ball.css({
					top: "+=1px"
				});
		if (parseInt($ball.css("top")) + parseInt($ball.css("height")) >= 500) { ydir = "up";}
		};
		
		if (ydir === "up"){
				$ball.css({
					top: "-=1px"
				});
		if (parseInt($ball.css("top")) === 0) { ydir = "down";}
		};
		}
		break;
		
		default:

	}
	}, 20) }
	else {
		clearInterval(bouncing);
		bouncing = null;
	}
}

$("#bounceBtn").click(function(){
	animateBall();
});

$("#largerBtn").click(function(){
	
		$ball.css("height", "100px");
		$ball.css("width", "100px");
});

$("#smallBtn").click(function(){
	
	$ball.css("height", "50px");
	$ball.css("width", "50px");
	
});
	
});
