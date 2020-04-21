import React from "react";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import './Style/cardcomponent.style.scss'

const CardComponent = ({end, title})=>(

            <div>
                <Card className="card">
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <CountUp  separator=" " end={end}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
)
export default CardComponent
