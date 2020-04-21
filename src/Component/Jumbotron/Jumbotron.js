import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import StatComponent from "../StatOverview/StatComponent";
import './jumbotron.style.scss'

class JumbotronComponent extends Component{
    render() {
        return(
            <Jumbotron fluid={true} className="jumbotron">

                <StatComponent/>

            </Jumbotron>
        )
    }

}
export default JumbotronComponent
