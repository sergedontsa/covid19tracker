import React, {Component} from "react";
import '../Styles/tablerow.style.scss'

export default class TableRow extends Component{
     render() {
        return (
            <tr>
                <td>{this.props.countryInfo.iso3}</td>
                <td><img className="flag" alt="Flag" src={this.props.countryInfo.flag}/>


                {this.props.country}</td>
                <td>{this.props.cases}</td>
                <td>{this.props.todayCases}</td>
                <td>{this.props.deaths}</td>
                <td>{this.props.todayDeaths}</td>
                <td>{this.props.recovered}</td>
                <td>{this.props.active}</td>
                <td>{this.props.critical}</td>
                <td>{this.props.casesPerOneMillion}</td>
                <td>{this.props.deathsPerOneMillion}</td>
                <td>{this.props.tests}</td>
                <td>{this.props.continent}</td>
            </tr>
        )
    }

}
