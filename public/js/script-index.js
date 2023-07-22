function getPhotos() {
	fetch("/photos", { method: "GET" })
		.then((data) => data.json())
		.then((jsonData) => {
			const photos = jsonData.reverse();
			renderPhotos(photos);
		});
}

//getPhotos();

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

async function loadMore(fromIndex, toIndex) {
	try {
		const response = await fetch(`/photos?from=${fromIndex}&to=${toIndex}`);
		const jsonPhotoSlice = await response.json();
		return jsonPhotoSlice;
	} catch (error) {
		throw new Error(error);
	}
}
async function seeMore(index) {
	const photosSlice = await loadMore(index, index + 10);
	renderPhotos(photosSlice);
}


function listen(){
	let i = 0
	let max = 86
	document.getElementById("see-more-btn").addEventListener("click",()=>{
		seeMore(i)
		i = i+5		
	})
}
listen()