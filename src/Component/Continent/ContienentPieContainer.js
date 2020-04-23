import React, {Component} from "react";
import PieChatForContinent from "./PieChatForContinent";
import './contient.style.scss'



export default class ContinentPieContainer extends Component{

    constructor() {
        super();
        this.state ={
            europeDataSet:{},
            africaDataSet:{},
            northAmerica:{},
            asiaData:{},
            southAmericaData:{},
            oceaniaData:{},
            europe_data : [],
            africa_data : [],
            north_america : [],
            asia_data :[],
            south_america : [],
            oceania_data : [],

        }
    }

    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/continents?yesterday=true')
            .then(response => response.json())
            .then(object =>{
                let europeObject = object.filter(o => o.continent === 'Europe')
                let africaObject = object.filter(o => o.continent === 'Africa')
                let northAmericaObject = object.filter(o => o.continent === 'North America')
                let asiaObject = object.filter(o => o.continent === 'Asia')
                let southAmericaObject = object.filter(o => o.continent === 'outh America')
                let oceaniaObject = object.filter(o => o.continent === 'Oceania')
                let label = ["Cases", "Today's Cases", 'Deaths', "Today's Deaths", 'Recovered', 'Active', "Critical"]

                let europe_data = []
                let africa_data = []
                let north_america = []
                let asia_data =[]
                let south_america = []
                let oceania_data = []

                try{
                    europe_data.push(europeObject[0].cases)
                    europe_data.push(europeObject[0].todayCases)
                    europe_data.push(europeObject[0].deaths)
                    europe_data.push(europeObject[0].todayDeaths)
                    europe_data.push(europeObject[0].recovered)
                    europe_data.push(europeObject[0].active)
                    europe_data.push(europeObject[0].critical)

                    africa_data.push(africaObject[0].cases)
                    africa_data.push(africaObject[0].todayCases)
                    africa_data.push(africaObject[0].deaths)
                    africa_data.push(africaObject[0].todayDeaths)
                    africa_data.push(africaObject[0].recovered)
                    africa_data.push(africaObject[0].active)
                    africa_data.push(africaObject[0].critical)

                    north_america.push(northAmericaObject[0].cases)
                    north_america.push(northAmericaObject[0].todayCases)
                    north_america.push(northAmericaObject[0].deaths)
                    north_america.push(northAmericaObject[0].todayDeaths)
                    north_america.push(northAmericaObject[0].recovered)
                    north_america.push(northAmericaObject[0].active)
                    north_america.push(northAmericaObject[0].critical)

                    asia_data.push(asiaObject[0].cases)
                    asia_data.push(asiaObject[0].todayCases)
                    asia_data.push(asiaObject[0].deaths)
                    asia_data.push(asiaObject[0].todayDeaths)
                    asia_data.push(asiaObject[0].recovered)
                    asia_data.push(asiaObject[0].active)
                    asia_data.push(asiaObject[0].critical)

                    south_america.push(southAmericaObject[0].cases)
                    south_america.push(southAmericaObject[0].todayCases)
                    south_america.push(southAmericaObject[0].deaths)
                    south_america.push(southAmericaObject[0].todayDeaths)
                    south_america.push(southAmericaObject[0].recovered)
                    south_america.push(southAmericaObject[0].active)
                    south_america.push(southAmericaObject[0].critical)

                    oceania_data.push(oceaniaObject[0].cases)
                    oceania_data.push(oceaniaObject[0].todayCases)
                    oceania_data.push(oceaniaObject[0].deaths)
                    oceania_data.push(oceaniaObject[0].todayDeaths)
                    oceania_data.push(oceaniaObject[0].recovered)
                    oceania_data.push(oceaniaObject[0].active)
                    oceania_data.push(oceaniaObject[0].critical)

                }catch (e) {
                    console.log("The following error occured: " + e)

                }
                this.setState({
                    europeDataSet:{
                        labels: label,
                        datasets: [
                            {
                                data:europe_data,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    africaDataSet:{
                        labels: label,

                        datasets: [
                            {
                                data:africa_data,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    northAmerica:{
                        labels: label,
                        datasets: [
                            {

                                data:north_america,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    asiaData:{
                        labels: label,
                        datasets: [
                            {

                                data:asia_data,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    southAmericaData:{
                        labels: label,
                        datasets: [
                            {

                                data:south_america,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    oceaniaData:{
                        labels: label,
                        datasets: [
                            {

                                data:oceania_data,
                                backgroundColor: ["#eba434", "#eb3434","#1f7d29", '#7d591f', '#7d1f1f','#7d591f', '#7d1f1f']
                            }
                        ]
                    },
                    europe_data : europe_data,
                    africa_data : africa_data,
                    north_america : north_america,
                    asia_data :asia_data,
                    south_america : south_america,
                    oceania_data : oceania_data,



                })
            }).catch(e => console.log(e))
    }

    render() {
        const {europeDataSet, africaDataSet, northAmerica, asiaData, southAmericaData, oceaniaData,
            europe_data,africa_data,north_america, asia_data,south_america, oceania_data} = this.state;
        return(
            <div className="chart-container-continent">

                <PieChatForContinent
                    cases={africa_data[0]}
                    todayCases={africa_data[1]}
                    deaths={africa_data[2]}
                    todayDeaths={africa_data[3]}
                    recovered={africa_data[4]}
                    active={africa_data[5]}
                    critical={africa_data[6]}
                    title="Africa"
                    data={africaDataSet}/>
                <PieChatForContinent
                    cases={europe_data[0]}
                    todayCases={europe_data[1]}
                    deaths={europe_data[2]}
                    todayDeaths={europe_data[3]}
                    recovered={europe_data[4]}
                    active={europe_data[5]}
                    critical={europe_data[6]}
                    title="Europe"
                    data={europeDataSet}/>
                <PieChatForContinent
                    cases={north_america[0]}
                    todayCases={north_america[1]}
                    deaths={north_america[2]}
                    todayDeaths={north_america[3]}
                    recovered={north_america[4]}
                    active={north_america[5]}
                    critical={north_america[6]}
                    title="North America"
                    data={northAmerica}/>
                <PieChatForContinent
                    cases={asia_data[0]}
                    todayCases={asia_data[1]}
                    deaths={asia_data[2]}
                    todayDeaths={asia_data[3]}
                    recovered={asia_data[4]}
                    active={asia_data[5]}
                    critical={asia_data[6]}
                    title="Asia"
                    data={asiaData}/>
                <PieChatForContinent
                    cases={south_america[0]}
                    todayCases={south_america[1]}
                    deaths={south_america[2]}
                    todayDeaths={south_america[3]}
                    recovered={south_america[4]}
                    active={south_america[5]}
                    critical={south_america[6]}
                    title="South America"
                    data={southAmericaData}/>
                <PieChatForContinent
                    cases={oceania_data[0]}
                    todayCases={oceania_data[1]}
                    deaths={oceania_data[2]}
                    todayDeaths={oceania_data[3]}
                    recovered={oceania_data[4]}
                    active={oceania_data[5]}
                    critical={oceania_data[6]}
                    title="Oceania"
                    data={oceaniaData}/>
            </div>
        )
    }

}
