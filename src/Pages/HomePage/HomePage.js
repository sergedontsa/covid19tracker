import React, {Component} from "react";
import './homepage.style.scss'
import HomePageChatContainer from "../../Component/Charts/HomePageChatContainer";
import JumbotronComponent from "../../Component/Jumbotron/Jumbotron";
import TableComponent from "../../Component/Table/TableComponent";
import ContienentPieContainer from "../../Component/Continent/ContienentPieContainer";
import Alert from "react-bootstrap/Alert";
class HomePage extends Component{
    render() {
        return(
            <div>
                <Alert className="title-1" variant="secondary">
                    <h4>Overview by continent</h4>
                </Alert>
                <div className="continent-overview-container">
                    <ContienentPieContainer/>
                </div>
                <Alert className="title-2" variant="secondary">
                    <h4>Chat view</h4>
                </Alert>
                <div className="chart-overview-container">
                    <HomePageChatContainer/>
                </div>
                <Alert className="title-3" variant="secondary">
                    <h4>Last report</h4>
                </Alert>
                <div className="stat-overview-container">
                    <JumbotronComponent/>
                </div>
                <Alert className="title-4" variant="secondary">
                    <h4>List of country affected</h4>
                </Alert>
                <div className="table-view-container">
                    <TableComponent/>
                </div>




            </div>
        )
    }

}
export default HomePage
