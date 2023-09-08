

export async function searchPhoto(id){
    try {
        const response = await fetch(`/photos/${id}`)
        const photoData = await response.json()
        return photoData
    } catch (error) {
        throw new Error("Could not fetch data")
    }
}