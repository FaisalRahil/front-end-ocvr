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
             الرجاء تعبأت كافة الحقول
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
          title: 'تأكيد على البيانات',
          message: 'الاسم المذكور اعلاه',
          buttons: [
            {
              label: 'نعم',
              onClick: () => this.redirect(true)
            },
            {
              label: 'لا',
              onClick: () => console.log('no')
              
            }
          ]
        });
         return;
       }
       this.setState({
        Allfields : (
          <h4 className="text-danger" style={{float:'right',paddingBottom:12}}>
          الرقم الوطني لايتوافق 
          </h4>
        )
      })
      return;
     } 
     this.setState({
      emailError: (
        <h2 className="text-danger" style={{float:'right',paddingBottom:12}}>
       البريد لالكتروني غير مطابق
        </h2>
      )
    })
    return;
    }
    this.setState({
      passwordError: (
        <small className="text-danger" style={{float:'right',paddingBottom:12}}>
         كلمة المرور غير مطابقة
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
          <small className="text-danger" style={{float:'right',paddingBottom:12}}>
     الرمز السري يجب ان يكون اكثر من سته احرف
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
          <small className="text-danger" style={{float:'right',paddingBottom:12}}>
           البريد الالكتروني يجب ان يكون مثل 
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
              <h3>بيانات الشخصية </h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" style={{direction:'rtl'}}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="البريد الالكترةني " type="email" 
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
                    <Input placeholder=" تأكيد البريد الالكتروني " type="email" 
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
                    <Input placeholder="الرمز السري " type="password"
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
                    <Input placeholder="تأكيد الرمز" type="password"
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
              <h3>البيانات الشخصية</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" style={{direction:'rtl'}}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="الرقم الوطني " type="text"
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
                    <Input placeholder="التأكيد على الرقم الوطني" type="text"
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
                    <Input placeholder="تأكيد رمز التسجيل" type="text" 
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
                    <Input placeholder="اسم الام" type="email" 
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
                    <Input placeholder="البلد" type="select" onChange={(e)=>{this.InputChangeHandler("Country",e.target.value)}}>
                    <option value=''>
                       اختيار البلد
                    </option>
                    <option value='libya'>
                       ليبيا
                    </option>
                    <option value='kanda'>
                    تونس
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
                    <Input placeholder="مدينة " type="select"
                      onChange={(e)=>{this.InputChangeHandler("City",e.target.value)}}
                    >
                    <option value=''>
                       اختر المدينة 
                    </option>
                    <option value='libya'>
                      بنغازي
                    </option>
                    <option value='kanda'>
                      طرابلس
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
                    <Input placeholder="رقم الهاتف" type="number" 
                    onChange={(e)=>{this.InputChangeHandler("Phone",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                {this.state.Allfields}
                </div>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.create()}>
                    تكوين حساب
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
