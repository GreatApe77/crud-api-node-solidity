function getPhotos() {
	const spinner = createSpinner();
	document.querySelector(".posts").append(spinner);
	fetch("/photos", { method: "GET" })
		.then((data) => {
			deleteSpinner(spinner);
			return data.json();
		})
		.then((jsonData) => {
			renderPhotos(jsonData.reverse());
		});
}

function createSpinner() {
	const mainDiv = document.createElement("div");
	mainDiv.setAttribute("class", "lds-roller");
	for (let i = 0; i < 8; i++) {
		mainDiv.append(document.createElement("div"));
	}
	mainDiv.style.textAlign = "center";
	return mainDiv;
}

function deleteSpinner(spinner) {
	spinner.remove();
}
function renderPhotos(photos) {
	for (let i = 0; i < photos.length; i++) {
		const date = new Date(photos[i].timestamp * 1000).toString();
		const formatedDate = date.split(" ").slice(0, 5);
		document.querySelector(".posts").innerHTML += `
		<div class="post">
		<img src="${photos[i].imageUrl}" alt="Img"/>
		<p class="description">
		${photos[i].description}
		<p>${
			formatedDate[0] +
			" " +
			formatedDate[1] +
			" " +
			formatedDate[2] +
			" " +
			formatedDate[3] +
			" " +
			formatedDate[4]
		}</p>
		</p>
		
		</div>
		`;
	}
}

getPhotos();
