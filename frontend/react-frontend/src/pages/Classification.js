import React, {Component} from 'react';
import Footer from "../components/Footer";
import ClassifyForm from "../components/ClassifyForm";
import FetchUpload from "../components/FetchUpload";

class ClassifyPage extends Component {
    render() {
        return (
            <div className="registerLogin">
                <div className="main">
                    <div className="registerPart">
                        <ClassifyForm/>
                    </div>
                </div>
                <Footer/></div>

        );
    }
}

export default ClassifyPage;