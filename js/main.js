'use strict';

let appState = {};

$(window).on('load', () => {
	let folder = 'res/content/'
	let currentDisplayedImage = 0;
	appState = {folder, currentDisplayedImage};

	retrieveImages().then(() => {
		configureElements();
		loadImages();
		showImages();
	});
});

function configureElements() {
	const closeOverlay = (event) => {
		if (event.target !== event.currentTarget) return;
		$('#overlay').css('visibility', 'hidden');
	};
	$('#overlay').click(closeOverlay);
	$('#closeButton').click(closeOverlay);
	$('#captionContainer').html("Testing text! To be changed when I have real pictures to upload");

	let images = appState.images;
	let galleryNavigate = (goLeft) => {
		appState.currentDisplayedImage = (appState.currentDisplayedImage + (goLeft ? images.length - 1 : 1)) % images.length;
		$('#bigPicViewer').attr('src', images[appState.currentDisplayedImage].source);
		// $('#captionContainer').html(images[appState.currentDisplayedImage].caption);
	};
	$('#leftNavArrowContainer').click(() => { galleryNavigate(true); });
	$('#rightNavArrowContainer').click(() => { galleryNavigate(false); });
	$('.navArrow').on('dragstart', (event) => { event.preventDefault(); });

	$(document).keyup((e) => {
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

function retrieveImages() {
	return $.get(`https://api.github.com/repos/victorshao/victorshao.github.io/contents/${appState.folder}`, (data) => {
		let images = [];
		data.forEach((val, i) => {
			images.push({name: val.name, source: val.download_url});
		});
		appState.images = images;
	});
}

function loadImages() {
	let images = appState.images;
	for (let i = 0; i < images.length; i++) {
		const innerDiv = document.createElement('div');
		innerDiv.className = 'picture';
		innerDiv.style['background-image'] = `url(${images[i].source})`;
		$(innerDiv).click(() => {
			appState.currentDisplayedImage = i;
			$('#bigPicViewer').attr('src', images[i].source);
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
		setTimeout(() => {
			showImage(imageList, imageNum + 1);
		}, 65);
	}
}