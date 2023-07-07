function getPhotos() {
	fetch("/photos", { method: "GET" })
		.then((data) => data.json())
		.then((jsonData) => {
			console.log(jsonData);
			const posts = [];
			for (let i = 0; i < jsonData.length; i++) {
				const photoDiv = document.createElement("div");
				const photoImg = document.createElement("img");
				const photoParagraph = document.createElement("p");
				photoParagraph.className = "description";
				photoImg.src = jsonData[i].imageUrl;
				photoParagraph.textContent = jsonData[i].description;
				photoDiv.className = "post";
				photoDiv.append(photoImg, photoParagraph);
				posts.push(photoDiv);
			}
			for (let i = 0; i < posts.length; i++) {
				document.querySelector(".posts").append(posts[i]);
			}
		});
}

getPhotos();
