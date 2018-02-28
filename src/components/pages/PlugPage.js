import React from 'react';
import GroupPicEdit2 from '../../Images/groupPicEdit2.jpg';
import './PlugPage.css'
//Need to move CSS to plug page file
//Also move all of plug to pages folder

const PlugPage = props =>
    <div>

        <div className="container">

            <div className="row">
                <div className="col s12">                   
                    <h3>Meet the Team</h3>
                </div>
            </div>
            
        
            <div className="row">
                <div className="col s6" style={{paddingRight: 0, margins:0}}>
                    <img alt="" src={GroupPicEdit2} style={{ width: 380, marginTop: 15, padding: 0, marginRight:0, height:530 }} />
                </div>

                <div className="col s6 plugDes" style={{marginLeft: 0}}>

                    <div className="row">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5>Work with Us!</h5>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <h5>
                            <p>We are a developer team from the University of Denver Code Bootcamp.</p>
                            <p>We built applications together and enjoy every step of the journey!</p>
                            <a className="center-align" href="https://github.com/CheekyMonkeyAcademy/CryptoQuarium" target="_blank">Click to View CryptoQuarium Project Repository</a>
                        </h5>
                        
                    </div>
                </div>
            </div>

        {/* End of container */}
        </div>



        
        
        
    </div>


export default PlugPage;