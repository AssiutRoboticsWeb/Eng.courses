
const mongoose = require('mongoose')
const ChapterSchema = require('./chapter')

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  track: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Track",
    required: [true, "Track is required"]
  },
  yearId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Year (subdocument id) is required"]
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: [true, "Subject is required"]
  },
  description: {
    type: String,
    default: ""
  },
  instructor: {
    type: String,
    default: ""
  },
  chapters: [ChapterSchema]
}, { timestamps: true })


module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema)
