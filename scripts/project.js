let container = document.getElementById("projectForm");

setData();

function setData() {
	let form = document.createElement("form");

	let title = document.createElement("input");
	title.setAttribute("type", "text");
	title.setAttribute("id", "title");

	let div = document.createElement("div");

	let category = document.createElement("select");
	category.setAttribute("id", "category");

	let gen = document.createElement("option");
	gen.innerText = "General";
	gen.value = "General";

	let com = document.createElement("option");
	com.innerText = "Communication";
	com.value = "Communication";

	category.append(gen, com);

	let h1 = document.createElement("h1");
	h1.innerText = "00:00:00";
	h1.setAttribute("id", "log");

	let timer1 = document.createElement("input");
	timer1.setAttribute("type", "button");
	timer1.value = 15;
	timer1.addEventListener("click", function () {
		addTimer(timer1.value);
	});

	let timer2 = document.createElement("input");
	timer2.setAttribute("type", "button");
	timer2.value = 30;
	timer2.addEventListener("click", function () {
		addTimer(timer2.value);
	});

	let timer3 = document.createElement("input");
	timer3.setAttribute("type", "button");
	timer3.value = 45;
	timer3.addEventListener("click", function () {
		addTimer(timer3.value);
	});

	let submit = document.createElement("input");
	submit.setAttribute("type", "submit");

	div.append(h1, timer1, timer2, timer3);

	form.append(title, category, div, submit);
	container.append(form);
}

let totalTime = 0;
function addTimer(val) {
	// document.getElementById
	console.log(val);
	// console.log(typeof val);
	totalTime += Number(val);
	var hours = totalTime / 60;
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);

	// console.log(rhours, rminutes);
	document.getElementById("log").innerText = `0${rhours}:${rminutes}:00`;
}

document.querySelector("form").addEventListener("submit", saveData);

let data = JSON.parse(localStorage.getItem("dataOfDay")) || [];
let day = localStorage.getItem("day");

function saveData() {
	// event.preventDefault();
	let title = document.querySelector("#title").value;
	let category = document.getElementById("category").value;
	let time = totalTime;

	let entry = new dataConstructor(title, category, time, day);

	data.push(entry);

	localStorage.setItem("dataOfDay", JSON.stringify(data));
}

// console.log(data);

function dataConstructor(title, category, time, day) {
	this.title = title;
	this.category = category;
	this.time = time;
	this.day = day;
}
