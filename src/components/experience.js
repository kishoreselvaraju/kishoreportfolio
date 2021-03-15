import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
            <a target="_blank" rel="noreferrer" href={this.props.addrMap}>
              <img
                src={this.props.imgAddr}
                alt="logo"
                style={{ height: "100px", padding: "10px", paddingTop: "10px" }}
              />
            </a>
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            {this.props.jobName}
            at
            <a
              target="_blank"
              rel="noreferrer"
              href={this.props.companyURL}
              style={{
                textDecorationLine: "none",
              }}
            >
              {this.props.company}
            </a>
          </h4>
          <p> {this.props.jobDescription} </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
