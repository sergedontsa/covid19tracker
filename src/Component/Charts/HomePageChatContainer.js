import React, {Component} from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import './style/homepagechatcontainer.style.scss'

class HomePageChatContainer extends Component{

    render() {
        return(
            <div className="chart-container">
                <div className="bar">
                    <BarChart/>
                </div>
                <div className="polar">
                    <PieChart/>
                </div>



            </div>
        )
    }
}
export default HomePageChatContainer
