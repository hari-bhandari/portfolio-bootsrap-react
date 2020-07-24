import React from 'react';
import Coding from "./Coding";

const WelcomePage = () => {
    return (
        <div>
            <div className="header-blue">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">

                </nav>
                <div className="container hero">
                    <div className="row">
                        <div className="col-lg-8 d-lg-block text-center">
                            <h1>Welcome to My Portfolio</h1>
                            <p></p>
                            <button className="btn btn-light btn-lg action-button" type="button"><i className="fas fa-download"/>Download My CV</button>
                            <button className="btn btn-light btn-lg action-button" style={{marginLeft:'1rem'}} type="button">Contact me</button>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block" style={{marginLeft:'20rem'}}>
                            <Coding/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;