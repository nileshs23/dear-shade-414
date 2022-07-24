// Get the navbar
var navbar = document.getElementById("navbar");

import nav from "../components/navbar.js";
navbar.innerHTML = nav();


// document.getElementById("footer1").innerHTML = foot();

// scrolling function to navbar
window.onscroll = function () {
	myFunction();
};
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
