import React, { Component } from 'react'
//import axios from 'axios';
// import viewReport from './components/viewReport';
// import Header from './components/Header';
// import SideBar from './components/SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
// import ReportDetails from './components/ReportDetails';
// import AddReport from './components/AddReport';
// import EditReport from './components/EditReport';
import AdminPanel from './components/AdminPanel'
import Patient from './components/patient/Patient';
import PatientReport from './components/patient/PatientReport';
import Test from './components/patient/Test';

export default class App extends Component {


  render() {
    return (


      <BrowserRouter>

        {/* navbar header */}
        

        <div>
          <Route path="/admin" exact component={AdminPanel} />
          <Route path="/admin/add" exact component={AdminPanel} />
          <Route path="/admin/edit/:id" exact component={AdminPanel} />
          <Route path="/admin/reports/get/:id" exact component={AdminPanel} />
        </div>

        <div>
          <Route path="/patient" exact component={Patient} />
          <Route path="/patient/reports/get/:id" exact component={PatientReport} />
          <Route path="/test" exact component={Test} />
        </div>

      </BrowserRouter>


    )
  }
}

