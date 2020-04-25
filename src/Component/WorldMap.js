import React, { Component } from 'react'
//import { Map, TileLayer, Marker, Popup } from
import {Map, TileLayer, Marker, Popup} from "react-leaflet";


export default class WorldMap extends Component<> {
  constructor() {
      super();
      this.state ={
          lat: 51.505,
          lng: -0.09,
          zoom: 13,
      }
  }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div style={{width: "100%", height:"30vw", border: "1px solid red"}}>
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
            </div>
        )
    }
}
