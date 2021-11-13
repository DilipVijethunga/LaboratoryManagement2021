import React, { Component } from 'react'
import Header from '../Header';
import axios from 'axios';

export default class Patient extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reports: []
        };
    }

    componentDidMount() {
        this.retrieveReports();
    }

    retrieveReports() {
        axios.get("http://localhost:8000/reports/view").then(res => {

            if (res.data.success) {
                this.setState({
                    reports: res.data.existingReport
                });
            }

            console.log(this.state.reports);

        });
    }


    //search function

    filterData(reports, search) {

        const result = reports.filter((reports) =>
            reports.patientName.toLowerCase().includes(search) ||
            reports.refDoctor.toLowerCase().includes(search)
        )

        this.setState({ reports: result })
    }

    handleSearch = (e) => {

        const search = e.currentTarget.value;

        axios.get("http://localhost:8000/reports/view").then(res => {

            if (res.data.success) {

                this.filterData(res.data.existingReport, search)
            }

        });

    }



    render() {
        return (
            <div>

                <div>
                    <Header />
                </div>

                <div className="container">
                    <div>

                        <div className="col-lg-5 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                name="searchQuery"
                                onChange={this.handleSearch}>
                            </input>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Patient ID</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Doctor Name</th>
                                    
                                </tr>
                            </thead>

                            <tbody>

                                {this.state.reports.map((reports, index) => (

                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>

                                            <a href={`/patient/reports/get/${reports._id}`}>{reports.patientID}</a>
                                        </td>
                                        <td>{reports.patientName}</td>
                                        <td>{reports.refDoctor}</td>
                                        
                                    </tr>


                                ))}
                            </tbody>


                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
