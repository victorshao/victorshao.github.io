function updateMainDisplay(clickedElement) {
	var innerImg = clickedElement.getElementsByTagName('img')[0];
	var mainDisplayImg = document.getElementById('mainDisplay').getElementsByTagName('img')[0];
	mainDisplayImg.src = innerImg.src;
}