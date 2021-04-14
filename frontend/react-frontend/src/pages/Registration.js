import React, {Component} from 'react';
import Footer from '../components/Footer';
import RegistrationForm from "../components/RegistrationForm";


class RegisterPage extends Component {
    render() {
        return (
            <div className="registerLogin">
                <div className="main">
                    <div className="registerPart">
                        <RegistrationForm/>
                    </div>
                </div>
                <Footer/></div>

        );
    }
}

export default RegisterPage;