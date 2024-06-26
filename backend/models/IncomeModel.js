const mongoose = require('mongoose');

const IcomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    amount: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true,
    },
    type: {
        type: String,
        default: 'income'
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
},{timeseries: true})

module.exports = mongoose.model('Icome', IcomeSchema)