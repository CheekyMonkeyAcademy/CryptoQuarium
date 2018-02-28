import React from 'react';
import GroupPicEdit2 from '../../Images/groupPicEdit2.jpg';
import './PlugPage.css'
//Need to move CSS to plug page file
//Also move all of plug to pages folder
// cm.writing.academy@gmail.com

const PlugPage = props =>
    <div>

        <div className="container">

            <div className="row">
                <div className="col s12">                   
                    <h3 className="meetTeam">Meet the Team</h3>
                </div>
            </div>
            
        
            <div className="row">
                <div className="col s6" style={{paddingRight: 0, margins:0}}>
                    <img className="groupPic" alt="" src={GroupPicEdit2} />
                </div>

                <div className="col s6 plugDes" style={{marginLeft: 0}}>

                    <div className="row">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="sectionTitles">Our Work</h5>
                            </div>
                        </div>
                    </div>


                    <div className="row"> 
                        <h5>                       
                            <p>We are a developer team from the University of Denver Code Bootcamp.</p>
                            <p>We built applications together and enjoy every step of the journey!</p> 
                        </h5>
                    </div>

                    <div className="row">
                        <div className="col s12 m12 center-align">
                            <a className="repo" href="https://github.com/CheekyMonkeyAcademy/CryptoQuarium" target="_blank">View CryptoQuarium Project Repository</a>                    
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="sectionTitles">Get in Touch!</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 center-align">
                            <a class="waves-effect waves-light btn hireBtn">Hire Us!</a>     
                        </div>    

                        <div className="center-align">
                            <h5>For all other inquires or questions</h5>
                            <a className="repo" href="mailto:cm.writing.academy@gmail.com">cm.writing.academy@gmail.com</a>
                        </div>                                   
                    </div>

                    <div className="row port">
                        <div className="col s12 m12 center-align hireSign">
                            <div>
                                <h5 className="sectionTitles">Checkout Our Individual Portfolios</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m12">
                            <div className="row">
                                <a className="repo portSpacing" href="https://kylekowalski.github.io/">Kyle Kowalski</a>

                                <a className="repo portSpacing" href="nfrazier08.github.io./"> Nicole Frazier</a>
                            </div>

                            <div className="row">
                                <a className="repo portSpacing" href="https://robrollner.github.io/updated_portfolio/">Robert Rollner</a>

                                <a className="repo portSpacing" href="nfrazier08.github.io./">Robert Castiblanco</a>
                            </div>
                        </div>
                    </div>
                     


                </div>                
            </div>

        {/* End of container */}
        </div>



        
        
        
    </div>


export default PlugPage;