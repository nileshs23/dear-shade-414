let data = JSON.parse(localStorage.getItem("dataOfDay"));
// console.log(data);

let com = data.filter((data) => data.category == "Communication");
// console.log(com);

let gen = data.filter((data) => data.category == "General");
// console.log(gen);

let genContainer = document.getElementById("general");
let comContainer = document.getElementById("communication");

function setData(array, container) {
	let totalTime = 0;
	array.forEach((element) => {
		// let div = document.createElement("div");
		// div.setAttribute("class", "wrapper");
		totalTime += element.time;
	});
	let time = document.createElement("p");
	time.innerText = `Total time: ${convertToHr(totalTime)} minutes remaining`;
	container.append(time);
	// console.log(totalTime);
}

function convertToHr(val) {
	var hours = Number(val) / 60;
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);

	// console.log(rhours, rminutes);
	if (rminutes == 0) {
		return `${rhours} hours`;
	} else {
		return `${rhours} hh :${rminutes} mm`;
	}
}

setData(gen, genContainer);
setData(com, comContainer);
