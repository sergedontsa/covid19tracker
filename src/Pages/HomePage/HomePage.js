import React, {Component} from "react";
import './homepage.style.scss'
import HomePageChatContainer from "../../Component/Charts/HomePageChatContainer";
import JumbotronComponent from "../../Component/Jumbotron/Jumbotron";
import TableComponent from "../../Component/Table/TableComponent";

class HomePage extends Component{
    render() {
        return(
            <div>
                <JumbotronComponent/>
               <HomePageChatContainer/>
                <TableComponent/>
            </div>
        )
    }

}
export default HomePage
