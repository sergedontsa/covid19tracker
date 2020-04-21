import React, {Component} from "react";
import CountUp from "react-countup";

export default class CardComponent extends Component{
    render() {
        return(
            <div>
                <CountUp end={1000}/>
            </div>
        )
    }
}
