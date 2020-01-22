/**
 * 
 */
var clickedcounter = 0;
var animations = ['example', 'example2', 'example3']
window.onload = function(){
	console.log("init")
//	window.document.getElementById('circle').addEventListener('click', e => divclick(e))
	window.document.addEventListener('click', e => showExplosion(e))
//	setInterval(function() {
//			console.log('timer')
//		}, 1000);
}

function showExplosion(e){
	console.log('mouse event on x: ' + event.clientX + ', y:' + event.clientY)
	showImage(event.clientX, event.clientY)
}

function showImage(x, y) {
	    var img = document.createElement("img");
	    img.src = 'https://i.gifer.com/3IsK.gif';
	    img.width = '30';
	    img.height = '30';
	    img.style.display = 'block';
	    img.style.position = 'absolute';
	    img.style.left = x-15 + 'px';
	    img.style.top = y-25 + 'px';
	    

	    // This next line will just add it to the <body> tag
        document.body.appendChild(img);
	    console.log('explosion image should be there:' + img)
	    window.setTimeout(function(){
			img.style.display = "none";
				}, 1000);
}

function addUfo(){
	var img = document.createElement("img");
    img.src = 'https://www.iconninja.com/files/889/920/3/ufo-icon.png';
    img.width = '30';
    img.height = '30';
    img.style.display = 'block';
    img.style.position = 'relative';
    img.style.animationName = animations[Math.floor(Math.random() * animations.length)];
    img.style['animation-duration'] = "22s";
    img.style.animationIterationCount=  'infinite';
    img.addEventListener('click', () => divclick())
    console.log(img)
    document.body.appendChild(img);
    console.log('ufo added')
}

function divclick(){
	console.log('Event target: ' + event.target)
	clickedcounter++;
	console.log("clickedcounter: " + clickedcounter);
	window.document.getElementById("clicked").innerHTML = clickedcounter;
	changeShape(event.target);
	changeImage(event.target);
	addUfo();
}

function changeAnimation(animationname){
	console.log('Animation: ' + animationname);
	console.log(window.getComputedStyle(window.document.getElementById("circle")).animationName);
	window.document.getElementById("circle").style.animationName = animationname
	
}

function changeImage(target){
	var circle = target;
	circle.src = 'https://gifimage.net/wp-content/uploads/2018/06/transparent-explosion-gif-12.gif';
	window.setTimeout(function(){
		circle.src= 'https://www.iconninja.com/files/889/920/3/ufo-icon.png'
		changeAnimation(animations[Math.floor(Math.random() * animations.length)]);
			}, 2000);
}

function changeShape(target){

//	window.document.getElementById("circle").style.width = window.document.getElementById("circle").clientWidth-5 + "px";
	target.style.width = target.clientWidth-5 + "px";
	target.style.height = target.clientHeight-5 + "px";
//	checkDidPlayerWin(window.document.getElementById("circle").style.height);
	//console.log(window.document.getElementById("circle").clientWidth);
}

function checkDidPlayerWin(heightpx){
	var height = parseInt(heightpx, 10)
	if (height < 20){
		console.log('player won')
		window.document.getElementById("won").style.display = 'block'
	}
}

