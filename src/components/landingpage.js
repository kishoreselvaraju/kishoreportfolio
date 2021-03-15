import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Java | React | JavaScript | NodeJs | Neo4j |
                Postgress | TensorFlow
              </p>
              <div className="social-links">
                {/* Twitter */}
                <a href="https://twitter.com/erkichu" target="_blank">
                  <i class="fa fa-twitter-square" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/kishore.vengadesh"
                  target="_blank"
                >
                  <i class="fa fa-facebook-square" />
                </a>
                {/* linkedIn */}
                <a
                  href="https://www.linkedin.com/in/kishore-selvaraju/"
                  target="_blank"
                >
                  <i
                    class="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/* GitHub */}
                <a href="https://github.com/kishoreselvaraju" target="_blank">
                  <i
                    class="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                {/* CodeCamp */}
                <a href="https://google.com" target="_blank">
                  <i class="fa fa-free-code-camp" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
