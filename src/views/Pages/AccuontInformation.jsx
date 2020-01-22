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
// node.js library that concatenates classes (strings)
// import classnames from "classnames";
// javascipt plugin for creating charts
// import Chart from "chart.js";
import SweetAlert from "react-bootstrap-sweetalert";
import Scrollable from 'hide-scrollbar-react';
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
//   Form,
//   Input,
//   FormGroup,
//   Table,
} from "reactstrap";

// // core components
// import {
//   chartOptions,
//   parseOptions,
//   // chartExample1,
//   // chartExample2
// } from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    AICollor:'primary',
    PCCollor:'primary',
    CoCollor:'primary',
    CS:0,
    alert: null,
    alert2: null,
    show: false,
    Email:'',
    ConfirmEmail:"",
    NewEmail:"",
    OldPassword:"",
    NewPassword:"",
    OldNumber:"",
    NewNumber:'',
    ConfirmNumber:'',
    ConfirmPassword:"",
    flage1:0,
    flage2:0,
    emailError:null,
    NumberMessage:null,
    PasswordMessage:null
  };
  hideAlert(event) {
    this.setState({
      [event]: null
    });
  }
  inputAlert() {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block" }}
          title="تأكيد على البيانات"
          onConfirm={e => alert('your input is '+e)}
          onCancel={() => this.hideAlert('alert')}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  inputAlertFields() {
    this.setState({
      alert2: (
        <SweetAlert
          style={{ display: "block" }}
          title=" الرجاء تعبأت كافة الحقول "
          onConfirm={(e) => this.hideAlert('alert2')}
        />
      )
    });
  }
  InputHandler(event,value){
    this.setState({[event]:value});
  }

  RenderAI(){
    this.setState({AICollor:'info',PCCollor:'primary',CoCollor:'primary',CS:1});
    return;
  }

  RenderPC(){
    this.setState({AICollor:'primary',PCCollor:'info',CoCollor:'primary',CS:2});
    //set flage number 
    return;
  }

  RenderCo(){
    this.setState({AICollor:'primary',PCCollor:'primary',CoCollor:'info',CS:3});
    //set flage number 
    return;
  }
  
  Email(){
    if (this.state.Email===''||this.state.NewEmail===''||this.state.ConfirmEmail==='') {
      this.setState({flage1:0,emailError:(<h4 className="text-danger">جميع الحقول مطلوبة</h4>)});
      return;
    }
    if (this.state.Email===this.state.NewEmail) {
     return this.setState({flage1:0,emailError:( <h4 className="text-danger">لايوجد اي تغير في البريد الالكترني</h4>)});
    }
    if (this.state.ConfirmEmail!==this.state.NewEmail) {
      return this.setState({flage1:0,emailError:(<h4 className="text-danger">البريد الالكتروني لا يتوافق</h4>)});
    }
    this.setState({flage1:1,emailError:(<h4 className="text-green">جميع الحقول صحيحة</h4>)})
  }
  Password(){
    this.setState({PasswordMessage:null});
    if (this.state.NewPassword===''||this.state.ConfirmPassword===''||this.state.OldPassword==='') {
      this.setState({flage2:0,PasswordMessage:(<h4 className="text-danger">جميع الحقول مطلوبة</h4>)});
      return;
    }
    if (this.state.NewPassword===this.state.OldPassword) {
      return  this.setState({flage2:0,PasswordMessage:(<h4 className="text-danger">لايوجد اي تغير في ارمز السري</h4>)});
    }
    if (this.state.NewPassword!==this.state.ConfirmPassword){
    return  this.setState({flage2:0,PasswordMessage:(<h4 className="text-danger">لا يوجد توافق بين رموز</h4>)});
    }
    this.setState({flage2:1,PasswordMessage:(<h4 className="text-green">حميع الحقول صحيحة</h4>)})
  }

  Num(){
    if (this.state.NewNumber===''||this.state.OldNumber===''||this.state.ConfirmNumber==='') {
      this.setState({NumberMessage:(<h4 className="text-danger">جميع الحقول مطلوبة</h4>)})
      return;
    }
    if (this.state.NewNumber===this.state.OldNumber) {
      return  this.setState({NumberMessage:(<h4 className="text-danger">لايوجد تغير في ارقم الهاتف</h4>)})
    }
    if (this.state.NewNumber!==this.state.ConfirmNumber) {
      return  this.setState({NumberMessage:(<h4 className="text-danger">لايوجد توافق بين الرقام الهاتف</h4>)})
    }
    this.setState({NumberMessage:(<h4 className="text-green">حميع الحقول صحيحة</h4>)})
    if (this.state.flage1===1&&this.state.flage2===1) {
    this.setState({NumberMessage:(<h4 className="text-green">حميع الحقول صحيحة</h4>)})
     return this.inputAlert();
    }
    return this.inputAlertFields();
  }
  handleEmailChange(target,event) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(event.target.value) === false
      ? this.setState({
          emailError: (
            <small className="text-danger">
              الابريد الالكتروني يجب ان يكون  <i>john@doe.com</i>.
            </small>
          ),[target]:''
        })
      : this.setState({ emailError:null,[target]:event.target.value});
  }
