import React, {Component, Fragment} from "react";
import {Form, Input, Button} from 'antd';
import {MailOutlined, UserOutlined, LockOutlined, PhoneOutlined} from '@ant-design/icons';
import {Redirect} from "react-router-dom";
import {RegisterRequest} from './AccountAxios';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movingTo: -1
        };

    }

    onFinish = (values) => {
        console.log(values);
        RegisterRequest(values).then(
            response => {
                const status = response.status;
                console.log(status)
                if (status === 200) {
                    alert("You have successfully registered your profile!")
                    this.setState({movingTo: 0})
                } else if (status === 208) {
                    alert("This email/username has been registered!");
                }
                console.log(response);
            }
        ).catch(error => {
            console.log("error info: ", error);
        })
        console.log('Received values of form: ', values);
    };


    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        if (this.state.movingTo === 0) {
            return (<Redirect to="/"/>)
        }

        return (
            <Fragment>
                <h4 style={{marginLeft: "25%",}}>Create a new account</h4>
                <br/>
                <br/>
                <div className="form-content">

                    <Form
                        name="normal_register"
                        className="register-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}>

                        <Form.Item
                            {...formItemLayout}
                            label="First Name: "
                            name="firstName"
                            rules={[{required: true, message: 'Please input your First Name!'}]}>

                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="First Name"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="Middle Name: "
                            name="middleName">

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Middle Name"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="Last Name: "
                            name="lastName"
                            rules={[{required: true, message: 'Please input your Last Name!'}]}>

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Last Name"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="Email:"
                            name="email"
                            rules={[{required: true, message: 'Please input your Email address!'}]}>

                            <Input type="email"
                                   prefix={<MailOutlined className="site-form-item-icon"/>}
                                   placeholder="Email Address"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback>

                            <Input type="password"
                                   prefix={<LockOutlined className="site-form-item-icon"/>}
                                   placeholder="Password"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({getFieldValue}) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}>
                            <Input type="password"
                                   prefix={<LockOutlined className="site-form-item-icon"/>}
                                   placeholder="Confirm your password"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="userName"
                            label="User Name"
                            rules={[{required: true, message: 'Please input your user name!'}]}>

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Input your nick name"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="mailAddress"
                            label="Mail Address">

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Input your mail address"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="occupation"
                            label="Occupation">

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Input your occupation"/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="phoneNumber"
                            label="Phone Number">

                            <Input prefix={<PhoneOutlined className="site-form-item-icon"/>} style={{width: '100%'}}
                                   placeholder="Input your phone number"/>
                        </Form.Item>

                        <Form.Item  {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Register
                            </Button>

                        </Form.Item>


                    </Form>
                </div>
            </Fragment>

        )
    }
}

export default RegisterForm;
