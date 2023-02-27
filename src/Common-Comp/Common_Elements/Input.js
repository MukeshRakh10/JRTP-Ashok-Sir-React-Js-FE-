import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

//import field component
//Field componet used to create 
// the input field

//import ErrorMessage component
//EM comp used to display the comp related errors.

//import TextError component
//TextError comp used  to display validation in some color


function Input(props) {
    const { name, label,    ...rest } = props;
    return (
        <React.Fragment> 
            <div className='form-control'>
                <label htmlFor={name}>{label}</label>
                <Field class="form-control" id = {name} name = {name}{...rest}></Field>
                <ErrorMessage name = {name} component = {TextError}></ErrorMessage>
            </div>
        </React.Fragment>
    );
}

export default Input;