import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";


import Spinner from "react-bootstrap/Spinner";
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
					photos.map((photo) => <CustomCard imageUrl={photo.imageUrl} timestamp={photo.timestamp} description={photo.description} />)
				) : (
					<Spinner className="text-white mt-2" />
				)}
			</div>
		</div>
	);
}

export default Home;
