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
  // Row,
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
    Errors:'',
    emailError:null,
    passwordErrorLogin:null
  }
onclick(){
  if (this.state.Email===''&&this.state.Password==='') {
    this.setState({
      emailError: (
        <small className="text-danger">
          Email is required and format should be <i>john@doe.com</i>.
        </small>
      ),Email:''
    });
    this.setState({
      passwordErrorLogin: (
        <small className="text-danger">
          You must enter a password of at least 6 characters.
        </small>
      ),Password:''
    })
    return;
  }
  if(this.state.Email===''){
    this.setState({
      emailError: (
        <small className="text-danger">
          Email is required and format should be <i>john@doe.com</i>.
        </small>
      ),Email:''
    })
    return;
  }
  if(this.state.Password===''){
    this.setState({
      passwordErrorLogin: (
        <small className="text-danger">
          You must enter a password of at least 6 characters.
        </small>
      ),Password:''
    })
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


  handleEmailChange(event) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(event.target.value) === false
      ? this.setState({
          emailError: (
            <small className="text-danger">
              Email is required and format should be <i>john@doe.com</i>.
            </small>
          ),Email:''
        })
      : this.setState({ emailError: null,Email:event.target.value});
  }
  handleLoginPassword(event) {
    event.target.value.length < 6
      ? this.setState({
          passwordErrorLogin: (
            <small className="text-danger">
              You must enter a password of at least 6 characters.
            </small>
          ),Password:''
        })
      : this.setState({ passwordErrorLogin: null,Password: event.target.value });
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
            <CardHeader className="bg-transparent pb-3">
                    <h1 className="text-black text-center">OCVR Login </h1>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-3">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative ">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  placeholder="Email" type="email" onChange={(e)=>{this.handleEmailChange(e)}}/>
                  </InputGroup>
                  {this.state.emailError}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password"
                    onChange={(e)=>{this.handleLoginPassword(e)}}
                    />
                  </InputGroup>
                  {this.state.passwordErrorLogin}
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={event=>{this.onclick()}}>
                  {this.Conntent()}
                  </Button>             
                </div>
                {this.state.Errors}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;