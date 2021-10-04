const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

    patientID:{
        type: Number,
        required: true
    },
    patientName:{
        type: String,
        required: true
    },
    refDoctor:{
        type: String,
        required: true
    },

    totalProtein:{
        type: Number,
        required: true
    },
    albumin:{
        type: Number,
        required: true
    },
    globulin:{
        type: Number,
        required: true
    },
    alGlRatio:{
        type: Number,
        required: true
    },
    bilirubin:{
        type: Number,
        required: true
    },
    aspartateTrans:{
        type: Number,
        required: true
    },
    alanineTrans:{
        type: Number,
        required: true
    },
    alkalinePos:{
        type: Number,
        required: true
    },
    GGT:{
        type: Number,
        required: true
    },
})


module.exports = mongoose.model('Reports', reportSchema)