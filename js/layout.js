$(document).ready(function() {
	showDivs(slideIndex);
	showPage(sIndex);

	setInterval(function() {
		plusDivs(1);
	}, 5000);
	setInterval(function() {
		nlink(1);
	}, 5000);
});
	var slideIndex = 1;
	var sIndex = 1;

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function nlink(n) {
	showPage(sIndex += n);
}

function plink(n) {
	showPage(sIndex -= n);
}


function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-red", "");
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " w3-red";
}

function showPage(n) {
	var i;
	var x = document.getElementsByClassName("clpage");
	if (n > x.length) {sIndex = 1}
	if (n < 1) {sIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[sIndex-1].style.display = "block"; 
}