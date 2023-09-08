

export async function deletePhoto(id,password){
    try {
        const response = await fetch(`/photos/${id}`,{
            method:"DELETE",
            headers: {
				authorization:password,
			},
            
        })
        return response.status
    } catch (error) {
        throw new Error("Error in Api Call")
    }

}