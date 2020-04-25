import React from "react";
import CountUp from "react-countup";
import Card from "react-bootstrap/Card";
import './Style/cardcomponent.style.scss'

const CardComponent = ({end, title, classValue})=>(

            <div>
                <Card className="card-stat" style={{backgroundColor: "#D1ECF1", borderRadius:0}}>
                    <Card.Header>
                        <Card.Title className="num-title">{title}</Card.Title>
                    </Card.Header>
                    <Card.Body >
                            <div className="number">
                            <CountUp    separator=" " end={end}/>
                            </div>
                    </Card.Body>
                </Card>
            </div>
)
export default CardComponent
