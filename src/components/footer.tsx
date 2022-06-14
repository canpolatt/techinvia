import Github from "../assets/footer_github.svg";
import Facebook from "../assets/footer_facebook.svg";
import Linkedin from "../assets/footer_linkedin.svg";
import Twitter from "../assets/footer_twitter.svg";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--wrapper">
        <div className="footer--content">
          <h1 className="footer--title">techinvia</h1>
          <div className="footer--links">
            <ul className="footer--nav-links">
              <h2>Social Media</h2>
              <div>
                <li className="footer--nav-link">
                  <img src={Github} alt="footer github" />
                </li>
                <li className="footer--nav-link">
                  <img src={Facebook} alt="footer facebook" />
                </li>
                <li className="footer--nav-link">
                  <img src={Linkedin} alt="footer linkedin" />
                </li>
                <li className="footer--nav-link">
                  <img src={Twitter} alt="footer twitter" />
                </li>
              </div>
            </ul>
            <ul className="footer--social-links">
              <h2>Explore</h2>
              <div>
                <li className="footer--social-link">Home</li>
                <li className="footer--social-link">About</li>
                <li className="footer--social-link">Services</li>
                <li className="footer--social-link">Team</li>
                <li className="footer--social-link">Contact</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer--copyright">Copyright © 2022 techinvia All rights reserved.</div>
    </footer>
  );
};

export default Footer;
