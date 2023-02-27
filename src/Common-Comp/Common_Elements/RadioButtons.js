import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';
function RadioButtons(props) {
    const { name, label, options, ...rest } = props;
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label> <br />
            <Field name={name}>
                {
                    // field field provided by Field for managing the checkbox and radio buttons.
                    // Sequence is important
                    ({ field }) => {
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    &nbsp;
                                    <input type="radio"
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}>
                                    </input> &nbsp;
                                    <label htmlFor={name}>{option.key}</label>
                                </React.Fragment>
                            )
                        })

                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}
export default RadioButtons;