import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Hero from "./home hero complete.png";
import { colors } from '@material-ui/core';
const Home = () =>
{
    return(<>{
    <div className=" home">
            <div className="home_main_content ">
            <h1>We are the world largest online hiring platform</h1>
            <p>Hire all kind of professionals from our platform we garrenty you safty and quality..</p>
            <button className="">Contact</button>
            </div>

            <div className="media_icons">
                <span>< FacebookIcon className="icons"/></span>
                <span><InstagramIcon className="icons"/></span>
                <span><LinkedInIcon className="icons"/></span>
            </div>
            <div className="home_hero">
            <img src={Hero}/>
            </div>
        </div>}
    </>)
}
export default Home;