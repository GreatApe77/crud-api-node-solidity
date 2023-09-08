export async function updatePhoto(id,description,imageUrl){
    const data = {
		imageUrl: imageUrl,
		description: description
	};
    try {
        
        const response = await fetch(`/photos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.status
    } catch (error) {
        throw new Error("Error in update fetch")
    }

}