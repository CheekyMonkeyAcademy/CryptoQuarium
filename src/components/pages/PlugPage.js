import React from 'react';
import GroupPicEdit2 from '../../Images/groupPicEdit2.jpg';
import HireForm from "./HireForm"
import './PlugPage.css'


const PlugPage = props =>
    <div>

        <div className="container">

            <div className="row">
                <div className="col s12">                   
                    <h3 className="meetTeam">Meet the Team</h3>
                </div>
            </div>
            
        
            <div className="row">
                <div className="col s12 m6" >
                    <img className="groupPic responsive-img" alt="" src={GroupPicEdit2} />
                </div>

                <div className="col s12 m6 plugDes" style={{marginLeft: 0}}>

                    <div className="row">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="flow-text sectionTitles">Our Work</h5>
                            </div>
                        </div>
                    </div>


                    <div className="row"> 
                        <h5>                       
                            <p className="flow-text">We are a developer team from the University of Denver Code Bootcamp.</p>
                            <p className="flow-text">We built applications together and enjoy every step of the journey!</p> 
                        </h5>
                    </div>

                    <div className="row">
                        <div className="col s12 m12 center-align">
                            <a className="repo flow-text" href="https://github.com/CheekyMonkeyAcademy/CryptoQuarium" target="_blank">View CryptoQuarium Project Repository</a>                    
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="flow-text sectionTitles">Get in Touch!</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 center-align">
                            <a className="waves-effect waves-light btn hireBtn" href="/hireform">Hire Us!</a>     
                        </div>    

                        <div className="center-align">
                            <h5 className="flow-text">For all other inquires or questions</h5>
                            <a className="repo flow-text" href="mailto:cm.writing.academy@gmail.com">cm.writing.academy@gmail.com</a>
                        </div>                                   
                    </div>

                    <div className="row port">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="flow text sectionTitles">Checkout Our Individual Portfolios</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m12">
                            <div className="row">
                                <div className="col s6">
                                    <a className="repo flow-text center-align" href="https://kylekowalski.github.io/" target="_blank">Kyle Kowalski</a>
                                </div>
                                <div className="col s6">
                                    <a className="repo flow-text center-align" href="https://nfrazier08.github.io./" target="_blank">Nicole Frazier</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s6">
                                    <a className="repo flow-text center-align" href="https://robrollner.github.io/updated_portfolio/" target="_blank">Robert Rollner</a>
                                </div>
                                <div className="col s6">
                                    <a className="repo flow-text center-align" href="https://ccrs2006.github.io/Bootstrap-Portfolio/" target="_blank">Robert Castiblanco</a>
                                </div>
                            </div>
                        </div>
                    </div>
                     


                </div>                
            </div>

        {/* End of container */}
        </div>



        
        
        
    </div>


export default PlugPage;