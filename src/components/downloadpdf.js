import React, { Component } from "react";
import jsPDF from "jspdf";
import { Button } from "react-mdl";

class downloadPdf extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  //Declaration jsPDFGenerator function
  jsPDFGenerator = () => {
    //new document object
    var doc = new jsPDF("p", "pt");
  };
  render() {
    return <Button onClick={this.jsPDFGenerator}>GeneratePDF</Button>;
  }
}
export default downloadPdf;
