/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import Auths from "../views/Pages/Login"
import Register from "../views/Pages/Register"
import Confarmmessage from '../views/Pages/Confirmmessage'


class Auth extends React.Component { 
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  getRoutes=() => {
      var flage = localStorage.getItem('flage') === undefined ? false :localStorage.getItem('flage');
    if(window.location.pathname=== "/Confirm/Message/"){
        if (flage==='true'){
        return  <Route key={3} render={props =><Confarmmessage OnLogin={this.props.OnLogin} isLodding={this.props.isLoding} />}/>;
       } 
       window.location.pathname='/auth/register';
      }

      if(window.location.pathname=== "/auth/register"){
        return <Route key={0} render={props =><Register  OnLogin={this.props.OnLogin} isLodding={this.props.isLoding} />}/>
      }

      if(window.location.pathname=== "/auth/login"){
        return <Route key={1} render={props =><Auths OnLogin={this.props.OnLogin} isLodding={this.props.isLoding} />}/>
      }
      window.location.pathname='/auth/register';
      return <Route key={0} render={props =><Register  OnLogin={this.props.OnLogin} isLodding={this.props.isLoding} />}/>
    };
  render() {
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-5">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Welcome to OCVR system </h1>
                    <h1 className="text-white"> Out of Country Voters Regstrations </h1>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Switch>
              {this.getRoutes()}
              </Switch>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Auth;