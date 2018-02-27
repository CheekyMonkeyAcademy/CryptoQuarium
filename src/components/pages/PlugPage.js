import React from 'react';
import GroupPicEdit2 from '../../Images/groupPicEdit2.jpg';

//I can't decide if I want a container on this page or not
    //Also not sure if the picture is doing quite what I imagine in my head

const PlugPage = props =>
    <div>

        {/* <div className="container"> */}

            <div className="row">
                <div className="plugTitle" style={{marginLeft: '5%'}}>
                    <h3>Meet the Team</h3>
                </div>
            </div>
        
            <div className="row">
                <div className="col s8" style={{paddingRight: 0, marginRight:0}}>
                    <img alt="" src={GroupPicEdit2} style={{ width: 500, marginTop: 15, marginLeft: 150, padding: 0, marginRight:0 }} />
                </div>

                <div className="col s4 plugDes" style={{marginLeft: 0}}>
                    <h5>
                        <p>We are a developer team from the University of Denver Code Bootcamp.</p>
                        <p>We built applications together and enjoy every step of the journey!</p>
                    </h5>
                </div>

            </div>





        {/* </div> */}
        
    </div>


export default PlugPage;