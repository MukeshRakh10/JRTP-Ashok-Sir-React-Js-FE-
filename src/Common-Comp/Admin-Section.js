import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

  function AdminSection(){
    const navigate = useNavigate();
        return (
            <React.Fragment>
                <section class="mt-4">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p class="h3 text-success">Contact Manager</p>
                                <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus consequuntur
                                    unde nemo quam labore nobis ipsa pariatur aspernatur esse. Reiciendis, nam sequi? Quas est,
                                    possimus unde nam sed amet aliquam.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mt-10">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="col sm-3">
                                    <input type="text" class="form-control" placeholder="contact person name" />
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <form>
                                    <div class="row">
                                        <div class="col">
                                            <input type="submit" value="search" class="btn btn-dark" />
                                             <input type = "button" class="btn btn-success ms-2" value = "New" onClick={() => navigate("/create")} />
                                                <i class="bi bi-plus-circle-fill"></i> 

                                            <input type = "button" class="btn btn-success ms-2" value = "Dashboard" onClick={() => navigate("/admin")} />
                                            <i class="bi bi-plus-circle-fill"></i> 

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        )
}

export default AdminSection;