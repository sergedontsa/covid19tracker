import React, {Component} from "react";
import NewsJumbotron from "./NewsJumbotron";
import JumbotronComponent from "../../Component/Jumbotron/Jumbotron";


export default class NewsPage extends Component{

    render() {
        return(
            <div>
                <JumbotronComponent/>
                <NewsJumbotron/>


            </div>
        )
    }

}
