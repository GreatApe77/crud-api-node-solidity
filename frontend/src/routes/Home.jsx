import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";


import Spinner from "react-bootstrap/Spinner";
import PhotoAlbum from "../components/PhotoAlbum";
function Home() {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		fetch("/photos", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((jsonRes) => {
				console.log(jsonRes[0].timestamp);
                
				setPhotos(jsonRes.reverse());
			});
	}, []);
	return (
		<div>
			<h1 className="text-center mt-5 text-white">Filimin Moments</h1>
			<div className="text-center">
				{photos.length ? (
					<PhotoAlbum photos={photos}/>
					
				) : (
					<Spinner className="text-white mt-2" />
				)}
			</div>
		</div>
	);
}

export default Home;
