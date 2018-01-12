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


import React, {Component} from "react";
import LoginBackground from "../LoginBackground";


class Login extends Component {

  render() {
    return (
        <LoginBackground />
    );
  }
}

export default Login;
