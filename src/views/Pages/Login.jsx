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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
// import axios from 'axios'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.onclick = this.onclick.bind(this);
  }
  state={
    Password:'',
    Email:'',
    isLodding:false,
    Errors:''
  }
onclick(){
  if(this.state.Password===''|| this.state.Password.length<6||this.state.Email===''){
    this.setState({Errors:"Please Fill the Feilds"});
    return;
  }
this.setState({isLodding:true});
// const formdata = {
//   Email:this.state.Email,
//   Password:this.state.Password
// }
  // axios.post('http://localhost:3000/Login/Admin',formdata)
  // .then(result=>{
  //   if (result.status===201) {
  //     this.setState({isLodding:false});
  //     this.setState({Errors:"User Name Password is incorrect.."});
  //     return;
  //   }
    
    localStorage.setItem('Email',this.state.Email);
    localStorage.setItem('Password',this.state.Password);
    // localStorage.setItem('_id',result.data.result);
    const RM=60*60*1000;
    const exprationdate=new Date(new Date().getTime()+RM);
    localStorage.setItem('expration',exprationdate.toISOString());
    this.setState({isLodding:false});
    window.location.pathname='/admin/index'
    this.props.OnLogin(true,RM);
  // })
  // .catch(error=>{
    this.setState({isLodding:false});
    // this.setState({Errors:error.message});
    // console.log(error);
    
  // })
}
  InputHandler(event,Value){
    this.setState({[event]:Value})
  }



Conntent(){

  if (this.state.isLodding) {
    return (
      <Loader
      type="Puff"
      color="#00BFFF"
      height={50}
      width={50}
      />
    );
  }else{
    return("Login");
  }
}
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              {/* <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div> */}
              {/* <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button> */}
                {/* <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div> */}
              <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-black">OCVR Login </h1>
                
                    {/* <p className="text-lead text-light">
                    
                    </p> */}
                  </Col>
                </Row>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={(e)=>{this.InputHandler("Email",e.target.value)}}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password"
                    onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  {/* <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label> */}
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={event=>{this.onclick()}}>
                  {this.Conntent()}
                  </Button>             
                </div>
                {this.state.Errors}
              </Form>
            </CardBody>
          </Card>
          {/* <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row> */}
        </Col>
      </>
    );
  }
}

export default Login;