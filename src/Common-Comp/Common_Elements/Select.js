import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function Select(props) {
    const { label, name, options, ...rest } = props;

    return (
        <React.Fragment>
            <div>
                <label htmlFor={name}>{label}</label>
                <Field as = "select" name={name} {...rest} >
                    {options.map(option =>{
                        return(
                            <option key = {option.key} value = {option.value}>{option.key}</option>
                        ) 
                    })}
                </Field>
                <ErrorMessage name = {name} component = {TextError}></ErrorMessage>
            </div>

        </React.Fragment>
    );
}

export default Select;