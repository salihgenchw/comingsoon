import React from 'react'
// import overLogo from '../images/overtimescorelogo.png';
import '../css/leftside.css';

import barcode from '../images/frame.png';


 function Leftside() {
    return (
        <div>
            <span className="">
                {/* <img className="rounded mx-auto d-block" src={overLogo} alt="" style={{width:'120px'}}/> */}
                <p className="overlogo">overtimescore</p>
                {/* <img className="rounded mx-auto d-block App-logo" src={Applogo} alt="" style={{width:'120px'}}/> */}
            </span>

            <div className="yyrr">
                <h1 className="h1s" >Prediction with Maths</h1>
                <span className="childp">A system where you can make football predictions using math and statistics is coming soon.</span>
            </div>

            <div className="text-center mt-7">
                <img src={barcode} alt="" style={{width:'130px'}}/>
            </div>

            
            
        </div>
    )
}

export default Leftside;
