import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am MERN Developer
                    <span></span>
                </h1>
                <p className="h-sub-text">
                    I am a young java script developer working with the ReactJS. Pushing forward to gain more experience with React, NodeJs, MongoDB/Postman JavaScript and a litle bit of testing with Jest. Check out my repositories on github by clicking on icon below.
                </p>
                <div className="icons">
                    {/* <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link> */}
                    <a href="https://github.com/login101i" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                    {/* <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link> */}
                </div>
            </header>
        </div>
    )
}

export default HomePage;
