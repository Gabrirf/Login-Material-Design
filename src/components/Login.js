import React from "react";
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import logo from "../logo.jpeg";

const FormPage = () => {
  return (
    <MDBCard>
        <MDBCardBody>
            <div class="text-center">
              <img src={logo} alt="logo" style={{ width: "10rem" }} />
            </div>
            <form>
                <p className="h4 text-center mb-4">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Your email
                </label>
                <input
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                />
                <br />
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Your password
                </label>
                <input
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                />
                <div className="text-center mt-4">
                    <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                </div>
            </form>
        </MDBCardBody>
    </MDBCard>
  );
};

export default FormPage;