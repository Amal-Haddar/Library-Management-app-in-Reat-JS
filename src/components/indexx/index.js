import React from "react";
import "./index.css";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import Contact from "../contact/contact";

function Index() {
  return (
    <div className="Index">
      <div className="Maclass">
        <Menu />
        {/* Page content  */}
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
          {/* Search  */}
          <form className="example">
            <input
              type="text"
              placeholder="Rechercher livre par nom, par auteur..."
              name="search"
            />
            <button type="submit" style={{ height: 47, color: "black" }}>
              <img
                src={require("../../assets/images/search.png")}
                alt="House"
                style={{ width: 30, height: 30 }}
              />
            </button>
          </form>
          {/* Search  */}
          {/* Livres Section */}
          <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
              Livres
            </h3>
          </div>
          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Summer House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/b.jpg")}
                  alt="House"
                  style={{ width: "100%", height: 210 }}
                />
                <h5>Le monde s'effondre</h5>
                <p className="w3-opacity">Chinua Achebe</p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Details
                  </button>
                </p>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Brick House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/c.jpg")}
                  alt="House"
                  style={{ width: "100%", height: 210 }}
                />
              </div>
              <h5>Corporate Identity Design</h5>
              <p className="w3-opacity">Veronica Napoles</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Renovated
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/d.jpg")}
                  alt="House"
                  style={{ width: "100%", height: 210 }}
                />
              </div>
              <h5>Nouvelles de voyageurs</h5>
              <p className="w3-opacity">Sébastien Acacia</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Barn House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/e.png")}
                  alt="House"
                  style={{ width: "100%", height: 210 }}
                />
              </div>
              <h5>Mesures de l'écrivain</h5>
              <p className="w3-opacity">Björn-Olav Dozo</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
          </div>
          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Summer House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/h.jpg")}
                  alt="House"
                  style={{ width: "99%", height: 210 }}
                />
              </div>
              <h5>L'ecole des sorciers</h5>
              <p className="w3-opacity">Joanne Rowling</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Brick House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/g.jpg")}
                  alt="House"
                  style={{ width: "99%", height: 210 }}
                />
              </div>
              <h5>Philosopher's stone</h5>
              <p className="w3-opacity">Joanne Rowling</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Renovated
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/f.jpg")}
                  alt="House"
                  style={{ width: "99%", height: 210 }}
                />
              </div>
              <h5>Juste un regard</h5>
              <p className="w3-opacity">Harlan Coben</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  Barn House
                </div>
                <img
                  className="zoom"
                  src={require("../../assets/images_livres/i.jpg")}
                  alt="House"
                  style={{ width: "99%", height: 210 }}
                />
              </div>
              <h5>Harry Potter</h5>
              <p className="w3-opacity">Joanne Rowling</p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
          </div>
          {/* About Section  */}
          <div className="w3-container w3-padding-32" id="about">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
              Adhérents
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                className="zoom"
                src={require("../../assets/images_personnes/fedi.jpg")}
                alt="John"
                style={{ width: "100%", height: 300 }}
              />
              <h3>Fedi Guesmi</h3>
              <p className="w3-opacity">CEO & Founder</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                className="zoom"
                src={require("../../assets/images_personnes/amal.jpg")}
                alt="Jane"
                style={{ width: "100%", height: 300 }}
              />
              <h3>Amal Haddar</h3>
              <p className="w3-opacity">Software Engineer</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                className="zoom"
                src={require("../../assets/images_personnes/ghaith.jpg")}
                alt="Mike"
                style={{ width: "100%", height: 300 }}
              />
              <h3>Ghaith Weslati</h3>
              <p className="w3-opacity">Engineer</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                className="zoom"
                src={require("../../assets/images_personnes/ahmed.jpg")}
                alt="Dan"
                style={{ width: "100%", height: 300 }}
              />
              <h3>Ahmed Cherif</h3>
              <p className="w3-opacity">Network Engineer</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Details
                </button>
              </p>
            </div>
          </div>
          {/*  Contact Section  */}
          <Contact />
          {/*  Contact Section  */}
          {/* Image end */}
          <div className="w3-container">
            <img
              src={require("../../assets/images/5.jpg")}
              alt=""
              className="w3-image"
            />
          </div>
          {/* End page content  */}
        </div>

        {/* Footer  */}
        <Footer />
        {/* Footer  */}
      </div>
    </div>
  );
}

export default Index;
