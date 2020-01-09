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
    Errors:null
  }
onclick(){
    // this.state.Password===''|| this.state.Password.length<6||
  if(this.state.Email===''){
    this.setState({Errors:(<span className="text-danger">Please enter the code that we send you</span>)});
    return;
  }
  this.setState({Errors:null});
// this.setState({isLodding:true});
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
    this.props.OnLogin(true,RM);
    window.location.pathname ='/admin/index';
  // })
  // .catch(error=>{
    // this.setState({isLodding:false});
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
        <Col lg="7" md="7">
        <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-3">
            <div className="text-center">
            <h1 className="text-black">OCVR Confirm </h1>
            </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-2">
              <div className="text-center text-muted mb-4">
                <h3>
                  Confirm your Registration number xx-xxxxx <a href="https://hnec.ly/">not my number</a>
                </h3>
              </div>
              <Form role="form">
                <FormGroup >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={(e)=>{this.InputHandler("Email",e.target.value)}}/>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                <a href="https://hnec.ly/"> resend code</a>
                </div>
                <div className="text-center pt-3">
                {this.state.Errors}
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={event=>{this.onclick()}}>
                  {this.Conntent()}
                  </Button>             
                </div>
                
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;