'use strict';

var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
			  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
var folder = 'img/'

loadImages();
showImages();

function loadImages() {
	var footer = document.getElementById('footer');
	images.forEach(function(image) {
		var outerDiv = document.createElement('div');
		var innerDiv = document.createElement('div');
		outerDiv.appendChild(innerDiv);
		outerDiv.className = 'pictureContainer';
		innerDiv.className = 'picture';
		innerDiv.style['background-image'] = 'url("' + folder + image + '")';
		$(innerDiv).click(function() {
			$('#overlay').css('visibility', 'visible');
			$('#pictureViewer').css('visibility', 'visible');
			$('#pictureViewer').attr('src', folder + image);
		});
		document.body.insertBefore(outerDiv, footer);
	});
	$('#overlay').click(function(e) {
		if (e.target !== e.currentTarget) return;
		$(this).css('visibility', 'hidden');
		$('#pictureViewer').css('visibility', 'hidden');
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
		// setTimeout(function() {
			showImage(imageList, imageNum + 1);
		// }, 100);
	}
}

function overlayBackgroundClicked() {

}