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
import Chart from "chart.js";
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

// core components
import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    AICollor:'primary',
    PCCollor:'primary',
    CoCollor:'primary',
    CS:0,
    alert: null,
    show: false
  };
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  inputAlert() {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "150px" }}
          title="Confirm your account"
          onConfirm={e => alert('your input is '+e)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
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
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

Content(){
    if(this.state.CS===1){
      return(
        <div>
        <h4>
        Your old Email is: XXXX@XXX.XXX
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
                    <Input placeholder="Old Email" type="email" 
                    // onChange={(e)=>{this.InputHandler("Email",e.target.value)}}
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
                    <Input placeholder="Confirm Email" type="email"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
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
                    <Input placeholder="new Email" type="email" 
                    // onChange={(e)=>{this.InputHandler("Email",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>      
                <Button className="" color='primary' type="button"
                        // onClick={(e)=>this.inputAlert()}
                        >
                           Submit
                        </Button>
                </FormGroup>
            </Form>
            </Col>
          </Row>
          </div>
      );
    }
    if(this.state.CS===2){
      return(
        <Row>
        <Col>
        <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Old Password" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
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
                    <Input placeholder="New Password" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
            </Form>
            </Col>
      <Col>
        <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Password" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                <Button className="" color='primary' type="button"
                        // onClick={(e)=>this.inputAlert()}
                        >
                           Submit
                        </Button>
                </FormGroup>
            </Form>
          </Col>
          </Row>
      );
    }
    if(this.state.CS===3){
      return(
        <div>
        {this.state.alert}
      <Row>
        <Col>
        <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Old Number" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
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
                    <Input placeholder="New Number" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
            </Form>
            </Col>
            <Col>
           <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Number" type="password"
                    // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                <Button color='primary' type="button"
                        onClick={(e)=>this.inputAlert()}>
                           Submit
                        </Button>
                </FormGroup>
            </Form>
          </Col>
          </Row>
        </div>
      );
    }
    return(
 <Form role="form">
    <div style={{textAlign:"center",margin:'10%'}}>
   Hi this is for changing your account Information
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
                <div style={{textAlign:"center"}}>
                    {/* <Row> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:'center'}}> */}
                        <Button className="my-4" color={this.state.AICollor} type="button"
                        onClick={(e)=>this.RenderAI()}
                        >
                           Account information
                        </Button>
                        {/* </div> */}
                        {/* </Col> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:''}}> */}
                        <Button className="my-4" color={this.state.PCCollor} type="button"
                         onClick={(e)=>this.RenderPC()}
                        >
                            Password Conformation
                        </Button>
                        {/* </div> */}
                        {/* </Col> */}
                        {/* <Col> */}
                        {/* <div style={{textAlign:'left'}}> */}
                        <Button className="my-4" color={this.state.CoCollor} type="button"
                         onClick={(e)=>this.RenderCo()}
                        >
                          Confirmation
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



// <Container className="mt--7" fluid>
//       <Row>
//       <Col lg="6" md="8">
//       <div style={{marginBottom:'5%'}}>
//           <Card className="bg-secondary shadow border-0">
//             <CardHeader className="bg-transparent pb-5">
//               <div className="text-muted text-center mt-2 mb-4">
//               <h3>Choose your regin center</h3>
//               </div>
//             </CardHeader>
//             <CardBody className="px-lg-5 py-lg-5">
//               <Form role="form">
//                 <FormGroup className="mb-3">
//                   <InputGroup className="input-group-alternative">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-email-83" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Email" type="email" 
//                     // onChange={(e)=>{this.InputHandler("Email",e.target.value)}}
//                     />
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup className="mb-3">
//                   <InputGroup className="input-group-alternative">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-email-83" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Confirm Email" type="email" onChange={(e)=>{this.InputHandler("Email",e.target.value)}}/>
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-lock-circle-open" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Password" type="password"
//                     // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
//                     />
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-lock-circle-open" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Confirm Password" type="password"
//                     // onChange={(e)=>{this.InputHandler("Password",e.target.value)}}
//                     />
//                   </InputGroup>
//                 </FormGroup>
//                 <div className="custom-control custom-control-alternative custom-checkbox">
//                   <input
//                     className="custom-control-input"
//                     id=" customCheckLogin"
//                     type="checkbox"
//                   />
//                   {/* <label
//                     className="custom-control-label"
//                     htmlFor=" customCheckLogin"
//                   >
//                     <span className="text-muted">Remember me</span>
//                   </label> */}
//                 </div>
//                 <div className="text-center">
//                {/* bouttone  */}
//                 </div>
             
//               </Form>
//             </CardBody>
//           </Card>
//           </div>
//         </Col>
// {/* 
//         <Col lg="6" md="8">
//           <Card className="bg-secondary shadow border-0">
//             <CardHeader className="bg-transparent pb-5">
//               <div className="text-muted text-center mt-2 mb-4">
//               <h3>Choose your regin center</h3>
//               </div>
//             </CardHeader>
//             <CardBody className="px-lg-5 py-lg-5">
//               <Form role="form">
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative mb-3">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-hat-3" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="NID" type="text" />
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative mb-3">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-email-83" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Mother Name" type="email" />
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-lock-circle-open" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Contry" type="select">
//                     <option value=''>
//                        Choose
//                     </option>
//                     <option value='libya'>
//                        libya
//                     </option>
//                     <option value='kanda'>
//                     kanda
//                     </option>
//                     </Input>
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative mb-3">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-hat-3" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="City" type="text" />
//                   </InputGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <InputGroup className="input-group-alternative mb-3">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="ni ni-hat-3" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input placeholder="Phone" type="text" />
//                   </InputGroup>
//                 </FormGroup>
//                 <div className="text-center">
//                   <Button className="mt-4" color="primary" type="button" onClick={e=>console.log('tasdasd')}>
//                     Create account
//                   </Button>
//                 </div>
//               </Form>
//             </CardBody>
//           </Card>
//         </Col> */}
//       </Row>
//  </Container> 