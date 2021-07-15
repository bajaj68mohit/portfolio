import { useEffect } from "react";
import gsap from "gsap";
import krish from '../../assets/vectors/Krish.jpg';
// Stylesheets
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#about-heading", {
      scrollTrigger: "#about-heading",
      opacity: 1,
      duration: 2,
      delay: 3.5,
    })
      .from("#about-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to("#about-content", {
        scrollTrigger: "#about-content",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from("#about-content", {
        x: -100,
        duration: 2,
        delay: -2,
      });
  }, []);

  return (
    <section className="about" id="about">
      <header>
        <h2 className="heading" id="about-heading">
          About Me
        </h2>
      </header>
      <main>
        <div className = "about-div">
          <div className="about-pic">
            <img src={krish} alt="Landing Illustration"/>
          </div>
          <div className="about-text">
            <p className="text" id="about-content">
            Welcome! I’m happy you’re here.
I'm Krish Bajaj from Siliguri, West Bengal. Currently, I'm a undergrad student at IIT BHU.

I am a Full Stack Web Developer who likes to work on Frontend.

Also, I love to do Competitive Programming and do some brain bashing.
            </p>
            <a target="_blank" rel="noreferrer nooopener" href = "https://codeforces.com/profile/ScaryDaddy" className= "btn btn-primary">Codeforces(Specialist)</a>
          </div>
        </div>
      </main>

    </section>
  );
};

export default AboutSection;