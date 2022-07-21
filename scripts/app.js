let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let data = JSON.parse(localStorage.getItem("dataOfDay")) || [];

let container = document.getElementById("cards");

let totalTime = 0;
setData();

function setData() {
	days.forEach((element) => {
		let div = document.createElement("div");
		div.setAttribute("class", "wrapper");

		let hr = document.createElement("hr");

		let day = document.createElement("h1");
		day.setAttribute("id", "day");
		day.innerText = element;

		let submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("class", "submitBtn");
		submit.value = "New entry";
		submit.addEventListener("click", function () {
			saveData(element);
		});

		div.append(day, hr, submit);
		container.append(div);

		data.forEach((ele) => {
			// console.log(ele.day);
			if (ele.day === element) {
				let card = document.createElement("div");
				card.setAttribute("class", "entry-card");

				let title = document.createElement("p");
				title.setAttribute("id", "title");
				title.innerText = ele.title;

				let category = document.createElement("p");
				category.setAttribute("id", "category");
				category.innerText = ele.category;

				let time = document.createElement("p");
				time.setAttribute("id", "time");
				time.innerText = convertToHr(ele.time);

				let wages = `₹ ${ele.time * 0.25}`;
				totalTime += ele.time;
				// console.log(wages);

				card.append(title, time, category, wages);
				div.append(card);
			}
		});
	});
}

function saveData(ele) {
	event.preventDefault();
	console.log("Clicked Button", ele);
	localStorage.setItem("day", ele);
	window.location.href = "./project.html";
}

// console.log(data[1]);

function convertToHr(val) {
	var hours = Number(val) / 60;
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);

	// console.log(rhours, rminutes);
	if (rminutes == 0) {
		return `${rhours}hh`;
	} else {
		return `${rhours}hh :${rminutes}mm`;
	}
}

document.getElementById("total").innerText = convertToHr(totalTime);
