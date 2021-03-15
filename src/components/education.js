import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear}-{this.props.endYear}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={this.props.addrMap}
            style={{
              padding: "10px",
              paddingTop: "10px",
              textDecorationLine: "none",
            }}
          >
            <img
              src={this.props.imgAddr}
              alt="logo"
              style={{ height: "200px" }}
            />
          </a>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href={this.props.schoolURL}
              style={{
                textDecorationLine: "none",
              }}
            >
              {this.props.schoolName}
            </a>
          </h4>
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
