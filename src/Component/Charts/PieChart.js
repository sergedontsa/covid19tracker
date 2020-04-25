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
                labels: [],
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
                                backgroundColor:["#EBA434", "#EB3434",  "#1F7D29", "#F5E942", "#FF9E9E",]
                            }
                        ]


                    }
                })
            })

    }

    render() {

        return(

                <Card bg="Light" variant="Light" className="chart-container-pie">
                    <Card.Body>
                            <Card.Text className="chart-pie">

                            <Doughnut data={this.state.DataChart} options={{
                                hover: true,
                                maintainAspectRatio: true,

                           }}
                            />

                        </Card.Text>

                    </Card.Body>
                </Card>

        )
    }

}
export default PieChart
