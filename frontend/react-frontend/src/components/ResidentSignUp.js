import React, {Component} from 'react';
import {Input, DatePicker, Form} from 'antd';
import {FieldNumberOutlined} from '@ant-design/icons';


class ResidentSignUp extends Component {

    onChange = (param) => {

        return param;

    }

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

        const dateFormat = 'YYYY-MM-DD';

        return (
            <div className="additionalInfo">
                {/* <h1>This is RESIDENT additional components</h1> */}
                <Form.Item
                    {...formItemLayout}
                    label="Unit Number "
                    name="unit_number"
                    rules={[{required: true, message: 'Please input your Unit Number!'}]}
                >

                    <Input prefix={<FieldNumberOutlined className="site-form-item-icon"/>} placeholder="Unit Number"/>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Birth Date "
                    name="birthday"
                    rules={[{required: true, message: 'Please select your birth date!'}]}
                >
                    <DatePicker placeholder="birth date" format={dateFormat} onChange={this.onChange}
                                style={{width: '100%'}}/>

                </Form.Item>


            </div>
        );
    }
}

export default ResidentSignUp;