import React from 'react'
import './Home.css'
import  Navbar  from "../../components/Navbar/Navbar";
import hero from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

function Home(){
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className="hero-banner" />
        <div className='hero-caption'>
          <img src={hero_title} alt="" className="caption-img" />
          <p className='hero-description'>
            Discovering his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an enemy.
          </p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
