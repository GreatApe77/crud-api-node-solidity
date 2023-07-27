

function getPhotos() {
	fetch("/photos", { method: "GET" })
		.then((data) => data.json())
		.then((jsonData) => {

			renderPhotos(jsonData.reverse())
			
		});
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