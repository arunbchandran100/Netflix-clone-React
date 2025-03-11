import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handlePlay = (id) => {
    navigate(`/player/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className="hero-banner" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="hero-description">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn" onClick={() => handlePlay("some_movie_id")}>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks For You"} category={"now_playing"} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
