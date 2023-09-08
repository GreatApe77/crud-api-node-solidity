import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
	 
export default function DeleteForm({deletePhoto}) {
	
	const [loading,setLoading] = useState(false)
    const [id,setId] = useState("")


	
	//Change Handlers
	function handleChange(e){
		setId(e.target.value)
	}

	//submit handlers
    function handleSubmit(e){
		e.preventDefault()
		if(!id) return
		setLoading(true)

		deletePhoto(id)
		.then((status)=>{
			if (status == 200) {
                alert("Deleted a photo!");
            }
            if (status === 401) {
                alert("Wrong Password!");
            }
            if (status === 500) {
                alert("Could not delete a photo! ");
            }
			console.log(status)
			
			setLoading(false)
			setId("")
		})
		.catch((err)=>{
			console.log(err)
			setLoading(false)
		})
	}
	return (
		<div>
            
			<h1 className="text-white mb-5 mt-5">Delete a photo!</h1>
			<div>
				<Form onSubmit={handleSubmit}>
					<fieldset disabled={loading}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">Input the photo ID to be deleted:</Form.Label>
							<Form.Control
								value={id}
								type="number"
                                min={"0"}
								placeholder="ID"
								required
								onChange={handleChange}
							/>
						</Form.Group>

						<Button variant="success" className="mx-auto" type="submit">
							{loading ? (
								<div className="d-flex align-items-center">
									<span div>Loading...</span>
									<Spinner animation="border" variant="light" />
								</div>
							) : (
								"DELETE PHOTO!"
							)}
						</Button>
					</fieldset>
				</Form>
			</div>
		</div>
	);
}
