const searchBtn = document.querySelector("#search-btn");

async function searchPhoto(index) {
	try {
		const photo = await fetch(`/photos/${index}`, { method: "GET" });
		return photo;
	} catch (error) {
		throw new Error("Could not fetch photo");
	}
}

function nomEmptyForm(input) {
	return Boolean(input);
}

searchBtn.addEventListener("click", async () => {
	document.querySelector(".posts").innerHTML = "";
	const searchId = document.querySelector("#index-input").value;
	console.log(searchId);
	if (!nomEmptyForm(searchId)) {
		alert("Invalid input");
		return;
	}
	try {
		const response = await searchPhoto(searchId);
		const photo = await response.json();
		console.log(photo);
		if (Boolean(photo.imageUrl) && Boolean(photo.description)) {
			const photoDiv = document.createElement("div");
			const photoImg = document.createElement("img");
			const photoParagraph = document.createElement("p");
			photoImg.src = photo.imageUrl;
			photoParagraph.textContent = photo.description;
			photoDiv.className = "post";
			photoDiv.append(photoImg);
			photoDiv.append(photoParagraph);
			document.querySelector(".posts").append(photoDiv);
		}
        else{
            alert("Photo Does not exist")
        }
	} catch (error) {
		alert(error);
	}
});
