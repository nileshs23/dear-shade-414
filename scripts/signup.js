import { navbar, sidebar } from "../components/nav1033.js";
let n = document.getElementById("navbar");
console.log(n);
n.innerHTML = navbar();

let b = document.getElementById("box1");
b.innerHTML = sidebar();

function User(name, email, password) {
	this.name = name;
	this.email = email;
	this.password = password;
}
let arr = JSON.parse(localStorage.getItem("user_data")) || [];

document.getElementById("submit").addEventListener("click", function () {
	Signup();
});
function Signup() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	if (name == "" || email == "" || password == "") {
		alert("Please Provide correct credentials !..");
	} else {
		let n = new User(name, email, password);
		arr.push(n);
		localStorage.setItem("user_data", JSON.stringify(arr));
		alert("Signup Sucessfull..Please login !");
		window.location.href = "login.html";
	}
}
