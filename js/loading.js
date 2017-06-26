var loader;
function initRes() {
	var manifest = [
		{id:"src1", src:"img/ball.png"},
		{id:"src2", src:"img/bubble.png"},
		{id:"src3", src:"img/syz.jpg"},
		{id:"src4", src:"img/nacked.jpg"},
		{id:"src5", src:"img/breast.jpg"},
		
	];

	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("progress", handleFileProgress);
	loader.loadManifest(manifest);
}

function handleFileProgress(event) {
	var percent = loader.progress*100|0;
	console.log(percent+'% loaded.');

}

function handleFileLoad(evt) {
	//console.log(evt);
}

function handleComplete() {
	//console.log(loader.getResult("myPath_1"));
	initDraw();
	requestAnimationFrame(animate);
}

$(document).ready(function(){
	initRes();
});