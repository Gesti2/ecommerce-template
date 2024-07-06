// import logo from "../assets/logo/logo_dark.svg";
import logo from "../assets/logo/logo.svg"; // white logo

import mailIcon from "../assets/images/footer icons/mail.png";
import chatIcon from "../assets/images/footer icons/message-circle.png";
import mapIcon from "../assets/images/footer icons/map-pin.png";
import phoneIcon from "../assets/images/footer icons/phone.png";

import twitter from "../assets/images/footer icons/footer socials icons/twitter.png";
import linkedin from "../assets/images/footer icons/footer socials icons/linkedin.png";
import facebook from "../assets/images/footer icons/footer socials icons/facebook.png";
import github from "../assets/images/footer icons/footer socials icons/github.png";
import peace from "../assets/images/footer icons/footer socials icons/peace.png";
import ball from "../assets/images/footer icons/footer socials icons/ball.png";

function GetInTouch() {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <h1 className="title">
          <img src={logo} alt="dogo" />
          Get In Touch
        </h1>
        <hr />
        <div className="footer__content">
          <div className="contact">
            <div className="contact__form">
              <div className="input-box name">
                <label htmlFor="firstName">First name</label>
                <input
                  id="first"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="input-box surname">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="last"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <div className="input-box email">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="input-box message">
                <label htmlFor="message">Message</label>
                <textarea name="message" type="text"></textarea>
              </div>

              <div className="check-input">
                <input name="agree" type="checkbox" required />
                <label htmlFor="agree">
                  You agree to our friendly <a href="">privacy policy</a>.
                </label>
              </div>

              <button className="btn btn__secondary" type="submit">
                Send message
              </button>
            </div>
            <div className="contact__details">
              <div className="email">
                <img src={mailIcon} alt="email" />
                <h4>Email</h4>
                <p>Our friendly team is here to help.</p>
                <a href="#">hello@pawsnplay.com</a>
              </div>
              <div className="chat">
                <img src={chatIcon} alt="chat" />
                <h4>Live chat</h4>
                <p>Our friendly team is here to help.</p>
                <a href="#">Start new chat</a>
              </div>
              <div className="Office">
                <img src={mapIcon} alt="office" />
                <h4>Office</h4>
                <p>Come say hello at our office HQ.</p>
                <a href="#">123, Yaya Abatan st, Ogba Lagos.</a>
              </div>
              <div className="phone">
                <img src={phoneIcon} alt="phone" />
                <h4>Phone</h4>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="#">+234 901234 284</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="links">
            <div className="links__top">
              <div className="links__top__text">
                <h3>Join our newsletter</h3>
                <p>
                  Be the first to receive latest updates on promox, sales and
                  offers
                </p>
              </div>
              <div className="links__top__form">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <button className="btn btn__secondary">Subscribe</button>
              </div>
            </div>
            <div className="links__middle">
              <div className="links__middle__logo">
                <div className="logo">
                  <img src={logo} alt="" />
                  <h3>Paws n&apos; Play</h3>
                </div>
                <p>Where wagging tails and purring hearts reign supreme!</p>
              </div>
              <div className="links__middle__text">
                <ul className="shop">
                  <li>Shop</li>
                  <li>Pet Adoption</li>
                  <li>Nutrition</li>
                  <li>Pet Care</li>
                  <li>Pet Food</li>
                  <li>Pricing</li>
                </ul>
                <ul className="company">
                  <li>Company</li>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>
                <ul className="services">
                  <li>Services</li>
                  <li>Grooming</li>
                  <li>Boarding</li>
                  <li>Training</li>
                  <li>Vetinary</li>
                  <li>Support</li>
                </ul>
                <ul className="social">
                  <li>Social</li>
                  <li>Twitter</li>
                  <li>Linkedin</li>
                  <li>Facebook</li>
                  <li>AngelList</li>
                  <li>Dribble</li>
                </ul>
                <ul className="legal">
                  <li>Legal</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                  <li>Cookies</li>
                  <li>Licenses</li>
                  <li>Settings</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="links__bottom">
              <p>© 2024 Paws n&apos; Play. All rights reserved.</p>
              <div className="links__bottom__icons">
                <img src={twitter} />
                <img src={linkedin} />
                <img src={facebook} />
                <img src={github} />
                <img src={peace} />
                <img src={ball} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
