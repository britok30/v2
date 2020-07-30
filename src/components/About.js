import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div>
            <section>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <Fade bottom duration={3000} distance={'1rem'}>
                            <h2 className="sub-heading">
                                <span className="number">01.</span>{" "}About Me
                            </h2>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <Fade
                            bottom
                            duration={3000}
                            distance={'1rem'}
                            delay={1000}
                        >
                            <p>
                                Hello, my name is Kelvin Brito and I am a
                                front-end software engineer specializing in
                                building & designing exceptional, high-quality
                                websites and applications. As I continue this
                                life-long journey of self-learning and mastering
                                my craft, I hope to be shaped by the challenges
                                and experiences coming my way. I am currently
                                working in Orlando, FL.
                            </p>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;