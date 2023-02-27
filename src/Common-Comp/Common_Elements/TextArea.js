import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function TextArea(props) {

    const { name, label,    ...rest } = props;
    return (
        <React.Fragment> 
            <div className='form-control'>
                <label htmlFor={name}>{label}</label>
                <Field as = "textarea" id = {name} name = {name}{...rest}></Field>
                <ErrorMessage name = {name} component = {TextError}></ErrorMessage>
            </div>
        </React.Fragment>
    );

}

export default TextArea;