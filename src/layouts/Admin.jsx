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
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import Auth from "./Auth";
// import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
// import Profile from "../views/Pages/Profile";
// import Tables from "../views/Pages/Tables";
import Index from "../views/Index";
import AI from '../views/Pages/AccuontInformation'
import routes from "routes.js";

class Admin extends React.Component {
  constructor() {
    super();
    this.Login = this.Login.bind(this);
    this.SetAoutoLogOut = this.SetAoutoLogOut.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  state={
    IsAuth:false,
    isloding:false
  }

  logoutHandler(){
    this.setState({isloding:false}); 
    this.setState({IsAuth:false});
    localStorage.removeItem('Email');
    localStorage.removeItem('expration');
    localStorage.removeItem('Password');
    localStorage.removeItem('_id');
  }

SetAoutoLogOut(timeout){
setTimeout(() => { 
  this.logoutHandler();
}, timeout);
  }
  componentWillMount(){
    this.setState({isloding:true}); 
    const Email =localStorage.getItem('Email');
    const ex =localStorage.getItem('expration');
    // const Password=localStorage.getItem('Password');
    if (!Email || !ex) {
      this.logoutHandler();
      return;
    }
    if (new Date(ex)<=new Date()) {
      this.logoutHandler();
      return;
    }
    // const formdata = {
    //   Email:Email,
    //   Password:Password
    // }
    // axios.post('http://localhost:3000/Login/Admin',formdata)
    // .then(result=>{
    //   if (result.status===201) {
    //     this.logoutHandler();
    //     return;
    //   }
    //   const remainneg = new Date(ex).getTime() - new  Date().getTime();
    //   this.SetAoutoLogOut(remainneg);
      this.setState({isloding:false}); 
    //   this.setState({IsAuth:true});
     
    // })
    // .catch(error=>{
    //   this.logoutHandler();
    // })
    this.setState({IsAuth:true});
  }
  Login(state,RM){
    if (state=== true) {
    this.setState({IsAuth:true}); 
    this.SetAoutoLogOut(RM);
    } else {
      this.setState({IsAuth:false});
    }
  }

  componentDidUpdate(e) {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.mainContent.scrollTop = 0;
  }

getRoutes = () => {
    if(window.location.pathname==='/admin/index'){
     return( 
     <Route
      path="/admin/index"
      name= "Dashboard"
      icon= "ni ni-tv-2 text-primary"
      component= {Index}
      key={1}
    />)
    }
    if(window.location.pathname==='/admin/AccountInformation'){
      return( 
      <Route
       path="/admin/AccountInformation"
       name= "Dashboard"
       icon= "ni ni-tv-2 text-primary"
       component= {AI}
       key={2}
     />)
     }
    return <Route
       name= "Dashboard"
       icon= "ni ni-tv-2 text-primary"
       component= {Index}
       key={999}
     />
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    let content = (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/HNEC-article-photo.jpg"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
          />
          <Switch>
          {this.getRoutes()}
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
          let AuthPage = <Route render={props => <Auth OnLogin={this.Login} isLodding={this.state.isLoding}/>}/>
          if (this.state.isloding===true) {
          return(
          <div style={{textAlign:"center", lineHeight: '500px'}}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            />
          </div>
          );
          }else{
            if (this.state.IsAuth ===true) {
              return content;
            } else {
              return AuthPage;
            }
          } 
  }
}

export default Admin;