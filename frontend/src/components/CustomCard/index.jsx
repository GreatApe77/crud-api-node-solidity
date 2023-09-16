import React from "react";
import { Card } from "react-bootstrap";

import dayjs from "dayjs";


export default function CustomCard({ imageUrl, description, timestamp,id }) {
    const formattedDate = dayjs(timestamp*1000).format("DD/MM/YYYY")
    return (
    <Card className="mx-auto bg-dark text-light mt-5" style={{ width: "18rem" }}>
      <Card.Img className="bg-dark p-2 rounded" variant="top" src={imageUrl} alt="Card image" />
      <Card.Body>
        <Card.Text><h3 >{description}</h3></Card.Text>
        <Card.Text>  {formattedDate} <strong>ID:</strong><span>{id}</span> </Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
      
    </Card>
  );
}
