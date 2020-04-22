import React, {Component} from "react";
import './newspage.style.scss'

import CardComponent from "./CardComponent";


export default class CardNews extends Component{
    constructor() {
        super();
        this.state= {
            cnnNewsObject:{},
            foxNewsObject:{},
            usaNewsObject: {},
            cbsNewsObject:{}
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=fbf41a4775124fcea8db28dc977bf6a8')
            .then(response => response.json())
            .then(object =>{
                let articles = object.articles
                let cnn = []
                let fox = []
                let usa = []
                let cbs = []

                cnn = articles.filter(o => o.source.id.toLowerCase() === 'cnn')
                fox = articles.filter(o => o.source.id.toLowerCase() === 'fox-news')
                usa = articles.filter(o => o.source.id.toLowerCase() === 'usa-today')
                cbs = articles.filter(o => o.source.id.toLowerCase() === 'cbs-news')

                console.log("USA")
                console.log(usa[0])
                console.log(cnn)
                console.log(usa)
                console.log(cbs)


                this.setState({cnnNewsObject: cnn[0]})
                this.setState({foxNewsObject: fox[0]})
                this.setState({usaNewsObject: usa[0]})
                this.setState({cbsNewsObject: cbs[0]})



            }).catch(e => (console.log(e)))

    }

    render() {
        const {cnnNewsObject,foxNewsObject, usaNewsObject, cbsNewsObject} = this.state
        return(
            <div className="newsCardContainer">
                <CardComponent {...cnnNewsObject}/>
                <CardComponent {...foxNewsObject}/>
                <CardComponent {...usaNewsObject}/>
                <CardComponent {...cbsNewsObject}/>
            </div>
        )
    }

}

