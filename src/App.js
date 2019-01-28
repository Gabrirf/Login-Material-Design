import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Login from "./components/Login";
import "./index.css"

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" >
            <Login />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
