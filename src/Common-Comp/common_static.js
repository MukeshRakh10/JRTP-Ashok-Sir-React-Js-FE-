import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'

export class Common extends React.Component {

    confirmMessage = (values) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to save record ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.saveARModuleRecord(values);
            }
        })
    }

    saveARModuleRecord = (values) => {
        axios({
            method: "post",
            url: "http://localhost:8081/citizenApp/save",
            data: values,
            headers: {
                Accept: "application/json ,text/plain, */*"
            }
        }).then((success) => {
            if (success.status == 200) {
                Swal.fire(
                    'Successfully!',
                    'Your record has been saved.',
                    'success'
                )
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Sorry !!! Technical Error ..</a>'
                })
            }
        });
    }

}