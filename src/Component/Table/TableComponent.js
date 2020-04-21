import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow/TableRow";
import {SearchBox} from "../SearchBox/SearchBox";


export default class TableComponent extends Component{
    constructor() {
        super();
        this.state = {
            tableHeader:{
                updated: "Last updated",
                country: "Country",
                countryInfo: {
                    _id: "ID",
                    iso: "ISO",
                    lat: "Latitude",
                    long: "Longitude",

                },
                cases: "Cases",
                todayCases: "Today 's Cases",
                deaths: "Deaths",
                todayDeaths: "Today 's Deaths"  ,
                recovered: "Recovered",
                active: "Active",
                critical: "Critical",
                casesPerOneMillion: "Cases/Million",
                deathsPerOneMillion: "Deaths/Million",
                tests: "Test",
                testsPerOneMillion: "Test/Million" ,
                continent: "Continent"
            },
            rowObject:[],
            searchField:''
        }
    }

    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/countries?yesterday=&sort=cases')
            .then(response => response.json())
            .then(object => {
                let obj = []
                for(let x = 0; x< object.length; x++){
                    obj.push(object[x])
                }
                console.log("OBJ:")
                console.log(obj)

                this.setState({rowObject: obj})
            })
    }

    handleSearBox = (event) =>{
        event.preventDefault()
        this.setState({searchField: event.target.value})
    }

    render() {
        const {tableHeader , rowObject, searchField } = this.state
        const filterRowObject = rowObject.filter(object => object.country.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div>
                <SearchBox handleChange={this.handleSearBox} placeholder="Search by Country"/>
            <div style={{height: "50vh", overflowY: "auto"}}>

                <Table style={{overflowY: "auto"}} striped bordered responsive={true}  hover>
                    <thead>
                        <tr>
                            <th>{tableHeader.countryInfo.iso}</th>
                            <th>{tableHeader.country}</th>
                            <th>{tableHeader.cases}</th>
                            <th>{tableHeader.todayCases}</th>
                            <th>{tableHeader.deaths}</th>
                            <th>{tableHeader.todayDeaths}</th>
                            <th>{tableHeader.recovered}</th>
                            <th>{tableHeader.active}</th>
                            <th>{tableHeader.critical}</th>
                            <th>{tableHeader.casesPerOneMillion}</th>
                            <th>{tableHeader.deathsPerOneMillion}</th>
                            <th>{tableHeader.tests}</th>
                            <th>{tableHeader.continent}</th>
                       </tr>
                    </thead>
                    <tbody>
                    {
                        filterRowObject.map( object => (
                            <TableRow key={filterRowObject.indexOf(object)} {...object}/>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
            </div>
        )
    }
}
