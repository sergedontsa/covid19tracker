import React from "react";
import {Pie} from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './continent.pie.style.scss'
import Image from "react-bootstrap/Image";



const PieChatForContinent = ({
                                 title ,
                                 data,
                                 cases,
                                 todayCases,
                                 deaths,
                                 todayDeaths,
                                 recovered,
                                 active,
                                 critical
                             }) =>(
    <div className="continent-pie-wrapper-wrapper">
        <Card className="card">
            <Card.Header className="card-title">{title}</Card.Header>
            <Card.Body >
                <div className="continent-pie-wrapper">
                <Pie data={data} options={{
                    responsive:true,
                    maintainAspectRatio:false,
                    legend: {
                        display: false,
                        position: 'right'
                    },


                }}/>
                </div>



            </Card.Body>

               <ListGroup variant="flush" size="sm">
                   <ListGroup.Item/>
                <ListGroup.Item className="list-el">
                    <div className="el" >
                        <div className="el-i"><Image alt="cs" className="img-legend" src={require("./imageslegend/cases.png")}/>Cases</div>
                        <div className="el-j"><span>{cases}</span></div>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item className="list-el">
                       <div className="el" >
                           <div className="el-i"><Image className="img-legend" src={require("./imageslegend/todaycases.png")} alt="Rec" />Today's Case</div>
                           <div className="el-j">{todayCases}</div>
                       </div>
                   </ListGroup.Item>
                <ListGroup.Item className="list-el">
                    <div className="el" >
                        <section className="el-i"><Image className="img-legend" src={require("./imageslegend/deaths.png")} alt="Rec" />Deaths</section>
                        <section className="el-j">{deaths}</section>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item className="list-el">
                       <div className="el" >
                           <div className="el-i"><Image className="img-legend" src={require("./imageslegend/todaydeath.png")} alt="Rec" />Today's Deaths</div>
                           <div className="el-j">{todayDeaths}</div>
                       </div>
                   </ListGroup.Item>
                <ListGroup.Item className="list-el">
                    <div className="el" >
                        <section className="el-i"><Image className="img-legend" src={require("./imageslegend/recovery.png")} alt="Rec" />Recovered</section>
                        <section className="el-j">{recovered}</section>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="list-el">
                    <div className="el" >
                        <section className="el-i"><Image className="img-legend" src={require("./imageslegend/active.png")} alt="Rec" />Active</section>
                        <section className="el-j">{active}</section>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item className="list-el">
                       <div className="el" >
                           <section className="el-i"><Image className="img-legend" src={require("./imageslegend/critical.png")} alt="Rec" /> Critical</section>
                           <section className="el-j">{critical}</section>
                       </div>
                   </ListGroup.Item>
            </ListGroup>
        </Card>


    </div>)

export default PieChatForContinent
