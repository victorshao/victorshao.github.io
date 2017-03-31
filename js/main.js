var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
			  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
var folder = 'img/'

loadImages();
showImages();

function loadImages() {
	var footer = document.getElementById('footer');
	images.forEach(function(image) {
		var div = document.createElement('div');
		div.className = 'picture';
		div.style['background-image'] = 'url("' + folder + image + '")';
		document.body.insertBefore(div, footer);
	});
}

function showImages() {
	var imageList = document.getElementsByClassName('picture');
	window.getComputedStyle(imageList[0]).opacity;
	showImage(imageList, 0);
}

function showImage(imageList, imageNum) {
	imageList[imageNum].style.opacity = 1;
	if (imageNum + 1 < imageList.length) {
		setTimeout(function() {
			showImage(imageList, imageNum + 1);
		}, 100);
	}
}