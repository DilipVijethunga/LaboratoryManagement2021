import React, { Component } from 'react'
import axios from 'axios';


export default class AddReport extends Component {

    
  constructor(props){
    super(props);

    this.state = {
      reports:[]
    };
  }

componentDidMount(){
  this.retrieveReports();
}

  retrieveReports(){
    axios.get("http://localhost:8000/reports/view").then(res => {
    
      if(res.data.success){
        this.setState({
          reports:res.data.existingReport
        });
      }

      console.log(this.state.reports);

    })
  }


    render() {
        return (
            <div>

           
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {this.state.reports.map((reports, index) => (

                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>
                                
                                <a href={`/reports/get/${reports._id}`}>{reports.patientID}</a>
                            </td>
                            <td>{reports.patientName}</td>
                            <td>{reports.refDoctor}</td>
                            <td>
                                <a className="btn btn-warning" href={`/edit/${reports._id}`}>Edit</a>&nbsp;
                                <a className="btn btn-danger" href="/delete">Delete</a>
                            </td>
                        </tr>


                    ))}
                </tbody>


            </table>
        </div>
                
        )
    }
}
