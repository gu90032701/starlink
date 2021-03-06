import React, {Component} from 'react';
import SatSetting from "./SatSetting";
import SatelliteList from "./SatelliteList";
import { NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY } from "../constants";
import axios from "axios"
class Main extends Component {
    constructor() {
        super();
        this.state = {
            satInfo: null,
            setting: null,
            isLoadingList: false
        }
    }

    componentDidMount() {

    }

    showNearbySatellite = setting => {
        console.log("setting ->", setting);
        this.setState({
            setting: setting
        })
        this.fetchSatellite(setting);
    }
    fetchSatellite = (setting) => {
//step1: get setting data
        const { latitude, longitude, elevation, altitude } = setting;
        //step2: get url
        const url = `/api/${NEARBY_SATELLITE}/${latitude}/${longitude}/${elevation}/${altitude}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        //step3:trigger loading

        //step4 ajax call
        axios.get(url).then(response =>{
            console.log(response)
        }).catch(error => {
            console.log("err in fetch satellite", error.message)
        })
    }

    render() {
        return (
            <div className="main">
                <div className="left-side">
                    <SatSetting onShow={this.showNearbySatellite}/>
                    <SatelliteList/>
                </div>
                <div className="right-side">right-side</div>
            </div>
        );
    }
}

export default Main;