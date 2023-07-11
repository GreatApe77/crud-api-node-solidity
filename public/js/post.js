const submitBtn = document.querySelector("#submit-btn");

async function postForm(description, imageUrl) {
	//const descriptionInput = document.querySelector("#description-input").value;

	//const imageUrlInput = document.querySelector("#image-url-input").value;
    if(!nomEmptyInput(imageUrl,description)) throw new Error("Input must not be empty!")
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

submitBtn.addEventListener("click",async   (event) => {
	event.preventDefault();
    submitBtn.disabled = true
	try {
		const descriptionInput = document.querySelector("#description-input").value;

		const imageUrlInput = document.querySelector("#image-url-input").value;
        const response = await postForm(descriptionInput,imageUrlInput)
        alert("Posted a photo")
        submitBtn.disabled = false
    } catch (error) {
        console.error(error)
        alert("Could not post a photo")
        submitBtn.disabled = false
    }
	//submitBtn.disabled = true;
	//postForm();
});


function nomEmptyInput(imageUrl,description){

    return Boolean(imageUrl && description)

}

