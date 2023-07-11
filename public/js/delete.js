const indexInput = document.querySelector("#index-input")
const passwordInput = document.querySelector("#password-input")
const deleteBtn  = document.querySelector("#delete-btn")



deleteBtn.addEventListener("click",async()=>{
    
    if(!nomEmptyInput(indexInput.value,passwordInput.value)){
        alert("Invalid input")
        return
    }
    try {
        const response = await fetch(`/photos/${indexInput.value.toString()}`,{
            method:"DELETE",
            headers:{
                authorization:passwordInput.value
            }

        })
        if(response.status ==200){
            alert("Deleted a photo!")
        } if(response.status===401){
            alert("Wrong Password!")

        }
        if(response.status===500){
            alert("Could not delete a photo! ")
        }
        
    } catch (error) {
        alert("Could not delete a photo!")
    }
})


function nomEmptyInput(id,password){
    return Boolean(id) && Boolean(password)
}