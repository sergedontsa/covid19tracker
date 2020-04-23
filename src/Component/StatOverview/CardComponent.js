import React from "react";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import './Style/cardcomponent.style.scss'

const CardComponent = ({end, title})=>(

            <div>
                <Card className="card-stat">
                    <Card.Header>
                        <Card.Title className="num-title">{title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <CountUp className="number"   separator=" " end={end}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
)
export default CardComponent
