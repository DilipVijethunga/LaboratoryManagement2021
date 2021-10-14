import React, { Component } from 'react'
//import axios from 'axios';
import viewReport from './viewReport';

import SideBar from './SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import ReportDetails from './ReportDetails';
import AddReport from './AddReport';
import EditReport from './EditReport';

export default class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <div>
          <div>
            
            {/* body */}

            <div className="row">
              <div className="col-3 p-5">
                <SideBar />
              </div>
              <div className="col-9 p-5">
              <Route path="/admin" exact component={viewReport} />
              <Route path="/admin/add" exact component={AddReport} />
              <Route path="/admin/reports/get/:id" exact component={ReportDetails}></Route>
              <Route path="/admin/edit/:id" exact component={EditReport}></Route>
              </div>
            </div>


          </div>
        </div>

      </BrowserRouter>


    )
  }
}
