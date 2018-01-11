// import React from "react";
// import "./Login.css";


// const Login = () =>
//     <div className="login-page">
//         Login To CryptoAquarium
//         {/* TODO fix this hack job */}
//         <a method='POST' href='http://localhost:8080/auth/google'>GOOGLE</a>
//         {/* TODO fix this hack job */}
//     </div>

// export default Login;

import React, {Component} from 'react';
import "./Login.css";
// import jellyFish from '../../Images/video/jellyfish.mp4';


class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL:  
            'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'}
            // {jellyFish}}
    }

    render () {
        return (
            <div className="container">
                 <div className="video col s12">
                    <video class="background-video"  muted loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                    </video>                   
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s6 offset-s5">
                            <a method='POST' href='http://localhost:8080/auth/google'>
                                <button class="btn btn-large red waves-effect waves-lighter"><i class="material-icons right">add</i>GOOGLE</button>
                            </a>        
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
};

export default Login;