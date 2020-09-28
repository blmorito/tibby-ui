import React from "react";
import "./App.css";
import NavBar from "./nav/NavBar"
import bg from "./bg.png";
import why from "./why.png";
function App() {
  return (
    <div>
      <NavBar />
      <div className="action-section">
        <img src={bg} alt="action"></img>
        <div className="container">
          <div className="row" style={{ minHeight: "85vh" }}>
            <div className="col-sm-6 col-xs-12">
              <div className="heading-wrap">
                <h1 className="heading">Collaborate with ease</h1>
                <h3 className="subheading">
                  With Tibby's help, you can find communities within Accenture.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hiw-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 text-center">
              <img src={why} alt="why" />
            </div>
            <div className="col-sm-6 col-xs-12 ">
              <h1
                className="text-center"
                style={{ marginBottom: 50, fontWeight: 700 }}
              >
                Tibby, your friendly community finder
              </h1>
              <div className="hiw-card">
                <h2>Why Tibby?</h2>
                <p>
                  Our goal is to build a culture of collaboration at work. And
                  one way of doing this is to create a working environment that
                  enables employees to communicate openly and honestly and to
                  form meaningful bonds with one another.
                </p>
              </div>
              <div className="hiw-card">
                <h2>Tibby to the rescue!</h2>
                <p>
                  Find people that you share common goals with. Whether its a
                  skill, a hobby, or a niche subculture, people that possess a
                  deep sense of affiliation are driven to take positive actions
                  that benefit everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comm-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-xs-12">
              <h1>There's a community for everyone</h1>
              <p>
                Find communities ranging from skill specific groups to hobbies like gaming and art. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Crafted with ❤ by the Lambo Sugbo - Coolab Team
      </footer>
    </div>
  );
}

export default App;
