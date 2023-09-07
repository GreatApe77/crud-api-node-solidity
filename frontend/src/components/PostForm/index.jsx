import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
	 
export default function PostForm({ loading,postPhoto }) {
	

	const [description, setDescription] = useState("")
	const [file,setFile] = useState([])
	function handleChange(e){
		setDescription(e.target.value)
	}
	function handleFileInput(e){
		setFile(e.target.files[0])
	}
    function handleSubmit(e){
		e.preventDefault()
		postPhoto(description,file)
		.then((res)=>{
			
			console.log(res)
			console.log(file)
			
			
		})
		.catch((err)=>{
			console.log(err)
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
								type="text"
								placeholder="Type The Description"
								required
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label className="text-white">Photo:</Form.Label>
							<Form.Control type="file" required  onChange={handleFileInput}/>
						</Form.Group>

						<Button variant="success" className="mx-auto" type="submit">
							{loading ? (
								<div className="d-flex align-items-center">
									<span div>Loading...</span>
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
