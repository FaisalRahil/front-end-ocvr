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
  // NavItem,
  // NavLink,
  // Nav,
  // Progress,
  // Table,
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
      this.setState({Error:(<span className="text-danger">All fields requierd</span>)})
      return;
    }
    this.setState({Error:null});

  }
  ReginCenter2(){
    const rigen =this.state.rigen;
    const couns =this.state.couns;
    if(couns===''||rigen===''){
      this.setState({Error2:(<span className="text-danger">All fields requierd</span>)})
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
              <h3>Choose your regin center</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-3">
              <Form role="form">

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
                       Choose Cuntry
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
                    <Input placeholder="Contry" type="select"
                    onChange={(e)=>this.InputChangeHandler('City',e.target.value)}
                    >
                    <option value=''>
                       Choose city
                    </option>
                    <option value='libya'>
                       bngaze
                    </option>
                    <option value='kanda'>
                    sbha
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
                       Choose Center
                    </option>
                    <option value='libya'>
                       i dont know 1
                    </option>
                    <option value='kanda'>
                    i dont know 2
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup>   
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.ReginCenter()}>
                    Submit
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
              <h3>Choose your regin center</h3>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">

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
                       Choose rigen
                    </option>
                    <option value='libya'>
                       i dont know 1
                    </option>
                    <option value='kanda'>
                    i dont know 2
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
                       Choose sub couns....
                    </option>
                    <option value='libya'>
                       i dont know 1
                    </option>
                    <option value='kanda'>
                    i dont know 2
                    </option>
                    </Input>
                  </InputGroup>
                </FormGroup> 
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={e=>this.ReginCenter2()}>
                    Submit
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



// <Container className="mt--7" fluid>
// <Row>
//   <Col className="mb-5 mb-xl-0" xl="8">
//     <Card className="bg-gradient-default shadow">
//       <CardHeader className="bg-transparent">
//         <Row className="align-items-center">
//           <div className="col">
//             <h6 className="text-uppercase text-light ls-1 mb-1">
//               Overview
//             </h6>
//             <h2 className="text-white mb-0">Sales value</h2>
//           </div>
//           <div className="col">
//             <Nav className="justify-content-end" pills>
//               <NavItem>
//                 <NavLink
//                   className={classnames("py-2 px-3", {
//                     active: this.state.activeNav === 1
//                   })}
//                   href="#pablo"
//                   onClick={e => this.toggleNavs(e, 1)}
//                 >
//                   <span className="d-none d-md-block">Month</span>
//                   <span className="d-md-none">M</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                   className={classnames("py-2 px-3", {
//                     active: this.state.activeNav === 2
//                   })}
//                   data-toggle="tab"
//                   href="#pablo"
//                   onClick={e => this.toggleNavs(e, 2)}
//                 >
//                   <span className="d-none d-md-block">Week</span>
//                   <span className="d-md-none">W</span>
//                 </NavLink>
//               </NavItem>
//             </Nav>
//           </div>
//         </Row>
//       </CardHeader>
//       <CardBody>
//         {/* Chart */}
//         <div className="chart">
//           <Line
//             data={chartExample1[this.state.chartExample1Data]}
//             options={chartExample1.options}
//             getDatasetAtEvent={e => console.log(e)}
//           />
//         </div>
//       </CardBody>
//     </Card>
//   </Col>
//   <Col xl="4">
//     <Card className="shadow">
//       <CardHeader className="bg-transparent">
//         <Row className="align-items-center">
//           <div className="col">
//             <h6 className="text-uppercase text-muted ls-1 mb-1">
//               Performance
//             </h6>
//             <h2 className="mb-0">Total orders</h2>
//           </div>
//         </Row>
//       </CardHeader>
//       <CardBody>
//         {/* Chart */}
//         <div className="chart">
//           <Bar
//             data={chartExample2.data}
//             options={chartExample2.options}
//           />
//         </div>
//       </CardBody>
//     </Card>
//   </Col>
// </Row>
// <Row className="mt-5">
//   <Col className="mb-5 mb-xl-0" xl="8">
//     <Card className="shadow">
//       <CardHeader className="border-0">
//         <Row className="align-items-center">
//           <div className="col">
//             <h3 className="mb-0">Page visits</h3>
//           </div>
//           <div className="col text-right">
//             <Button
//               color="primary"
//               href="#pablo"
//               onClick={e => e.preventDefault()}
//               size="sm"
//             >
//               See all
//             </Button>
//           </div>
//         </Row>
//       </CardHeader>
//       <Table className="align-items-center table-flush" responsive>
//         <thead className="thead-light">
//           <tr>
//             <th scope="col">Page name</th>
//             <th scope="col">Visitors</th>
//             <th scope="col">Unique users</th>
//             <th scope="col">Bounce rate</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">/argon/</th>
//             <td>4,569</td>
//             <td>340</td>
//             <td>
//               <i className="fas fa-arrow-up text-success mr-3" />{" "}
//               46,53%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/index.html</th>
//             <td>3,985</td>
//             <td>319</td>
//             <td>
//               <i className="fas fa-arrow-down text-warning mr-3" />{" "}
//               46,53%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/charts.html</th>
//             <td>3,513</td>
//             <td>294</td>
//             <td>
//               <i className="fas fa-arrow-down text-warning mr-3" />{" "}
//               36,49%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/tables.html</th>
//             <td>2,050</td>
//             <td>147</td>
//             <td>
//               <i className="fas fa-arrow-up text-success mr-3" />{" "}
//               50,87%
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">/argon/profile.html</th>
//             <td>1,795</td>
//             <td>190</td>
//             <td>
//               <i className="fas fa-arrow-down text-danger mr-3" />{" "}
//               46,53%
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Card>
//   </Col>
//   <Col xl="4">
//     <Card className="shadow">
//       <CardHeader className="border-0">
//         <Row className="align-items-center">
//           <div className="col">
//             <h3 className="mb-0">Social traffic</h3>
//           </div>
//           <div className="col text-right">
//             <Button
//               color="primary"
//               href="#pablo"
//               onClick={e => e.preventDefault()}
//               size="sm"
//             >
//               See all
//             </Button>
//           </div>
//         </Row>
//       </CardHeader>
//       <Table className="align-items-center table-flush" responsive>
//         <thead className="thead-light">
//           <tr>
//             <th scope="col">Referral</th>
//             <th scope="col">Visitors</th>
//             <th scope="col" />
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">Facebook</th>
//             <td>1,480</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">60%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="60"
//                     barClassName="bg-gradient-danger"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Facebook</th>
//             <td>5,480</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">70%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="70"
//                     barClassName="bg-gradient-success"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Google</th>
//             <td>4,807</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">80%</span>
//                 <div>
//                   <Progress max="100" value="80" />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">Instagram</th>
//             <td>3,678</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">75%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="75"
//                     barClassName="bg-gradient-info"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <th scope="row">twitter</th>
//             <td>2,645</td>
//             <td>
//               <div className="d-flex align-items-center">
//                 <span className="mr-2">30%</span>
//                 <div>
//                   <Progress
//                     max="100"
//                     value="30"
//                     barClassName="bg-gradient-warning"
//                   />
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Card>
//   </Col>
// </Row>
// </Container> 