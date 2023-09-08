import DeleteForm from "../components/DeleteForm"




function Delete(){
    
    function dummyFetch(id,status){
        return new Promise((resolve,reject)=>{
            if(!id){
                reject("Missing ID")
            }
            else{
                setTimeout(()=>{resolve(status)},3000)
            }
        })
    }
    return(
        <div className="d-flex flex-column justify-content-center ">
            <div className="mx-auto">

            <DeleteForm deletePhoto={dummyFetch}/>
            </div>
        
        </div>
    )
}

export default Delete