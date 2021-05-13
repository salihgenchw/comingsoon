import React from 'react'
import Player from '../images/player.png'
import Applogo from '../images/soccerball.png';
import '../css/rightside.css';

function RightSide() {
    return (
        <div className="mt-4">
            <img src={Player} alt="" style={{width:'700px'}}></img>
            <div className="d-inline"><img className="App-logo" src={Applogo} alt="" style={{width:'150px'}}/></div>
            

        </div>
    )
}
export default RightSide;
