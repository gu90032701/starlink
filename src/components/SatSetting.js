import React, {Component} from 'react';
import {Form, InputNumber, Button} from "antd";

class SatSetting extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 13 },
            },
        };
        return (
            <div>
                <Form {...formItemLayout}
                >
                    <Form.Item label="Longitude(degrees)">

                        <InputNumber min = {-180} max= {180} placeholder= "please input Longitude"/>
                    </Form.Item>
                    <Form.Item label="Latitude(degrees)">

                        <InputNumber min = {-180} max= {180} placeholder= "please input Longitude"/>
                    </Form.Item>


                </Form>
            </div>
        );
    }
}

export default SatSetting;