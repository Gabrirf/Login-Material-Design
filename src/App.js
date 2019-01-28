import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.jpeg";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <MDBRow center style={{ height: "70vh" }}>
            <MDBCol middle="true" sm="8" className="text-center">
              <img src={logo} alt="logo" style={{ width: "10rem" }} />
              <h1>Welcome to Your MDB React App</h1>
              <p className="mb-2">The application is configured and ready to import our components.</p>
              <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
