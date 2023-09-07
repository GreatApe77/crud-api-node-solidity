import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

export default function PostForm({ loading }) {
    
    
	return (
		<>
			<h1 className="text-white mb-5 mt-5">Post a Photo!</h1>
			<div>
				<Form>
					<fieldset disabled={loading}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="text-white">Description:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Type The Description"
								required
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label className="text-white">Photo:</Form.Label>
							<Form.Control type="file" required />
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
		</>
	);
}
