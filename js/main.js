'use strict';

var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
			  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
var folder = 'img/'
var currentDisplayedImage = 0;

configureElements();
loadImages();
showImages();

function configureElements() {
	var closeOverlay = function(event) {
		if (event.target !== event.currentTarget) return;
		$('#overlay').css('visibility', 'hidden');
	};
	$('#overlay').click(closeOverlay);
	$('#closeButton').click(closeOverlay);

	var navigateLeft = function() {
		currentDisplayedImage = (currentDisplayedImage - 1 + images.length) % images.length;
		$('#bigPicViewer').attr('src', folder + images[currentDisplayedImage]);
	};
	var navigateRight = function() {
		currentDisplayedImage = (currentDisplayedImage + 1) % images.length;
		$('#bigPicViewer').attr('src', folder + images[currentDisplayedImage]);
	};
	$('#leftNavArrowContainer').click(navigateLeft);
	$('#rightNavArrowContainer').click(navigateRight);

	$(document).keyup(function(e) {
		if (e.keyCode == 27)	// ESC
			$('#overlay').css('visibility', 'hidden');
		if ($('#overlay').css('visibility') == 'visible') {
			if (e.keyCode == 37) {	// left arrow
				navigateLeft();
			}
			if (e.keyCode == 39) {	// right arrow
				navigateRight();
			}
		}
	});
}

function loadImages() {
	for (let i = 0; i < images.length; i++) {
		var innerDiv = document.createElement('div');
		innerDiv.className = 'picture';
		innerDiv.style['background-image'] = 'url("' + folder + images[i] + '")';
		$(innerDiv).click(function() {
			currentDisplayedImage = i;
			$('#bigPicViewer').attr('src', folder + images[i]);
			$('#bigPicViewer').on('load', function() {
				$('#overlay').css('visibility', 'visible');
			});
		});
		$(innerDiv).insertBefore('#footer');
	}
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