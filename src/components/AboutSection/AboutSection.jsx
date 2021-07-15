import { useEffect } from "react";
import gsap from "gsap";
import LandingIl from '../../assets/vectors/landingil.svg';
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
            <img src={LandingIl} alt="Landing Illustration" />
          </div>
          <div className="about-text">
            <p className="text" id="about-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit non voluptatem modi eligendi exercitationem amet distinctio optio itaque aspernatur voluptate cumque iste laboriosam nesciunt repudiandae dolorum ut. Porro temporibus qui omnis? Non eaque est earum perferendis alias nam ut recusandae dolores adipisci atque veniam, reiciendis, magni dignissimos neque aliquam.
            </p>
            <a href = "https://codeforces.com/profile/ScaryDaddy" className= "btn btn-primary">Codeforces Specialist</a>
          </div>
        </div>
      </main>

    </section>
  );
};

export default AboutSection;