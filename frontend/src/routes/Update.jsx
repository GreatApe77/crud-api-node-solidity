import { updatePhoto } from "../api-calls/update-photo"
import UpdateForm from "../components/UpdateForm"






function Update(){
    
    /*function dummyFetch(id,description,imageUrl,status){
        return new Promise((resolve,reject)=>{
            if(!id ){
                reject("Missing ID")
            }
            else{
                setTimeout(()=>{resolve(status)},3000)
            }
        })
    }
    */
    return(
        <div className="d-flex flex-column justify-content-center ">
            <div className="mx-auto">

            <UpdateForm updatePhoto={updatePhoto}/>
            </div>
        
        </div>
    )
}

export default Update