var clickTime; var createTime; var timePassed;

var borderRad;

var clickCounter = 0; 



makeBox();

function makeBox() {
	
	//come up with a random number of seconds between 0.0 to 4.0
	var x = Math.random()*5*1000;
	
	var borderRad = Math.random()*10;
	
	var topMargin = Math.random()*650;
	var leftMargin = Math.random()*800;

	//timeout function for x which is defined above
	setTimeout(function() {
		
		createTime = Date.now();
		
		document.getElementById("box").style.backgroundColor = getRandomColor();
		
		if (borderRad > 8) {
			
			document.getElementById("box").style.borderRadius = "100px";
			document.getElementById("box").style.marginTop = topMargin + "px";
			document.getElementById("box").style.marginLeft = leftMargin + "px";
							
		} else {

			document.getElementById("box").style.borderRadius = "0px";
			document.getElementById("box").style.marginTop = topMargin + "px";
			document.getElementById("box").style.marginLeft = leftMargin + "px";
		
		}
		
		document.getElementById("box").style.visibility = "visible";
		
	}, x);

}


//after each click
document.getElementById("box").onclick=function(){

	
	//After Each Click
	clickTime = Date.now();
	
	//calculate timePassed
	timePassed = (clickTime - createTime)/1000	; 		
			
	//update html to display timePassed		
	document.getElementById("time").innerHTML = "(" + timePassed + " seconds)";	
	
	//increment the counter
	clickCounter = clickCounter + 1; 
	document.getElementById("counter").innerHTML = "Count of clicks: " + clickCounter;
		
	//hide box 
	this.style.visibility = "hidden";

	makeBox();
				

}


function getRandomColor() {
	 
	 var letters = '0123456789ABCDEF'.split('');
	 var color = '#';
	 
	 for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	 }

	return color;
}