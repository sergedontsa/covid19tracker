import React, {Component} from "react";
import CardComponent from "./CardComponent";
import './Style/stat.style.scss'

export default class StatComponent extends Component{
    constructor() {
        super();
        this.state = {
            cases:0,
            todayCases:0,
            deaths:0,
            todayDeaths:0,
            recovered:0,
            active:0,
            critical:0,
            affectedCountries:0


        }
    }
    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/all')
            .then(response => response.json())
            .then(object => {
                this.setState({
                    cases: object.cases,
                    todayCases: object.todayCases,
                    deaths: object.deaths,
                    todayDeaths: object.todayDeaths,
                    recovered: object.recovered,
                    active: object.active,
                    critical: object.critical,
                    affectedCountries: object.affectedCountries
                })

            })



    }
    render() {
        const {cases,  todayCases, deaths ,todayDeaths , recovered, active ,critical, affectedCountries} = this.state
        return(
            <div className="item-container">
                <CardComponent end={cases} title="Cases"/>
                <CardComponent end={todayCases} title="Today's Cases"/>
                <CardComponent end={deaths} title="Deaths"/>
                <CardComponent end={todayDeaths} title="Today's Deaths"/>
                <CardComponent end={recovered} title="Recovered"/>
                <CardComponent end={active} title="Active"/>
                <CardComponent end={critical} title="Critical"/>
                <CardComponent end={affectedCountries} title="Affected countries"/>


            </div>
        )
    }

}
