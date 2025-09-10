const asyncHandler = require('../utils/asyncHandler')
const AppError = require("../utils/AppError")
const { Track } = require('../models/track')
const Subject = require('../models/subject')

// Add subject to first semester
const addSubjectToFirstSemester = asyncHandler(async (req, res) => {
    const { trackId, yearId } = req.params
    const { name, description } = req.body

    if (!name) {
        throw new AppError("Name is required", 400)
    }

    const track = await Track.findById(trackId)
        .populate('years.firstSemester.subjects')
        .populate('years.secondSemester.subjects')

    if (!track) {
        throw new AppError("Track not found", 404)
    }

    const year = track.years.id(yearId)
    if (!year) {
        throw new AppError("Year not found", 404)
    }

    const subject = await Subject.create({ name, description })
    year.firstSemester.subjects.push(subject._id)
    await track.save()

    res.status(200).json({
        status: true,
        message: "Subject added to first semester successfully",
        data: track
    })
})

// Add subject to second semester
const addSubjectToSecondSemester = asyncHandler(async (req, res) => {
    const { trackId, yearId } = req.params
    const { subjectId } = req.body

    if (!subjectId) {
        throw new AppError("Subject ID is required", 400)
    }

    const track = await Track.findById(trackId)
        .populate('years.firstSemester.subjects')
        .populate('years.secondSemester.subjects')

    if (!track) {
       throw new AppError("Track not found", 404)
    }

    const year = track.years.id(yearId)
    if (!year) {
        throw new AppError("Year not found", 404)
    }

    year.secondSemester.subjects.push(subjectId)
    await track.save()

    res.status(200).json({
        status: true,
        message: "Subject added to second semester successfully",
        data: track
    })
})

// Remove subject from first semester
const removeSubjectFromFirstSemester = asyncHandler(async (req, res) => {
    const { trackId, yearId, subjectId } = req.params

    const track = await Track.findById(trackId)
        .populate('years.firstSemester.subjects')
        .populate('years.secondSemester.subjects')

    if (!track) {
       throw new AppError("Track not found", 404)
    }

    const year = track.years.id(yearId)
    if (!year) {
        throw new AppError("Year not found", 404)
    }

    year.firstSemester.subjects = year.firstSemester.subjects.filter(
        subject => subject.toString() !== subjectId
    )

    await track.save()

    res.status(200).json({
        status: true,
        message: "Subject removed from first semester successfully",
        data: track
    })
})

// Remove subject from second semester
const removeSubjectFromSecondSemester = asyncHandler(async (req, res) => {
    const { trackId, yearId, subjectId } = req.params

    const track = await Track.findById(trackId)
        .populate('years.firstSemester.subjects')
        .populate('years.secondSemester.subjects')

    if (!track) {
        throw new AppError("Track not found", 404)
    }

    const year = track.years.id(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.secondSemester.subjects = year.secondSemester.subjects.filter(
        subject => subject.toString() !== subjectId
    )

    await track.save()

    res.status(200).json({
        status: true,
        message: "Subject removed from second semester successfully",
        data: track
    })
})
// Get subject by ID
const getSubjectById = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;

    const subject = await Subject.findById(subjectId).populate("courses"); // لو عايزة تجيبي الكورسات المرتبطة بيه

    if (!subject) {
        throw new AppError("Subject not found", 404);
    }

    res.status(200).json({
        status: true,
        message: "Subject fetched successfully",
        data: subject
    });
});


// Add a new Year to a Track
const addYear = asyncHandler(async (req, res) => {
    const { trackId } = req.params
    const { name } = req.body

    if (!name) {
        throw new AppError("Year name is required", 400)
    }

    const track = await Track.findById(trackId)
    if (!track) {
        throw new AppError("Track not found", 404)
    }

    track.years.push({
        name,
        firstSemester: { subjects: [] },
        secondSemester: { subjects: [] }
    })

    await track.save()

    res.status(201).json({
        status: true,
        message: "Year added successfully",
        data: track
    })
})

// Remove a Year from a Track
const deleteYear = asyncHandler(async (req, res) => {
    const { trackId, yearId } = req.params

    const track = await Track.findById(trackId)
    if (!track) {
        throw new AppError("Track not found", 404)
    }

    track.years = track.years.filter(y => y._id.toString() !== yearId)
    await track.save()

    res.status(200).json({
        status: true,
        message: "Year deleted successfully",
        data: track
    })
})

// Get all years for a track
const getAllYears = asyncHandler(async (req, res) => {
    const { trackId } = req.params

    const track = await Track.findById(trackId)
        .populate('years.firstSemester.subjects')
        .populate('years.secondSemester.subjects')

    if (!track) {
        throw new AppError("Track not found", 404)
    }

    res.status(200).json({
        status: true,
        message: "Years fetched successfully",
        data: track.years
    })
})

module.exports = {
    addSubjectToFirstSemester,
    addSubjectToSecondSemester,
    removeSubjectFromFirstSemester,
    removeSubjectFromSecondSemester,
    addYear,
    deleteYear,
    getAllYears,
    getSubjectById

}
