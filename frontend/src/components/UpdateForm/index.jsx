import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
	 
export default function UpdateForm({updatePhoto}) {
	
	const [loading,setLoading] = useState(false)
    const [id,setId] = useState("")
    const [description,setDescription] = useState("")
    const [imageUrl,setImageUrl] = useState("")

	
	//Change Handlers
	function handleDescriptionChange(e){
		setDescription(e.target.value)
	}
    function handleImageUrlChange(e){
        setImageUrl(e.target.value)
    }
    function handleIdChange(e){
        setId(e.target.value)

    }
	//submit handlers
    function handleSubmit(e){
		e.preventDefault()
		if(!id) return
        if(!description) return
        if(!imageUrl) return
		setLoading(true)
        //https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png

		updatePhoto(id,description,imageUrl)
		.then((status)=>{
			if (status == 201) {
                alert("Updated a photo!");
            }
            if (status === 401) {
                alert("Wrong Password!");
            }
            if (status === 500) {
                alert("Could not Update a photo! ");
            }
			console.log(status)
			
			setLoading(false)
			setId("")
            setImageUrl("")
            setDescription("")
		})
		.catch((err)=>{
			console.log(err)
			setLoading(false)
            setId("")
            setImageUrl("")
            setDescription("")
		})
	}
	return (
		<div>
            
			<h1 className="text-white mb-5 mt-5">Update a photo!</h1>
			<div>
				<Form onSubmit={handleSubmit}>
					<fieldset disabled={loading}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">Input the photo ID to be updated:</Form.Label>
							<Form.Control
								value={id}
								type="number"
                                min={"0"}
								placeholder="ID"
								required
								onChange={handleIdChange}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">New Description :</Form.Label>
							<Form.Control
								value={description}
								type="text"
                                
								placeholder="Description"
								required
								onChange={handleDescriptionChange}
							/>
						</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">New Image URL :</Form.Label>
							<Form.Control
								value={imageUrl}
								type="text"
                                
								placeholder="URL"
								required
								onChange={handleImageUrlChange}
							/>
						</Form.Group>
						<Button variant="success" className="mx-auto" type="submit">
							{loading ? (
								<div className="d-flex align-items-center">
									<span div>Loading...</span>
									<Spinner animation="border" variant="light" />
								</div>
							) : (
								"UPDATE PHOTO!"
							)}
						</Button>
					</fieldset>
				</Form>
			</div>
            
		</div>
	);
}
