const submitBtn = document.querySelector("#submit-btn");
const uploadForm = document.querySelector("#upload-form");
const uploadFileInput = document.querySelector("#upload-file-input");
const uploadDescriptionInput = document.querySelector(
	"#upload-description-input"
);
async function postForm(description, imageUrl) {
	//const descriptionInput = document.querySelector("#description-input").value;

	//const imageUrlInput = document.querySelector("#image-url-input").value;
	if (!nomEmptyInput(imageUrl, description))
		throw new Error("Input must not be empty!");
	const data = {
		imageUrl: imageUrl,
		description: description,
	};
	try {
		const response = await fetch("/photos", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		throw new Error(error);
	}
}

submitBtn.addEventListener("click", async (event) => {
	event.preventDefault();
	submitBtn.disabled = true;

	try {
		const descriptionInput = document.querySelector("#description-input").value;

		const imageUrlInput = document.querySelector("#image-url-input").value;
		const response = await postForm(descriptionInput, imageUrlInput);

		submitBtn.disabled = false;
		clearInput();
		alert(response.message);
	} catch (error) {
		clearInput();
		console.error(error);
		alert("Could not post a photo");
		submitBtn.disabled = false;
	}
	//submitBtn.disabled = true;
	//postForm();
});

function nomEmptyInput(imageUrl, description) {
	return Boolean(imageUrl && description);
}

function clearInput() {
	document.querySelector("#description-input").value = "";

	document.querySelector("#image-url-input").value = "";
}

uploadForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const file = uploadFileInput.files[0];
	console.log(file);
	const description = uploadDescriptionInput.value;
	const formData = new FormData();
	formData.append("description", description);
	formData.append("file", file);
	fetch("/photos", {
		method: "POST",
		body: formData,
	})
		.then((res) => {
			if (res.status === 201) {
				alert("Posted a photo!");
			} else {
				alert("Could not post a photo!");
			}
		})

		.catch((err) => console.log(err));
});
