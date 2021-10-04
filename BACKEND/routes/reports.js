const { json } = require('body-parser');
const express = require ('express');
const reports = require('../modules/reports');
const Reports = require ('../modules/reports');

const router = express.Router();

//add data
router.post('/reports/add', (req,res) => {

    let newReport = new Reports(req.body);

    newReport.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Report Saved successfully"
        });
    });

});


//get data
router.get('/reports/view', (req,res) => {

    Reports.find().exec((err, reports) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingReport:reports
        });
    });
    
});

//update data

router.put('/reports/update/:id', (req,res) =>{
    Reports.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, reports) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete reports

router.delete('/reports/delete/:id', (req,res) => {
    Reports.findByIdAndRemove(req.params.id).exec((err,deletedReport) =>{

        if(err) return res.status(400).json({
            message: "Deleted unsuccessful", err
        });

        return res.json({
            message:"Deleted successfully", deletedReport
        });
    });
});

//get a specific report

router.get("/reports/get/:id", (req,res) => {
    
    let reportID = req.params.id;

    Reports.findById(reportID, (err, reports) => {
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            reports
        });
    });
});

module.exports = router;