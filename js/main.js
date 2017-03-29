var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var folder = 'img/'

images.forEach(function(image) {
	var div = document.createElement('div');
	div.style['background-image'] = 'url("' + folder + image + '")';
	document.body.appendChild(div);
});