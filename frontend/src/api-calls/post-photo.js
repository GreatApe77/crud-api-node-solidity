export async function postPhoto(description,file){
    try {
         const formData = new FormData()
         formData.append("description",description)
         formData.append("file",file)

         const response = await fetch("/photos",{
             method:"POST",
             body: formData
         })
         return response.status
    } catch (error) {
     throw new Error("Error in posting foto")
    }
 }