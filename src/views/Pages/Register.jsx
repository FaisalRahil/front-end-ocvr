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
// import { Redirect, Switch } from "react-router-dom";
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
  Col,
} from "reactstrap";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
class Register extends React.Component {

  state={
    Email:'',
    ConfirmEmail:'',
    Password:'',
    ConfirmPassword:"",
    NID:"",
    ConfirmNID:"",
    ConfirmRegstrationNumber:"",
    MotherName:"",
    Country:'',
    City:"",
    Phone:"",
    emailError:null,
    passwordError:null,
    Allfields:null
  }

  redirect(foo){
  localStorage.setItem('flage',foo);
   return(
    window.location.pathname='/Confirm/Message/'
   ); 
  }
  create(){
    const password=this.state.Password;
    const ConfirmPassword = this.state.ConfirmPassword;
    const Email = this.state.Email;
    const ConfirmEmail = this.state.ConfirmEmail;
    const NID = this.state.NID;
    const ConfirmNID=this.state.ConfirmNID;
    const CRN=this.state.ConfirmRegstrationNumber;
    const MotherName = this.state.MotherName;
    const Country=this.state.Country;
    const City= this.state.City;
    const Phone = this.state.Phone;
    if(Email===''||ConfirmEmail===''||NID===''||ConfirmNID===''||CRN===''
        ||MotherName===''||Country===""||City===""||Phone==='')
    {
      this.setState({
        Allfields: (
          <h4 className="text-danger">
             All field requierd
          </h4>
        )
      })
      return;
    }
    if (password===ConfirmPassword) {
     if(Email===ConfirmEmail){
       if (NID===ConfirmNID) {
        this.setState({passwordError:null,emailError:null,Allfields:null});
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Name of person from CRA',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.redirect(true)
            },
            {
              label: 'No',
              onClick: () => console.log('no')
              
            }
          ]
        });
         return;
       }
       this.setState({
        Allfields : (
          <h4 className="text-danger">
          NID not match
          </h4>
        )
      })
      return;
     } 
     this.setState({
      emailError: (
        <h2 className="text-danger">
        Email not match
        </h2>
      )
    })
    return;
    }
    this.setState({
      passwordError: (
        <small className="text-danger">
          Passwords not match
        </small>
      )
    })
  }
InputChangeHandler(event,value){
    this.setState({[event]:value});
}
handlePasswordChange(traget,event) {
  event.target.value.length < 6
    ? this.setState({
        passwordError: (
          <small className="text-danger">
            You must enter a password of at least 6 characters.
          </small>
        ),[traget]:''
      })
    : this.setState({ passwordError: null,[traget]:event.target.value});
}
handleEmailChange(target,event) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(event.target.value) === false
    ? this.setState({
        emailError: (
          <small className="text-danger">
            Email is required and format should be <i>john@doe.com</i>.
          </small>
        ),[target]:''
      })
    : this.setState({ emailError:null,[target]:event.target.value});
}

  render() {
    return (
      <>
      <Col lg="5" md="7">
      <div style={{marginBottom:'5%'}}>
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-3">
              <div className=" text-center ">
              <h3>Account information</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" 
                    onChange={(e)=>{this.handleEmailChange('Email',e)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Email" type="email" 
                    onChange={(e)=>{this.handleEmailChange('ConfirmEmail',e)}}
                    />
                  </InputGroup>
                </FormGroup>
                {this.state.emailError}
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password"
                    onChange={(e)=>{this.handlePasswordChange("Password",e)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Password" type="password"
                    onChange={(e)=>{this.handlePasswordChange("ConfirmPassword",e)}}
                    />
                  </InputGroup>
                </FormGroup>
                {this.state.passwordError}
              </Form>
            </CardBody>
          </Card>
          </div>
        </Col>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-3">
              <div className="text-center">
              <h3>Personal information</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="NID" type="text"
                    onChange={(e)=>{this.InputChangeHandler("NID",e.target.value)}}
                     />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Conform NID" type="text"
                      onChange={(e)=>{this.InputChangeHandler("ConfirmNID",e.target.value)}}
                     />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Conform Regestration number" type="text" 
                        onChange={(e)=>{this.InputChangeHandler("ConfirmRegstrationNumber",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Mother Name" type="email" 
                    onChange={(e)=>{this.InputChangeHandler("MotherName",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contry" type="select" onChange={(e)=>{this.InputChangeHandler("Country",e.target.value)}}>
                    <option value=''>
                       Choose Contry
                    </option>
                    <option value='libya'>
                       libya
                    </option>
                    <option value='kanda'>
                    kanda
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="City" type="select"
                      onChange={(e)=>{this.InputChangeHandler("City",e.target.value)}}
                    >
                    <option value=''>
                       Choose City
                    </option>
                    <option value='libya'>
                      bangazi
                    </option>
                    <option value='kanda'>
                      Tripoly
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone" type="number" 
                    onChange={(e)=>{this.InputChangeHandler("Phone",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                {this.state.Allfields}
                </div>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.create()}>
                    Create account
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

export default Register;
