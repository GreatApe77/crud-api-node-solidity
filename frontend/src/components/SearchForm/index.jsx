

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
	 
export default function SearchForm({searchPhoto}) {
	
	const [loading,setLoading] = useState(false)
    const [id,setId] = useState("")
    

	
	//Change Handlers
	function handleIdChange(e){
		setId(e.target.value)
	}

	//submit handlers
    function handleSubmit(e){
		e.preventDefault()
		if(!id) return

		setLoading(true)

		searchPhoto(id)

		.catch((err)=>{
			console.log(err)
		}).finally(()=>{
			setId("")
            setLoading(false)

        })
	}
	return (
		<div>
            
			<h1 className="text-white mb-5 mt-5">Search a photo!</h1>
			<div>
				<Form onSubmit={handleSubmit}>
					<fieldset disabled={loading}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">Input the photo ID to be displayed:</Form.Label>
							<Form.Control
								value={id}
								type="number"
                                min={"0"}
								placeholder="ID"
								required
								onChange={handleIdChange}
							/>
						</Form.Group>
                    

						<Button variant="success" className="mx-auto" type="submit">
							{loading ? (
								<div className="d-flex align-items-center">
									<span div>Loading...</span>
									<Spinner animation="border" variant="light" />
								</div>
							) : (
								"SEARCH"
							)}
						</Button>
					</fieldset>
				</Form>
			</div>
            
		</div>
	);
}
