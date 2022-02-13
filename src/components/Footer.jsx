import React from "react";
import study from "../assets/Study.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row footer-parent">
            <div className="col-lg-4">
              <img src={study} alt="" />
              <p className="footer-study">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eget diam at mi sollicitudin
              </p>
            </div>
            <div className="col-lg-4">
              <h5>Nos services</h5>
              {/* <p className="client font mb-0">
                Avis clients Mentions légales Plan du site Blog d’Idéematic
              </p>
              <p className="w-50 font">
                Le dictionnaire du digital ‹ Notre boutique /›
              </p> */}
              <ul>
                <li>Avis clients</li>
                <li>Mentions légales</li>
                <li>Plan du site</li>
                <li>Blog d’Idéematic</li>
                <li>Le dictionnaire du digital</li>
                <li>‹ Notre boutique /›</li>
              </ul>
            </div>
            <div className="col-lg-4 submit">
              <h5>Sign up for Special Offers!</h5>
              <input type="text" placeholder="Mail" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
