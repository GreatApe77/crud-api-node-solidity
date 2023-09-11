import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
	 
export default function PostForm({postPhoto}) {
	
	const [loading,setLoading] = useState(false)
	const [description, setDescription] = useState("")
	const [file,setFile] = useState({})
	const [fileInputKey, setFileInputKey] = useState(0);

	//const fileInputRef = useRef(null);
	//Change Handlers
	function handleChange(e){
		setDescription(e.target.value)
	}
	function handleFileInput(e){
		setFile(e.target.files[0])
		
	}
	//submit handlers
    function handleSubmit(e){
		e.preventDefault()
		if(!description) return
		setLoading(true)

		postPhoto(description,file)
		.then((status)=>{
			if(status===201){
				alert("Foto Postada no mural do Filimin!")
			}
			else{
				alert("Erro na postagem!")
			}
			console.log(status)
			console.log(file)
			setLoading(false)
			setDescription("")
			setFile({})
			setFileInputKey((prevKey) => prevKey + 1)
		})
		.catch((err)=>{
			console.log(err)
			setLoading(false)			
			setDescription("")
			setFile({})
			setFileInputKey((prevKey) => prevKey + 1)
		})
	}
	return (
		<div>
			<h1 className="text-white mb-5 mt-5">Post a Photo!</h1>
			<div>
				<Form onSubmit={handleSubmit}>
					<fieldset disabled={loading}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">Description:</Form.Label>
							<Form.Control
								value={description}
								type="text"
								placeholder="Type The Description"
								required
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label className="text-white">Photo:</Form.Label>
							<Form.Control  key={fileInputKey} type="file" required  onChange={handleFileInput}/>
						</Form.Group>

						<Button variant="success" className="mx-auto" type="submit">
							{loading ? (
								<div className="d-flex align-items-center">
									<span >Loading...</span>
									<Spinner animation="border" variant="light" />
								</div>
							) : (
								"POST PHOTO"
							)}
						</Button>
					</fieldset>
				</Form>
			</div>
		</div>
	);
}
