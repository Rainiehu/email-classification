import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";

class Login extends Component {
    render() {
        return (
            <div className="registerLogin">
                <div className="main">
                    <div className="centerPart">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;