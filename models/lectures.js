// models/lecture.js
const mongoose = require('mongoose')

const LectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  description: {
    type: String,
    default: ""
  },
  videos: [{
    type: String // URLs
  }],
  material: [{
    name: {
      type: String,
      default: "material"
    },
    url: {
      type: String,
      required: [true, "Url is required"]
    }
  }]
}, { timestamps: true })

module.exports = mongoose.model('Lecture', LectureSchema)
