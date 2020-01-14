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
import Index from "views/Index.jsx";
// import Profile from "views/Pages/Profile.jsx";
// import Maps from "views/Pages/Maps.jsx";
// import Register from "views/Pages/Register.jsx";
// import Login from "views/Pages/Login.jsx";
// import Tables from "views/Pages/Tables.jsx";
import AI from "views/Pages/AccuontInformation.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/AccountInformation",
    name: "Account",
    icon: "ni ni-planet text-blue",
    component: AI,
    layout: "/admin"
  },
];
export default routes;
