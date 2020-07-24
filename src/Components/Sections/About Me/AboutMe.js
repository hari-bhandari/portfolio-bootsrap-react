import React from 'react';
import Skills from "./Skills";

const AboutMe = () => {
    return (
        <main className="page" style={{width:'100%'}}>
            <section className="portfolio-block block-intro">
                <div className="container">
                    <div className="avatar" style={{backgroundImage:"url('https://i.imgur.com/yIRXIZj.png')"}}></div>
                    <div className="about-me" style={{width:'100%'}}>
                        <p >
                            A passionate self-taught developer. I like to describe myself as someone persistent and purposeful; I love solving real-life problems, mathematics problems and learning new algorithms.
                            <br/>
                            I started coding back in 2019 after I graduated from my sixth form with AAB. I was impassive about algorithms, but Advanced level further decision wholly altered my mind. It taught me different aspects of programming from learning algorithms to being more Logical. Also, Advanced level Mathematics and Further Mathematics has enhanced my mathematical skills, problems solving skills and most importantly, my analytical skills. I want to pursue a career in computer programming!
                            <br/>
                            Furthermore, I am also interested in creating and learning optimised algorithms.


                        </p>
                        <a className="btn btn-outline-primary" role="button" href="# ">Hire me</a></div>
                </div>
               <Skills/>
            </section>
            <section className="portfolio-block photography">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"></a></div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover"><a href="#"></a></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMe;