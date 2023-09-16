//import { useState } from "react";
import CustomCard from "../CustomCard";

export default function PhotoAlbum({ photos }) {
	/* const [dummy, setdummy] = useState([
		{
			description: "First description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847912,
		},
		{
			description: "Second description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847913,
		},
		{
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
        {
			description: "Third description",
			imageUrl: "http://localhost:5173/src/assets/filimin_zap_arrumado.png",
			timestamp: 12847914,
		},
	]
)
	*/
	return (
		<div className="album py-5 ">
			<div className="container">
				<div className="row">
					{photos.length ? (
						photos.map((photo, key) => (
							<CustomCard
								description={photo.description}
								imageUrl={photo.imageUrl}
								timestamp={photo.timestamp}
								id={photo.id}
								key={key}
							/>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}
