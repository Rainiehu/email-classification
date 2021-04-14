import React, {Component} from 'react';
import Login from './Login';
import Footer from '../components/Footer';
import {Avatar} from "antd";

class Home extends Component {

    render() {
        return (
            <div className="vertical-center home-page">
                <div className="top-homepage">
                    <h1 className="home-title"> Welcome to Email Classification System </h1>
                    <Login/>
                    <div className="home-content">
                        <p className="text-center" style={{fontSize: "20px"}}>New user? Register here:</p>
                        <div className="avatar-registration-page">
                            <a href="/registration">
                                <Avatar size={90}
                                        style={{backgroundColor: '#1890ff', color: "white", fontSize: "18px"}}>
                                    Register
                                </Avatar>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;