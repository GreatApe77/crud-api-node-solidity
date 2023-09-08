import  Spinner  from "react-bootstrap/Spinner"
import SearchForm from "../components/SearchForm"
import { searchPhoto } from "../api-calls/search-photo";
import CustomCard from "../components/CustomCard";
import { useState } from "react";

import notFoundSVG from "../assets/not-found.svg"

function Search(){
    const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  /*
    function _dummyPhotoLoad(id){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const dummyPhoto = {
                    imageUrl:"https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",
                    description:" Foto generica",
                    timestamp:1694197060
                }
                resolve(dummyPhoto)
            },3000)
        })    
    }
    */
    const searchPhotoById = async (id)=>{
        setLoading(true)
        try {
            const data = await searchPhoto(id); // Call the searchPhoto function
            //const data = await _dummyPhotoLoad(id)
            setPhotoData(data);
        } catch (error) {
            console.log(error)
            throw new Error("Deu error AqUI")
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="d-flex flex-column justify-content-center ">
            <div className="mx-auto">
                <SearchForm searchPhoto={searchPhotoById}/>
                <div className="d-flex flex-column justify-content-center ">
                    {loading? (
                          <div className="text-center mt-3">
                          <Spinner animation="grow" variant="secondary" />
                        </div>
                    ):(
                        photoData&& (
                            photoData.id?(
                            <CustomCard
                            imageUrl={photoData.imageUrl} 
                            description={photoData.description}
                            timestamp={photoData.timestamp}
                             />
                            ):(
                                <CustomCard
                            imageUrl={notFoundSVG} 
                            description={"FOTO NAO EXISTE ...Ela pode ter sido apagada ou até mesmo nunca criada... :("}
                            timestamp={Number("0000000000")}
                             />
                            )
                            
                        )
                    )}
                </div>
            </div>
        
        </div>
    )
}

export default Search