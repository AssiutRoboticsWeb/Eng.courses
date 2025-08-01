const asyncHandler = require('../utils/asyncHandler')
const appError = require("../utils/AppError")
const Year = require('../models/year')

// Get all years
const getAllYears = asyncHandler(async (req, res) => {
    const years = await Year.find().populate('firstSemester.courses').populate('secondSemester.courses')
    res.status(200).json({
        status: true,
        message: "Years fetched successfully",
        data: years
    })
})

// Get year by ID
const getYearById = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const year = await Year.findById(yearId).populate('firstSemester.courses').populate('secondSemester.courses')
    if (!year) {
        throw appError("Year not found", 404)
    }
    res.status(200).json({
        status: true,
        message: "Year fetched successfully",
        data: year
    })
})

// Create new year
const addYear = asyncHandler(async (req, res) => {
    const { name, firstSemester, secondSemester } = req.body

    if (!name) {
        throw appError("Name is required", 400)
    }

    const newYear = new Year({
        name,
        firstSemester: firstSemester || { courses: [] },
        secondSemester: secondSemester || { courses: [] }
    })

    await newYear.save()
    res.status(201).json({
        status: true,
        message: "Year created successfully",
        data: newYear
    })
})

// Update year
const editYear = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { name, firstSemester, secondSemester } = req.body

    if (!name) {
        throw appError("Name is required", 400)
    }

    const updatedYear = await Year.findByIdAndUpdate(yearId, {
        name,
        firstSemester,
        secondSemester
    }, { new: true }).populate('firstSemester.courses').populate('secondSemester.courses')

    if (!updatedYear) {
        throw appError("Year not found", 404)
    }

    res.status(200).json({
        status: true,
        message: "Year updated successfully",
        data: updatedYear
    })
})

// Delete year
const deleteYear = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const year = await Year.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }
    
    await year.deleteOne()
    res.status(200).json({
        status: true,
        message: "Year deleted successfully",
        data: year
    })
})

// Add course to first semester
const addCourseToFirstSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { courseId } = req.body

    if (!courseId) {
        throw appError("Course ID is required", 400)
    }

    const year = await Year.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.firstSemester.courses.push(courseId)
    await year.save()

    const updatedYear = await Year.findById(yearId).populate('firstSemester.courses').populate('secondSemester.courses')

    res.status(200).json({
        status: true,
        message: "Course added to first semester successfully",
        data: updatedYear
    })
})

// Add course to second semester
const addCourseToSecondSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { courseId } = req.body

    if (!courseId) {
        throw appError("Course ID is required", 400)
    }

    const year = await Year.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.secondSemester.courses.push(courseId)
    await year.save()

    const updatedYear = await Year.findById(yearId).populate('firstSemester.courses').populate('secondSemester.courses')

    res.status(200).json({
        status: true,
        message: "Course added to second semester successfully",
        data: updatedYear
    })
})

// Remove course from first semester
const removeCourseFromFirstSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { courseId } = req.body

    if (!courseId) {
        throw appError("Course ID is required", 400)
    }

    const year = await Year.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.firstSemester.courses = year.firstSemester.courses.filter(
        course => course.toString() !== courseId
    )
    await year.save()

    const updatedYear = await Year.findById(yearId).populate('firstSemester.courses').populate('secondSemester.courses')

    res.status(200).json({
        status: true,
        message: "Course removed from first semester successfully",
        data: updatedYear
    })
})

// Remove course from second semester
const removeCourseFromSecondSemester = asyncHandler(async (req, res) => {
    const yearId = req.params.id
    const { courseId } = req.body

    if (!courseId) {
        throw appError("Course ID is required", 400)
    }

    const year = await Year.findById(yearId)
    if (!year) {
        throw appError("Year not found", 404)
    }

    year.secondSemester.courses = year.secondSemester.courses.filter(
        course => course.toString() !== courseId
    )
    await year.save()

    const updatedYear = await Year.findById(yearId).populate('firstSemester.courses').populate('secondSemester.courses')

    res.status(200).json({
        status: true,
        message: "Course removed from second semester successfully",
        data: updatedYear
    })
})

module.exports = {
    addYear,
    editYear,
    deleteYear,
    getAllYears,
    getYearById,
    addCourseToFirstSemester,
    addCourseToSecondSemester,
    removeCourseFromFirstSemester,
    removeCourseFromSecondSemester
}
