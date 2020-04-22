import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './newspage.style.scss'



const  CardComponent = ({title, ...newObject}) =>
    (
            <div>
                <Card className="cardNews">
                    <Card.Img variant="top" src={newObject.urlToImage} />
                    <Card.Body>
                        <Card.Title>{newObject.title}</Card.Title>
                        <Card.Text className="text">
                            {newObject.description}
                            <br/>
                            <span>{newObject.publishedAt}</span>
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button variant="outline-secondary">
                            <Card.Link href={newObject.url}>Learn more</Card.Link>
                        </Button>

                    </Card.Body>
                </Card>
            </div>
)

export default CardComponent
