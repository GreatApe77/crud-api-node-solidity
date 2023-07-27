const indexInput = document.querySelector("#index-input");
const imageUrlInput = document.querySelector("#imageUrl-input");
const descriptionInput = document.querySelector("#description-input");
const updateBtn = document.querySelector("#update-btn");

updateBtn.addEventListener("click", async () => {
	if (
		!nomEmptyInput(
			indexInput.value,
			imageUrlInput.value,
			descriptionInput.value
		)
	) {
		alert("Invalid input!");
		return;
	}

	const data = {
		imageUrl: imageUrlInput.value,
		description: descriptionInput.value,
	};
	console.log(data);
	const response = await fetch(`/photos/${indexInput.value}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (response.status === 201) {
		alert("Updated a photo!");
	} else {
		alert("Could not update a photo");
	}
});

function nomEmptyInput(id, url, descriptionInput) {
	return Boolean(id) && Boolean(url) && Boolean(descriptionInput);
}
