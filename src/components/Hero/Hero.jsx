import React from "react";
import "./Hero.css";
import logo from "../../assets/logo.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import { motion, transform } from "framer-motion";
import "../PlansData/PlansData";
import "../Testinomials/Testinomials";
import "../Reason/Reason.jsx";
import "../Programme/Programme.jsx";
import "../Join/Join.jsx";

const Hero = () => {
  const transition = { type: "string", duration: 2 };
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <header className="header">
          <img src={logo} alt="" className="logo" />
          <ul className="listitems">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="#Programme">PROGRAMS</a>
            </li>
            <li>
              <a href="#Reason">WHY-US</a>
            </li>
            <li>
              <a href="#PlansData">PLANS</a>
            </li>
            <li>
              <a href="#Testinomials">TESTINOMIALS</a>
            </li>
          </ul>
        </header>
        <div className="best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="herotext">
          <div>
            <span className="hollowtext">SHAPE</span>
            <span> YOUR</span>
          </div>
          <div>
            <span>IDEAL</span>
            <span className="hollowtext"> BODY</span>
          </div>
        </div>
        <div className="quote">
          <p> GOING TO GYM IS GREAT FOR YOUR BODY</p>
          <p>BUT ITS ALSO GREAT FOR YOUR MIND</p>
        </div>
        <div className="text">
          Here we will help you to shape and build your ideal body and live up
          you life to fullest
        </div>
        <div className="batches">
          <div>
            <div className="quote1">+140</div>
            <div className="batch1">EXPERT COACHES</div>
          </div>
          <div>
            <div className="quote1">+978</div>
            <div className="batch1">MEMBERS JOINED</div>
          </div>
          <div>
            <div className="quote1">+50</div>
            <div className="batch1">FITNESS PROGRAMMES</div>
          </div>
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={{ ...transition, type: "tween" }}
            id="calories"
          >
            <img src={calories} alt="" />
            <div className="two">
              <div className="quote1">calories burnt</div>
              <div className="quote1">220Kcal</div>
            </div>
          </motion.div>
        </div>
        <div className="btn">
          <button>
            <a href="#Join1">GET STARTED</a>
          </button>
          <button>
            <a href="#PlansData">LEARN MORE</a>
          </button>
        </div>
      </div>
      <div className="right-h">
        <img src={hero_image} alt="" className="heroimage" />
        <motion.img
          initial={{ right: "37rem" }}
          whileInView={{ right: "26rem" }}
          transition={{ ...transition, type: "tween" }}
          src={hero_image_back}
          alt=""
          className="heroimageback"
        />
        {/* <div className='heart'><img src={heart} alt="" className='heart' /></div> */}
      </div>
    </div>
  );
};

export default Hero;
