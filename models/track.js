const mongoose = require('mongoose')

const YearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    firstSemester: {
        subjects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject"
        }]
    },
    secondSemester: {
        subjects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject"
        }]
    }
})

const TrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    years: [YearSchema], 
    type: {
        type: String,
        enum: ["general", "credit"],
        required: [true, "Type is required"]
    }
})

module.exports = {
    Track: mongoose.model('Track', TrackSchema),
    years: mongoose.model('year',YearSchema ),
}

