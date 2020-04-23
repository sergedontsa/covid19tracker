import React, {Component} from "react";
import StatComponent from "../StatOverview/StatComponent";
import './jumbotron.style.scss'


class JumbotronComponent extends Component{
    render() {
        return(

                <div className="jumbotron container-fluid">

                <StatComponent/>
                </div>

        )
    }

}
export default JumbotronComponent
