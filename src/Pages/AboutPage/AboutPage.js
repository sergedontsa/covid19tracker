import React, {Component} from "react";
import './aboutpage.style.scss'
import ContienentPieContainer from "../../Component/Continent/ContienentPieContainer";
class AboutPage extends Component{
    render() {
        return(
            <div><h1>About page</h1>
                <ContienentPieContainer/>
            </div>
        )
    }

}
export default AboutPage
