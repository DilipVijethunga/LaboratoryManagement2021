import React, { Component } from 'react'
import axios from 'axios'

export default class AddReport extends Component {

    constructor(props){
        super(props);
        this.state = {
            updatable: false,
            patientID:"",
            patientName:"",
            refDoctor:"",
            totalProtein:"",
            albumin:"",
            globulin:"",
            alGlRatio:"",
            bilirubin:"",
            aspartateTrans:"",
            alanineTrans:"",
            alkalinePos:"",
            GGT:"",
        }
    }

    //search input detection
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {patientID,patientName,refDoctor,totalProtein,albumin,globulin,alGlRatio,bilirubin,aspartateTrans,alanineTrans,alkalinePos,GGT} = this.state;

        const data = {
            patientID:patientID,
            patientName:patientName,
            refDoctor:refDoctor,
            totalProtein:totalProtein,
            albumin:albumin,
            globulin:globulin,
            alGlRatio:alGlRatio,
            bilirubin:bilirubin,
            aspartateTrans:aspartateTrans,
            alanineTrans:alanineTrans,
            alkalinePos:alkalinePos,
            GGT:GGT
        }
        
        axios.post("http://localhost:8000/reports/add", data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        patientID:"",
                        patientName:"",
                        refDoctor:"",
                        totalProtein:"",
                        albumin:"",
                        globulin:"",
                        alGlRatio:"",
                        bilirubin:"",
                        aspartateTrans:"",
                        alanineTrans:"",
                        alkalinePos:"",
                        GGT:""
                    }
                )
            }
        })
        
    }

    render() {
        return (
        
            <div className="container">
            <form>
                <h2>Patient Details</h2>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Patient ID</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="patientID" 
                        placeholder="Enter Patient ID"
                        value={this.state.patientID}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Patient Name</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="patientName" 
                        placeholder="Enter Patient Name"
                        value={this.state.patientName}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Doctor Name</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="refDoctor" 
                        placeholder="Enter Doctor Name"
                        value={this.state.refDoctor}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>

                <h2>Report Details</h2>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Total Protein</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="totalProtein" 
                        placeholder=""
                        value={this.state.totalProtein}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Albumin</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="albumin" 
                        placeholder=""
                        value={this.state.albumin}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>

                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Globulin</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="globulin" 
                        placeholder=""
                        value={this.state.globulin}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Albumin/Globulin Ratio</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="alGlRatio" 
                        placeholder=""
                        value={this.state.alGlRatio}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Bilirubin- Total</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="bilirubin" 
                        placeholder=""
                        value={this.state.bilirubin}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Aspartate Transaminase(AST/SGOT)</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="aspartateTrans" 
                        placeholder=""
                        value={this.state.aspartateTrans}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Alanine Transaminase(ALT/SGPT)</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="alanineTrans" 
                        placeholder=""
                        value={this.state.alanineTrans}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Alkaline Phosphatase</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="alkalinePos" 
                        placeholder=""
                        value={this.state.alkalinePos}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row p-2">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Gamma Glutamyl Transferase(GGT)</label>
                    <div className="col-sm-9">
                        <input type="text" 
                        className="form-control " 
                        name="GGT" 
                        placeholder=""
                        value={this.state.GGT}
                        onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                
                <br />
                <div className="btn btn-primary position-relative start-50  badge">
                    <button type="button" className="btn btn-primary p-2 " onClick={this.onSubmit}>Submit</button>
                </div>

            </form>
        </div>

        )
    }
}
