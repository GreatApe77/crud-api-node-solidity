
const uploadForm = document.querySelector("#upload-form");
const uploadFileInput = document.querySelector("#upload-file-input");
const uploadDescriptionInput = document.querySelector(
	"#upload-description-input"
);



uploadForm.addEventListener("submit", (event) => {

	event.preventDefault();
	
	const file = uploadFileInput.files[0];
	
	uploadForm.children[3].style.display = "none"
	const spinner = createSpinner()
	uploadForm.append(spinner)
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
				deleteSpinner(spinner)
				uploadForm.children[3].style.display = "inline"
				alert("Posted a photo!");
			} else {
				deleteSpinner(spinner)
				uploadForm.children[3].style.display = "inline"
				alert("Could not post a photo!");
			}
		})

		.catch((err) => console.log(err));
});


function createSpinner(){


	const mainDiv = document.createElement("div")
	mainDiv.setAttribute("class","lds-roller")
	for (let i = 0; i < 8; i++) {
		mainDiv.append(document.createElement("div"))
		
	}
	
	return mainDiv
}

function deleteSpinner(spinner){
	spinner.remove()
}