import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import './style/polachart.style.scss'

class PieChart extends Component{
    constructor() {
        super();
        this.state = {
            data:{},
            DataChart:{
                 datasets: [
                    {
                        label: [],
                        data:[],
                        backgroundColor: []
                    }
                ]
            }
        }
    }

    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/all').then(response => response.json())
            .then(object =>{
                let data = []
                let label = []
                for(const x in object){
                    if(x !== 'updated' && x !== 'tests' && x!=='casesPerOneMillion' && x!== 'deathsPerOneMillion'
                    && x !== 'todayCases' && x!== 'todayDeaths' && x !== 'affectedCountries' && x !== 'testsPerOneMillion') {
                        data.push(object[x])
                        label.push(x.toUpperCase())
                    }
                }

                this.setState({DataChart:{
                        labels: label,
                        datasets: [
                            {
                                fontColor:'black',
                                data:data,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f']
                            }
                        ]


                    }
                })
            })

    }

    render() {

        return(

                <Card className="chart-container-pie">
                    <Card.Body>
                        <Card.Title>Pie</Card.Title>
                        <Card.Text>
                            <div className="chart-pie">
                            <Doughnut  data={this.state.DataChart} options={{
                                hover: true,
                                maintainAspectRatio: true,

                           }}
                            />
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>

        )
    }

}
export default PieChart
