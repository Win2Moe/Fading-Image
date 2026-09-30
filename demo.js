var bgImageArray = ["image/bgcute1.jpg","image/bgcute2.jpg", "image/bgcute3.jpg", "image/bgcute4.jpg"];
var secs = 3;
bgImageArray.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.getElementById("back").style.background = 
			"url(" +  bgImageArray[k] + ") no-repeat right bottom fixed";			
			document.getElementById("back").style.backgroundSize ="cover";

		if ((k + 1) === bgImageArray.length) 
			{ setTimeout(function() { backgroundSequence() }, (secs * 1000))} 
		else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();