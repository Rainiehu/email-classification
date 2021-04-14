import React, {Component, Fragment} from "react";

import {Upload, message, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {Redirect} from "react-router-dom";
import FetchUpload from "./FetchUpload";


class ClassifyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movingTo: -1
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState({movingTo: 0})
    }


    render() {
        if (this.state.movingTo === 0) {
            sessionStorage.clear();
            return (<Redirect to="/"/>)
        }

        let username = sessionStorage.getItem('username');
        if (username === null) {
            alert("You have not login!");
            return (<Redirect to="/"/>)
        }

        // const props = {
        //     name: 'file',
        //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //     // headers: {
        //     //     Content-Type: '',
        //     // },
        //     onChange(info) {
        //         console.log("abc:", info)
        //         console.log("ashda", info.file)
        //         if (info.file.status !== 'uploading') {
        //             console.log("bbb:", info.file, "ccc:", info.fileList);
        //         }
        //         if (info.file.status === 'done') {
        //             message.success(`${info.file.name} file uploaded successfully`);
        //         } else if (info.file.status === 'error') {
        //             message.error(`${info.file.name} file upload failed.`);
        //         }
        //     },
        // };

        return (
            <Fragment>
                <div>
                    hi, {username}
                </div>
                <br/>
                <div>upload your email here</div>
                {/*<Upload {...props}>*/}
                {/*    <Button icon={<UploadOutlined/>}>Click to Upload</Button>*/}
                {/*</Upload>*/}
                {/*<br/>*/}
                {/*<div>*/}
                {/*    <Button>classify</Button>*/}
                {/*</div>*/}
                <FetchUpload/>
                <div>
                    <Button onClick={this.handleClick}>logout</Button>
                </div>
            </Fragment>

        )

    }


}

export default ClassifyForm;