import React from 'react';

const Project = ({title,description,picture,mode}) => {
    console.log(mode)
    if(mode==='mobile'){
        return(

            <section className="portfolio-block mobile-app gradient">
                <div className="container align-items-center">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-3 offset-lg-2">
                            <div className="portfolio-phone-mockup">
                                <div className="phone-screen" style={{backgroundImage:`url(${picture})`}}></div>
                                <div className="home-button"></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 text">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className="portfolio-block website gradient">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-5 offset-lg-1 text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="portfolio-laptop-mockup">
                            <div className="screen">
                                <div className="screen-content" style={{backgroundImage:`url(${picture})`}}></div>
                            </div>
                            <div className="keyboard"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;