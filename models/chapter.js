
const mongoose = require('mongoose')

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Chapter title is required"]
  },
  description: {
    type: String,
    default: ""
  },
  lectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  }]
},{ _id: true, timestamps: true })

module.exports = ChapterSchema
