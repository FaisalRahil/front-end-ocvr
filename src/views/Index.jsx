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
  Col,
  Form,
  Input,
  InputGroup,
  FormGroup,
  InputGroupText,
  InputGroupAddon,

} from "reactstrap";

// core components

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    Country:'',
    City:'',
    Center:"",
    rigen:'',
    couns:'',
    Error:null,
    Error2:null,
  };

  InputChangeHandler(event,value){
    this.setState({[event]:value});
  }

  ReginCenter(){
    const Contry =this.state.Country;
    const City =this.state.City;
    const Center=this.state.Center;
    if(Contry===''||City===''||Center===''){
      this.setState({Error:(<span className="text-danger">ارجاء تعبئة كافة الحقول</span>)})
      return;
    }
    this.setState({Error:null});

  }
  ReginCenter2(){
    const rigen =this.state.rigen;
    const couns =this.state.couns;
    if(couns===''||rigen===''){
      this.setState({Error2:(<span className="text-danger">ارجاء تعبئة كافة الحقول</span>)})
      return;
    }
    this.setState({Error2:null});
  }
  componentWillMount() {
  }
  render() {
    return (
      <>
<Header />
{/* Page content */}
<Container className="mt--7" fluid>
      <Row>
      <Col lg="6" md="8">
      <div style={{marginBottom:'5%'}}>
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-2">
              <div className="text-center mt-2 mb-4">
              <h3>اختر الـــمنطقة</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-3">
              <Form role="form" style={{ direction:'rtl'}}>
              <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contry" type="select"
                    onChange={(e)=>this.InputChangeHandler('Country',e.target.value)}
                    >
                    <option value=''>
                       اختر بلد
                    </option>
                    <option value='libya'>
                       ليبيا
                    </option>
                    <option value='kanda'>
                    كندا
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
                    <Input placeholder="Contry" type="select"
                    onChange={(e)=>this.InputChangeHandler('City',e.target.value)}
                    >
                    <option value=''>
                      اختر مدينة
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
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contry" type="select"
                     onChange={(e)=>this.InputChangeHandler('Center',e.target.value)}
                    >
                    <option value=''>
                       اختر مركز اقتراع
                    </option>
                    <option value='libya'>
                      مركز الهضبة 
                    </option>
                    <option value='kanda'>
                   مركز ابوسليم
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup>   
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.ReginCenter()}>
                    حــفـــظ
                  </Button>
                </div>   
                <div className="text-center pt-3">
                  {this.state.Error}
                </div>          
              </Form>
            </CardBody>
          </Card>
          </div>
        </Col>

        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-2">
              <div className="text-muted text-center mt-2 mb-4">
              <h3>اختار منطقة الاقتراع</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" style={{ direction:'rtl'}}>

              <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="rigen" type="select"
                     onChange={(e)=>this.InputChangeHandler('rigen',e.target.value)}
                    >
                    <option value=''>
                       اختر منطقة
                    </option>
                    <option value='libya'>
                     ليبيا
                    </option>
                    <option value='kanda'>
                    تشاد
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
                    <Input placeholder="couns" type="select"
                    onChange={(e)=>this.InputChangeHandler('couns',e.target.value)}
                    >
                    <option value=''>
                       اختر فرع
                    </option>
                    <option value='libya'>
                       طائر النورس حلق 
                    </option>
                    <option value='kanda'>
                    حلق حلق 
                    </option>
                    <option value='kanda'>
                    بجنحيه وصفق
                    </option>
                    <option value='kanda'>
                   صفق صفق
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup> 
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.ReginCenter2()}>
                    حــفــظ
                  </Button>
                </div>
              </Form>
              <div className="text-center  pt-3">
              {this.state.Error2}
              </div>
            </CardBody>
          </Card>
        </Col>
</Row>
 </Container> 
        
      </>
    );
  }
}

export default Index;

