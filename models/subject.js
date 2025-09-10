// models/subject.js
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  description: {
    type: String,
    default: ""
  }
  ,courses:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Course reference is required"]
  }
}, { timestamps: true });


module.exports = mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
