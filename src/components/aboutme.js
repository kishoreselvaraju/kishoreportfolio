import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={2}>
            <h2> Early life </h2>
          </Cell>
          <Cell col={8}>
            <p className="about-me-description">
              an full stack developer who would like to work in challenging
              environment and pushing the limit and to excel.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default About;
