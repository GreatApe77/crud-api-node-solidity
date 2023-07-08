const form = document.querySelector("#postForm")


function postForm(){
    
    const descriptionInput = document.querySelector("#description-input").value
    
    const imageUrlInput = document.querySelector("#image-url-input").value

    const data = {
        imageUrl: imageUrlInput,
        description: descriptionInput
    }

    fetch("/photos",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body : JSON.stringify(data)
    })

    .then(res => {
        console.log(res.status)
        return res.json()
    })

    .then(jsonRes =>{

        console.log(jsonRes)
    })

}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    postForm()
})