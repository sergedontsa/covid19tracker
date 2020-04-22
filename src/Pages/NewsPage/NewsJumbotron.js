import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardNews from "./CardNews";
import './newspage.style.scss'

class NewsJumbotron extends Component{

    render() {
        return(
            <Jumbotron fluid={false} className="jumbotron-news">
                <CardNews/>



            </Jumbotron>
        )
    }

}
export default NewsJumbotron
