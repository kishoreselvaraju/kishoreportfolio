import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Kishore Selvaraju </h2>
            <h4 style={{ color: "grey" }}> Programmer </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Graduate student with 4.2 years of experience in developing
              analytical dashboards, microservice - based web
              applications.Ability to deliver data analytics and advanced data
              driven methods.Actively developing skillset in creating edge
              predictive model, NLP and deep learning solutions.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5> Address </h5>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/13°02'17.0%22N+80°12'45.1%22E/@13.038057,80.2103373,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d13.0380575!4d80.2125264"
                style={{ textDecorationLine: "none", color: "blue" }}
              >
                H - 25 D, Manthope colony, Ashok Nagar, Chennai 600083
              </a>
            </p>
            <h5> Phone </h5> <p> (091) - 6380831635 </p> <h5> email </h5>
            <p> selvarajukishore94 @gmail.com </p> <h5>Web Site</h5>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://kishoreselvaraju.github.io/kishoreportfolio/"
                style={{
                  textDecorationLine: "none",
                  color: "green",
                }}
              >
                Kishore Selvaraju
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="/kishoreportfolio/src/asserts/Resume.pdf"
              >
                Click here to download Resume
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Education </h2>
            <Education
              startYear={2021}
              endYear={2023}
              imgAddr="https://www.uwindsor.ca/sites/default/files/uwindsor-new-logo-desktop_1024x768_2.jpg"
              schoolName="University of Windsor"
              schoolURL="https://www.uwindsor.ca"
              schoolDescription="Master of Engineering - Electrical and Computer Engineering"
              addrMap="https://www.google.com/maps/place/University+of+Windsor/@42.3043142,-83.0682277,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2d77c6ec4bef:0x1a44f1192a4e41ee!8m2!3d42.3043142!4d-83.066039"
            />
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Anna University"
              imgAddr="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/1200px-Anna_University_Logo.svg.png"
              schoolDescription="Bachelor of Engineering- Electronics and Instrumentation"
              schoolURL="https://www.annauniv.edu"
              addrMap="https://www.google.com/maps/place/Anna+University/@13.0108831,80.2331881,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba8f64332436e5f:0xb6f3e0a8c0889229!8m2!3d13.0108831!4d80.2353768"
            />
            <hr style={{ boarderTop: "3px solid #e22947" }} />
            <h2> Experience </h2>
            <Experience
              startYear={2016}
              endYear="present"
              company=" Tata Consultancy Service"
              imgAddr="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/TCS-logo.png"
              jobName="Full Stack Developer "
              jobDescription=" System Engineer "
              companyURL="https://www.tcs.com"
              addrMap="https://www.google.com/maps/search/tcs+siruseri/@12.8286841,80.2157353,17z/data=!3m1!4b1"
            />
            <hr style={{ boarderTop: "3px solid #e22947" }} /> <h2> Skills </h2>
            <Skills skill="Java" progress={100} />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="React" progress={50} />
            <Skills skill="SQL" progress={100} />
            <Skills skill="Neo4j" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
