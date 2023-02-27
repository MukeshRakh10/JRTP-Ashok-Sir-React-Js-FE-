import React, { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikController from '../../Common-Comp/Common_Elements/FormikController';
import "../../css/common.css"
import { Common } from '../../Common-Comp/common_static';

function AR_Application_Form() {

    const initialValues = {
        "fullName": "",
        "mobileNo": "",
        "email": "",
        "gender": "Male",
        "ssn": "",
        "dob": ""
    }
    const validationSchema = Yup.object({
        "fullName": Yup.string().required("Required !").min(3, "Minimum 3 character required ..."),//.max(6, "Maximum 6 character are allowed .."),
        "mobileNo": Yup.string().required("Required !").min(10, "Minimum 10 digit required ..."),//.max(10, "Maximum 10 digit are allowed .."),
        "email": Yup.string().required("Required !").email("Please enter valid email !!!"),
        "ssn": Yup.string().required("Required !").min(6, "Minimum 6 digit required ..."),//.max(6, "Maximum 6 digit are allowed .."),
        "gender": Yup.string().required("Required !")
    });


    const onSubmit = values => {
        new Common().confirmMessage(values);
    }
    const gender_options = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' }
    ]
    return (
        <React.Fragment>
            <h4>Application Registeration</h4>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <Form>
                                <br /><div class="container">
                                    <div class="row">
                                        <div class="col form-group">
                                            <FormikController control="input" type="text" name="fullName" label="Full Name" id="fullName" />
                                        </div>
                                        <div class="col form-group">
                                            <FormikController control="input" type="email" id="emailId" name="email" label="Email" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col form-group">
                                            <FormikController control="input" type="text" name="mobileNo" label="Mobile No."
                                            />
                                        </div>
                                        <div class="col form-group">
                                            <FormikController
                                                control="radio"
                                                name="gender"
                                                label="Gender"
                                                checked
                                                options={gender_options}
                                            />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col form-group">
                                            <FormikController control="input" type="date" id="dobId" name="dob" label="Date Of Birth" />
                                        </div>
                                        <div class="col form-group">
                                            <FormikController control="input" type="text" id="ssnId" name="ssn" label="SSN" />
                                        </div>
                                    </div><br />
                                    <div class="row">
                                        <div class="col form-group">
                                            <button type="submit" class="btn btn-primary" disabled={!formik.isValid}>Save</button>&nbsp;
                                            <button type="Reset" class="btn btn-primary">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>

        </React.Fragment>

    );
}

export default AR_Application_Form;