Content(){
    if(this.state.CS===1){
      return(
        <div style={{direction:'rtl'}}>
        <h4 style={{textAlign:'right'}}>
          البريد الالكتروني السابق
        </h4>
        <Row>
        <Col>
        <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="البريد الالكترني السابق" type="email" 
                    // value={this.state.Email}
                    onChange={(e)=>{this.handleEmailChange("Email",e)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="التأكد على البريد الالكتروني " type="email"
                      // value={this.state.ConfirmEmail}
                    onChange={(e)=>{this.handleEmailChange("ConfirmEmail",e)}}
                    />
                  </InputGroup>
                </FormGroup>
            </Form>
            </Col>
            <Col>
            <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
              <Input placeholder="البريد الالكتروني الجديد" type="email" 
                    // value={this.state.NewEmail}
                    onChange={(e)=>{this.handleEmailChange("NewEmail",e)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup style={{float:'right'}}>      
                <Button className="" color='primary' type="button" onClick={(e)=>this.Email()}>
                           حــفــظ
                </Button>
                </FormGroup>
            </Form>
            </Col>
          </Row>
          <div className="text-center">
            {this.state.emailError}
          </div>
          </div>
      );
    }
    if(this.state.CS===2){
      return(
        <div>
        <Row>
        <Col>
        <Form role="form" style={{direction:'rtl'}}>
        <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="كلمة المرور الجديدة" type="password"
                   value={this.state.NewPassword}
                    onChange={(e)=>{this.InputHandler("NewPassword",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                
                
                <FormGroup style={{float:'right'}}>
                <Button className="" color='primary' type="button"
                        onClick={(e)=>this.Password()}
                        >
                          حــفــظ
                        </Button>
                </FormGroup>
            </Form>
            </Col>
      <Col>
        <Form role="form" style={{direction:'rtl'}}>
        <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="كلمة المرور السابقة " type="password"
                   value={this.state.OldPassword}
                    onChange={(e)=>{this.InputHandler("OldPassword",e.target.value)}}
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
            <Input placeholder="تأكد على كلمة  المرور " type="password"
                   value={this.state.ConfirmPassword}
                    onChange={(e)=>{this.InputHandler("ConfirmPassword",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
            </Form>
          </Col>
          </Row>
          <div className="text-center">
            {this.state.PasswordMessage}
          </div>
          </div>
      );
    }
    if(this.state.CS===3){
      return(
        <div>
        {this.state.alert}
        {this.state.alert2}
      <Row>
        <Col>
        <Form role="form" style={{direction:'rtl'}}>
        <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="رقم الهاتف الجديد" type="number"
                   value={this.state.NewNumber}
                    onChange={(e)=>{this.InputHandler("NewNumber",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
        
                
                <FormGroup style={{float:'right'}}>
                <Button color='primary' type="button"
                        onClick={(e)=>this.Num()}>
                           حــفــظ
                        </Button>
                </FormGroup>
            </Form>
            </Col>
            <Col>
           <Form role="form" style={{direction:'rtl'}}>
           <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="رقم الهاتف الفعلي " type="number"
                   value={this.state.OldNumber}
                    onChange={(e)=>{this.InputHandler("OldNumber",e.target.value)}}
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
                    <Input placeholder="تأكيد رقم الهاتف" type="number"
                    value={this.state.ConfirmNumber}
                    onChange={(e)=>{this.InputHandler("ConfirmNumber",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
            </Form>
          </Col>
          </Row>
          <div className="text-center">
            {this.state.NumberMessage}
          </div>
        </div>
      );
    }
    return(
 <Form role="form">
    <div style={{textAlign:"center",margin:'10%'}}>
  البيانات الشخصية
    </div>
 </Form>
    );
  }
  render() {
    return (
<>
<Scrollable>
<Header />
    {/* Page content */}
   
    <Container className="mt--7" fluid>
   
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                <div style={{textAlign:"center" ,direction:'rtl'}}>
                    {/* <Row> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:'center'}}> */}
                        <Button className="my-4" color={this.state.AICollor} type="button"
                        onClick={(e)=>this.RenderAI()}
                        >
                           بيانات البريد الالكتروني
                        </Button>
                        {/* </div> */}
                        {/* </Col> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:''}}> */}
                        <Button className="my-4" color={this.state.PCCollor} type="button"
                         onClick={(e)=>this.RenderPC()}
                        >
                            كلمـــة المـــرور
                        </Button>
                        {/* </div> */}
                        {/* </Col> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:'left'}}> */}
                        <Button className="my-4" color={this.state.CoCollor} type="button"
                         onClick={(e)=>this.RenderCo()}
                        >
                          رقم الهـــاتف
                        </Button>
                        {/* </div> */}
                        {/* </Col> */}
                    {/* </Row> */}
                    </div>
                </CardHeader>
                <CardBody>
                {this.Content()}
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
</Scrollable>
</>
    );
  }
}
export default Index;