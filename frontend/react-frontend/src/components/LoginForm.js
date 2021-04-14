import React, {Component, Fragment} from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {LoginRequest} from './AccountAxios';
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movingTo: -1
        };

    }

    onFinish = (values) => {
        console.log("values" + values)
        LoginRequest(values).then(response => {
            this.setState({
                loading: false,
            })
            const status = response.status;
            if (status === 200) {
                sessionStorage.setItem('username',response.data.data.userName)
                this.setState({movingTo: 0})
            }
            console.log(response);
        }).catch(error => {
            this.setState({
                loading: false,
            })
            alert("Your username or password is incorrect! Please try again!");
            console.log(error);
        })

    };

    render() {
        if (this.state.movingTo === 0) {
            return (<Redirect to="/classify"/>)
        }
        return (
            <Fragment>
                <div className="form-header">
                    <p className="column">Login</p>
                </div>

                <div className="form-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialvalues={{remember: true}}
                        onFinish={this.onFinish}>

                        <Form.Item
                            name="email"
                            rules={[{required: true, message: 'Please input your Email!'}]}>

                            <Input type="email"
                                   prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}>

                            <Input type="password"
                                   prefix={<LockOutlined className="site-form-item-icon"/>}
                                   placeholder="Password"/>
                        </Form.Item>

                        <Form.Item>
                            <Button loading={this.loading} type="primary" htmlType="submit"
                                    className="login-form-button" block>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>

        )
    }
}

export default withRouter(Login);
