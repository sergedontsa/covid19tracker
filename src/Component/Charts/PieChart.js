import React, {Component} from "react";
import { Pie} from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import './style/polachart.style.scss'

class PolarChart extends Component{
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
            <div className="chart-container">
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            <Pie data={this.state.DataChart} options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                hover: true,

                            }}
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    }

}
export default PolarChart
