import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Login from "./components/Login";
import "./index.css";
import logo from "./logo.jpeg";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" >
            <div class="text-center">
              <img src={logo} alt="logo" style={{ width: "10rem" }} />
            </div>
            <Login />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
