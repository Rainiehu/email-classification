import React, {Component} from 'react';
import {ClassifyRequest} from "./AccountAxios";

class FetchUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ""
        };
        this.fileInput = React.createRef();
    }

    upload = () => {
        const data = new FormData();
        data.append('file', this.fileInput.current.files[0]);  //相当于 input:file 中的name属性
        console.log(data)
        ClassifyRequest(data).then(response => {
                console.log(response.data);
                this.setState({label: response.data['label']})
            }
        )
    };

    render() {
        let label = this.state.label
        return (
            <div>
                <input type="file" name='file' ref={this.fileInput}/>
                <div>
                    <input type="button" value="upload" onClick={this.upload}/>
                </div>
                <br/>
                The type of this email is {label}
            </div>

        )
    }
}

export default FetchUpload;