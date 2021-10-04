import React, { Component } from 'react'
//import axios from 'axios';
import viewReport from './components/viewReport';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import ReportDetails from './components/ReportDetails';

export default class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <div>
          <div>
            {/* navbar header */}
            <div>
              <Header />

            </div>

            {/* body */}

            <div className="row">
              <div className="col-3 p-5">
                <SideBar />
              </div>
              <div className="col-9 p-5">
              <Route path="/" exact component={viewReport} />
              <Route path="/reports/get/:id" exact component={ReportDetails}></Route>
              </div>
            </div>


          </div>
        </div>

      </BrowserRouter>


    )
  }
}
