//import React, { Component } from 'react'
import axios from 'axios';
import '../ReportDetails.css'
import React, { Component, PropTypes } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled, { css } from 'styled-components'

export default class ReportDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

            report: {}
        };
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            });
    }



    componentDidMount() {

        const id = this.props.match.params.id;


        axios.get(`http://localhost:8000/reports/get/${id}`).then((res) => {

            if (res.data.success) {
                this.setState({
                    report: res.data.reports
                });
                console.log(this.state.report);
            }
        });
    }

    render() {

        const { _id, patientID, patientName, refDoctor, totalProtein, albumin, globulin, alGlRatio, bilirubin, aspartateTrans, alanineTrans, alkalinePos, GGT } = this.state.report;

        return (
            <div>



                <div className="page-content container">
                    <div className="page-header text-blue-d2">
                        <h1 className="page-title text-secondary-d1">
                            Invoice ID:&nbsp;
                            <small className="page-info">
                                <i className="fa fa-angle-double-right text-80"></i>
                                {_id}
                            </small>
                        </h1>

                        <div className="page-tools">
                            <div className="action-buttons" onClick={this.printDocument}>

                                <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                                    <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                                    Print
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="container px-0" id="divToPrint" {...css({
                        backgroundColor: '#f5f5f5',
                        width: '210mm',
                        minHeight: '297mm',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    })}>
                        <div className="row mt-4">
                            <div className="col-12 col-lg-10 offset-lg-1">

                                <hr className="row brc-default-l1 mx-n1 mb-4" />

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div>
                                            <span className="text-sm text-grey-m2 align-middle"></span>
                                            <span className="text-600 text-110 text-blue align-middle">ABC Hospital Laboratory</span>
                                        </div>
                                        <div className="text-grey-m2">
                                            <div className="my-1">
                                                Nugegoda
                                            </div>
                                            <div className="my-1">
                                                Colombo
                                            </div>
                                            <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b className="text-600">111-111-111</b></div>
                                        </div>
                                    </div>


                                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                        <hr className="d-sm-none" />
                                        <div className="text-grey-m2">
                                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90"> </span> </div>

                                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Patient ID: </span> {patientID}</div>

                                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Patient Name: </span> {patientName}</div>

                                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Ref: Doctor: </span> <span className="badge badge-warning badge-pill px-25"></span>{refDoctor} </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <div className="row text-600 text-white bgc-default-tp1 py-25">
                                        {/* <div className="d-none d-sm-block col-1">#</div> */}
                                        <div className="col-9 col-sm-5">Investigation</div>
                                        <div className="d-none d-sm-block col-4 col-sm-2">Result</div>
                                        <div className="d-none d-sm-block col-sm-2">Units</div>
                                        <div className="col-3">Reference Range</div>
                                    </div>

                                    <div className="text-95 text-secondary-d3">
                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Total Protein</div>
                                            <div className="d-none d-sm-block col-2">{totalProtein}</div>
                                            <div className="d-none d-sm-block col-2 text-95">g/dL</div>
                                            <div className="col-2 text-secondary-d2">6.4 - 8.2</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Albumin</div>
                                            <div className="d-none d-sm-block col-2">{albumin}</div>
                                            <div className="d-none d-sm-block col-2 text-95">g/dL</div>
                                            <div className="col-2 text-secondary-d2">3.4 - 5</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Globulin</div>
                                            <div className="d-none d-sm-block col-2">{globulin}</div>
                                            <div className="d-none d-sm-block col-2 text-95">2.5 - 3.5</div>
                                            <div className="col-2 text-secondary-d2">6.4 - 8.2</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Albumin/Globulin Ratio</div>
                                            <div className="d-none d-sm-block col-2">{alGlRatio}</div>
                                            <div className="d-none d-sm-block col-2 text-95">g/dL</div>
                                            <div className="col-2 text-secondary-d2"></div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Bilirubin- Total</div>
                                            <div className="d-none d-sm-block col-2">{bilirubin}</div>
                                            <div className="d-none d-sm-block col-2 text-95">mg/dL</div>
                                            <div className="col-2 text-secondary-d2">1.2</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Aspartate Transaminase(AST/SGOT)</div>
                                            <div className="d-none d-sm-block col-2">{aspartateTrans}</div>
                                            <div className="d-none d-sm-block col-2 text-95">U/L</div>
                                            <div className="col-2 text-secondary-d2">15 - 37</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Alanine Transaminase(ALT/SGPT)</div>
                                            <div className="d-none d-sm-block col-2">{alanineTrans}</div>
                                            <div className="d-none d-sm-block col-2 text-95">U/L</div>
                                            <div className="col-2 text-secondary-d2">14 - 59</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Alkaline Phosphatase</div>
                                            <div className="d-none d-sm-block col-2">{alkalinePos}</div>
                                            <div className="d-none d-sm-block col-2 text-95">U/L</div>
                                            <div className="col-2 text-secondary-d2">46 - 116</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            {/* <div className="d-none d-sm-block col-1">1</div> */}
                                            <div className="col-9 col-sm-5">Gamma Glutamyl Transferase(GGT)</div>
                                            <div className="d-none d-sm-block col-2">{GGT}</div>
                                            <div className="d-none d-sm-block col-2 text-95">IU/L</div>
                                            <div className="col-2 text-secondary-d2">5 - 55</div>
                                        </div>

                                    </div>

                                    <div className="row border-b-2 brc-default-l2"></div>



                                    <hr />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
