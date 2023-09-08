
import { postPhoto } from "../api-calls/post-photo"
import PostForm from "../components/PostForm"


function Post(){
    
    
    return(
        <div className="d-flex flex-column justify-content-center ">
            <div className="mx-auto">

            <PostForm  postPhoto={postPhoto} />
            </div>
        
        </div>
    )
}

export default Post