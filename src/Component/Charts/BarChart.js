import React, {Component} from "react";
import {Bar} from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import './style/barchart.style.scss'


export default class BarChart extends Component{
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/historical/all?lastdays=45').then(response => response.json())
            .then(object => {
                let casesObject = object.cases;
                let deathsObject = object.deaths;
                let recoverdObject = object.recovered
                let xAxisData = []
                let labelValue = []
                let xDeathValue = []
                let recoveredValue = []


                for(let x in  casesObject){
                    xAxisData.push(casesObject[x])
                    labelValue.push(x)
                    xDeathValue.push(deathsObject[x])
                    recoveredValue.push(recoverdObject[x])
                }
                console.log(xAxisData)
                console.log(labelValue)

                this.setState({
                    data: {
                        labels: labelValue,
                        datasets:[
                            {
                                label: 'CASES',
                                data: xAxisData,
                                backgroundColor: "#b3953b"
                            },
                            {
                                label: 'DEATHS',
                                data: xDeathValue,
                                backgroundColor: "#ff0000"
                            },
                            {
                                label: "RECOVERED",
                                data: recoveredValue,
                                backgroundColor: "#32a852"
                            }
                        ]
                    }

                })

            })
    }
    render() {
        return(

                <Card className="chart-container-bar">
                    <Card.Body>
                        <Card.Text className="chart-bar">

                            <Bar data={this.state.data} options={{
                                responsive: true,
                                hover: true,
                                aspectRatio: 1,
                                maintainAspectRatio: false,
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 20
                                    }
                                }
                           }}/>

                        </Card.Text>
                    </Card.Body>
                </Card>

        )
    }

}
