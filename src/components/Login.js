import React from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import logo from "../logo.jpeg";

const FormPage = () => {
  return (
    <MDBCard>
        <MDBCardBody>
            <div class="text-center">
              <img src={logo} alt="logo" style={{ width: "10rem" }} />
            </div>
            <form>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                    <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />
                    <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    />
                </div>
                <div className="text-center">
                    <MDBBtn>Login</MDBBtn>
                </div>
            </form>
        </MDBCardBody>
    </MDBCard>
  );
};

export default FormPage;