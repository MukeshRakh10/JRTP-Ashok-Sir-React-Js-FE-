import React from 'react';
import CheckBoxes from './CheckBoxes';
import Input from "./Input";
import RadioButtons from './RadioButtons';
import Select from './Select';
import TextArea from './TextArea';
function FormikController(props) {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...props}></Input>
        case 'select':
            return <Select {...props}></Select>
        case 'textarea':
            return <TextArea {...props}></TextArea>
        case 'radio':
            return <RadioButtons {...props}></RadioButtons>
        case 'checkbox':
            return <CheckBoxes {...props}></CheckBoxes>

        default: return null;
    }
}

export default FormikController;