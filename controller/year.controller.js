const asyncHandler = require('../utils/asyncHandler')
const appError = require("../utils/AppError")
const Track = require('../models/track').Track
const YearSchema = require('../models/track').YearSchema
const Subject = require('../models/subject').Subject


// Add subject to first semester
const addSubjectToFirstSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { name, description } = req.body

    if (!name) {
        throw appError("Name is required", 400)
    }

    const year = await YearSchema.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    const subject=await Subject.create({name,description})
    year.firstSemester.subjects.push(subject)
    await year.save()

    const updatedYear = await YearSchema.findById(yearId).populate('firstSemester.subjects').populate('secondSemester.subjects')

    res.status(200).json({
        status: true,
        message: "Subject added to first semester successfully",
        data: updatedYear
    })
})

// Add subject to second semester
const addSubjectToSecondSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { subjectId } = req.body

    if (!subjectId) {
        throw appError("Subject ID is required", 400)
    }

    const year = await YearSchema.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.secondSemester.subjects.push(subjectId)
    await year.save()

    const updatedYear = await YearSchema.findById(yearId).populate('firstSemester.subjects').populate('secondSemester.subjects')

    res.status(200).json({
        status: true,
        message: "Subject added to second semester successfully",
        data: updatedYear
    })
})

// Remove subject from first semester
const removeSubjectFromFirstSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { subjectId } = req.body

    if (!subjectId) {
        throw appError("Subject ID is required", 400)
    }

    const year = await YearSchema.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.firstSemester.subjects = year.firstSemester.subjects.filter(
        subject => subject.toString() !== subjectId
    )
    await year.save()

    const updatedYear = await YearSchema.findById(yearId).populate('firstSemester.subjects').populate('secondSemester.subjects')

    res.status(200).json({
        status: true,
        message: "Subject removed from first semester successfully",
        data: updatedYear
    })
})

// Remove subject from second semester
const removeSubjectFromSecondSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { subjectId } = req.body

    if (!subjectId) {
        throw appError("Subject ID is required", 400)
    }

    const year = await YearSchema.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.secondSemester.subjects = year.secondSemester.subjects.filter(
        subject => subject.toString() !== subjectId
    )
    await year.save()

    const updatedYear = await YearSchema.findById(yearId).populate('firstSemester.subjects').populate('secondSemester.subjects')

    res.status(200).json({
        status: true,
        message: "Subject removed from second semester successfully",
        data: updatedYear
    })
})

module.exports = {

    addSubjectToFirstSemester,
    addSubjectToSecondSemester,
    removeSubjectFromFirstSemester,
    removeSubjectFromSecondSemester
}
