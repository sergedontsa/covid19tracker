import React from "react";
import {Doughnut} from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './continent.pie.style.scss'


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
    <div>
        <Card>
            <Card.Header className="card-title">{title}</Card.Header>
            <Card.Body>
                <Doughnut data={data} options={{

                    responsive:true,
                    maintainAspectRatio:false,
                    legend: {
                        display: false,
                        position: 'bottom'
                    },


                }}/>



            </Card.Body>

               <ListGroup variant="flush" size="sm">
                   <ListGroup.Item/>
                <ListGroup.Item>
                    <div className="el" >
                        <div className="el-i">Cases</div>
                        <div className="el-j"><span>{cases}</span></div>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item>
                       <div className="el" >
                           <div className="el-i">Today's Case</div>
                           <div className="el-j">{todayCases}</div>
                       </div>
                   </ListGroup.Item>
                <ListGroup.Item>
                    <div className="el" >
                        <section className="el-i">Deaths</section>
                        <section className="el-j">{deaths}</section>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item>
                       <div className="el" >
                           <div className="el-i">Today's Deaths</div>
                           <div className="el-j">{todayDeaths}</div>
                       </div>
                   </ListGroup.Item>
                <ListGroup.Item>
                    <div className="el" >
                        <section className="el-i">Recovered</section>
                        <section className="el-j">{recovered}</section>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="el" >
                        <section className="el-i">Active</section>
                        <section className="el-j">{active}</section>
                    </div>
                </ListGroup.Item>
                   <ListGroup.Item>
                       <div className="el" >
                           <section className="el-i">Critical</section>
                           <section className="el-j">{critical}</section>
                       </div>
                   </ListGroup.Item>
            </ListGroup>
        </Card>


    </div>)

export default PieChatForContinent
