'use strict';

let appState = {};

$(window).on('load', function() {
	let images = [	{ filename:  '1.jpg', caption:  'test1'},
					{ filename:  '2.jpg', caption:  'test2'},
					{ filename:  '3.jpg', caption:  'test3'},
					{ filename:  '4.jpg', caption:  'test4'},
					{ filename:  '5.jpg', caption:  'test5'},
					{ filename:  '6.jpg', caption:  'test6'},
					{ filename:  '7.jpg', caption:  'test7'},
					{ filename:  '8.jpg', caption:  'test8'},
					{ filename:  '9.jpg', caption:  'test9'},
					{ filename: '10.jpg', caption: 'test10'},
					{ filename: '11.jpg', caption: 'test11'},
					{ filename: '12.jpg', caption: 'test12'},
					{ filename: '13.jpg', caption: 'test13'},
					{ filename: '14.jpg', caption: 'test14'},
					{ filename: '15.jpg', caption: 'test15'},
					{ filename: '16.jpg', caption: 'test16'},
					{ filename: '17.jpg', caption: 'test17'},
					{ filename: '18.jpg', caption: 'test18'},
					{ filename: '19.jpg', caption: 'test19'},
					{ filename: '20.jpg', caption: 'test20'}];
	let folder = 'img/'
	let currentDisplayedImage = 0;
	appState = {images, folder, currentDisplayedImage};

	configureElements();
	loadImages();
	showImages();
});

function configureElements() {
	const closeOverlay = function(event) {
		if (event.target !== event.currentTarget) return;
		$('#overlay').css('visibility', 'hidden');
	};
	$('#overlay').click(closeOverlay);
	$('#closeButton').click(closeOverlay);
	$('#captionContainer').html("Testing text! To be changed when I have real pictures to upload"); // temporary

	let images = appState.images, folder = appState.folder;
	let galleryNavigate = function(goLeft) {
		appState.currentDisplayedImage = (appState.currentDisplayedImage + (goLeft ? images.length - 1 : 1)) % images.length;
		$('#bigPicViewer').attr('src', folder + images[appState.currentDisplayedImage].filename);
		// $('#captionContainer').html(images[appState.currentDisplayedImage].caption);
	};
	$('#leftNavArrowContainer').click(() => { galleryNavigate(true); });
	$('#rightNavArrowContainer').click(() => { galleryNavigate(false); });
	$('.navArrow').on('dragstart', function(event) { event.preventDefault(); });

	$(document).keyup(function(e) {
		if (e.keyCode == 27)	// ESC
			$('#overlay').css('visibility', 'hidden');
		if ($('#overlay').css('visibility') == 'visible') {
			if (e.keyCode == 37) {	// left arrow
				galleryNavigate(true);
			}
			if (e.keyCode == 39) {	// right arrow
				galleryNavigate(false);
			}
		}
	});
}

function loadImages() {
	let images = appState.images, folder = appState.folder;
	for (let i = 0; i < images.length; i++) {
		const innerDiv = document.createElement('div');
		innerDiv.className = 'picture';
		innerDiv.style['background-image'] = 'url("' + folder + images[i].filename + '")';
		$(innerDiv).click(function() {
			appState.currentDisplayedImage = i;
			$('#bigPicViewer').attr('src', folder + images[i].filename);
			// $('#captionContainer').html(images[appState.currentDisplayedImage].caption);
			$('#bigPicViewer').on('load', function() {
				$('#overlay').css('visibility', 'visible');
			});
		});
		$(innerDiv).insertBefore('#footer');
	}
}

function showImages() {
	const imageList = document.getElementsByClassName('picture');
	window.getComputedStyle(imageList[0]).opacity; // Force first image to opacity 0
	showImage(imageList, 0);
}

function showImage(imageList, imageNum) {
	$(imageList[imageNum]).addClass("showPic");
	if (imageNum + 1 < imageList.length) {
		setTimeout(function() {
			showImage(imageList, imageNum + 1);
		}, 65);
	}
}