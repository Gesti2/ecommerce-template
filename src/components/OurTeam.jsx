import logo from "../assets/logo/logo_dark.svg";

import member1 from "../assets/images/members/member 1.png";
import member2 from "../assets/images/members/member 2.png";
import member3 from "../assets/images/members/member 3.png";
import member4 from "../assets/images/members/member 4.png";

import twitterIcon from "../assets/images/socials icons/twitter icon.png";
import linkedinIcon from "../assets/images/socials icons/linkedin icon.png";
import sportIcon from "../assets/images/socials icons/sport icon.png";

function OurTeam() {
  return (
    <section className="our-team">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          Our Team
        </h1>
        <hr />

        <div className="our-team__list">
          <div className="our-team__list__member">
            <img src={member1} alt="" className="photo" />
            <h3 className="name">Dr. Olivia Rhye</h3>
            <h4 className="position">Senior Veterinarian</h4>
            <div className="socials">
              <a href="#">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="#">
                <img src={sportIcon} alt="sport" />
              </a>
            </div>
          </div>

          <div className="our-team__list__member">
            <img src={member2} alt="" className="photo" />
            <h3 className="name">Phoenix Baker</h3>
            <h4 className="position">Asst. Veterinarian</h4>
            <div className="socials">
              <a href="#">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="#">
                <img src={sportIcon} alt="sport" />
              </a>
            </div>
          </div>

          <div className="our-team__list__member">
            <img src={member3} alt="" className="photo" />
            <h3 className="name">Lana Steiner</h3>
            <h4 className="position">Resident Veterinarian</h4>
            <div className="socials">
              <a href="#">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="#">
                <img src={sportIcon} alt="sport" />
              </a>
            </div>
          </div>

          <div className="our-team__list__member">
            <img src={member4} alt="" className="photo" />
            <h3 className="name">Demi Wilkinson</h3>
            <h4 className="position">Intern Veterinarian</h4>
            <div className="socials">
              <a href="#">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="#">
                <img src={sportIcon} alt="sport" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
