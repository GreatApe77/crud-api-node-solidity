import { useState } from "react"
import PostForm from "../components/PostForm"


function Post(){
    const [loading, setLoading] = useState(false)
    function postPhoto(description,file){
        return new Promise((resolve,reject)=>{
            setLoading(true)
            if(description&&file){
                setTimeout(()=>{
                    setLoading(false)
                    resolve(`Description: ${description} and file is here too`)
                },3000)
            }else{
                setLoading(false)
                reject("No Description !")
            }
            
        })
    }
    return(
        <div className="d-flex flex-column justify-content-center ">
            <div className="mx-auto">

            <PostForm loading={loading} postPhoto={postPhoto} />
            </div>
        
        </div>
    )
}

export default Post