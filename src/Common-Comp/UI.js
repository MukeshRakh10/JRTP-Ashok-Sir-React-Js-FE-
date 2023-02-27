import React from "react";
import '../App.css';
import Footer from "./Footer";
import { NavBar } from "./Navbar";
import SideNav from "./SideNav";
export function UI(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div class="col-sm-1">
                        <SideNav></SideNav>
                    </div>
                    <div class="col-sm-1">
                        {/* <AdminSection /> */}
                    </div>
                    <div className="col-sm-9">
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}     
