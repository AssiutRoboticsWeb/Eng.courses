const asyncHandler = require('../utils/asyncHandler')
const AppError = require('../utils/AppError')
const Course = require('../models/course')
const mongoose = require('mongoose')
const Lecture = require('../models/lectures'); 


// Create Course
const createCourse = asyncHandler(async (req, res) => {
  const { name, track, yearId, subject, description, instructor } = req.body

  if (!name || !track || !yearId || !subject) {
    throw appError("name, track, yearId and subject are required", 400)
  }

  const course = await Course.create({
    name,
    track,
    yearId,
    subject,
    description,
    instructor,
    chapters: []
  })

  res.status(201).json({
    status: true,
    message: "Course created successfully",
    data: course
  })
})

// Get all courses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find()
    .populate('track')
    .populate('subject')
    .populate('chapters.lectures')

  res.status(200).json({
    status: true,
    message: "Courses fetched successfully",
    data: courses
  })
})

// Get course by id
const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const course = await Course.findById(id)
    .populate('track')
    .populate('subject')
    .populate('chapters.lectures')

  if (!course) {
    throw new AppError("Course not found", 404)
  }

  res.status(200).json({
    status: true,
    message: "Course fetched successfully",
    data: course
  })
})

// Update course
const updateCourse = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { name, description, instructor } = req.body

  const course = await Course.findByIdAndUpdate(
    id,
    { name, description, instructor },
    { new: true }
  )

  if (!course) {
    throw new AppError("Course not found", 404)
  }

  res.status(200).json({
    status: true,
    message: "Course updated successfully",
    data: course
  })
})

// Delete course
const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.params
  const course = await Course.findByIdAndDelete(id)

  if (!course) {
    throw new AppError("Course not found", 404)
  }

  res.status(200).json({
    status: true,
    message: "Course deleted successfully",
    data: course
  })
})

// Add Chapter to Course
const addChapter = asyncHandler(async (req, res) => {
  const { courseId } = req.params
  const { title, description } = req.body

  if (!title) {
    throw new AppError("Chapter title is required", 400)
  }

  const course = await Course.findById(courseId)
  if (!course) {
    throw new AppError("Course not found", 404)
  }

  // push chapter
  course.chapters.push({ title, description, lectures: [] })
  await course.save()

  res.status(201).json({
    status: true,
    message: "Chapter added successfully",
    data: course
  })
})

// Delete Chapter from Course
const deleteChapter = asyncHandler(async (req, res) => {
  const { courseId, chapterId } = req.params

  const course = await Course.findById(courseId)
  if (!course) {
    throw new AppError("Course not found", 404)
  }

  course.chapters = course.chapters.filter(
    ch => ch._id.toString() !== chapterId
  )
  await course.save()

  res.status(200).json({
    status: true,
    message: "Chapter deleted successfully",
    data: course
  })
})
// Add Lecture to Chapter
const addLecture = asyncHandler(async (req, res) => {
  const { courseId, chapterId } = req.params
  const { title, description, videos, material } = req.body

  if (!title) {
   throw new AppError("Lecture title is required", 400)
  }

  const course = await Course.findById(courseId)
  if (!course) {
    throw appError("Course not found", 404)
  }

  const chapter = course.chapters.id(chapterId)
  if (!chapter) {
    throw new AppError("Chapter not found", 404)
  }

  // create lecture
  const lecture = await Lecture.create({
    title,
    description,
    videos,
    material
  })

  // push lectureId into chapter
  chapter.lectures.push(lecture._id)
  await course.save()

  res.status(201).json({
    status: true,
    message: "Lecture added successfully",
    data: lecture
  })
})

// Delete Lecture from Chapter
const deleteLecture = asyncHandler(async (req, res) => {
  const { courseId, chapterId, lectureId } = req.params

  const course = await Course.findById(courseId)
  if (!course) {
    throw new AppError("Course not found", 404)
  }

  const chapter = course.chapters.id(chapterId)
  if (!chapter) {
    throw new AppError("Chapter not found", 404)
  }

  // remove lectureId from chapter array
  chapter.lectures = chapter.lectures.filter(
    lec => lec.toString() !== lectureId
  )
  await course.save()

  // remove lecture from collection
  await Lecture.findByIdAndDelete(lectureId)

  res.status(200).json({
    status: true,
    message: "Lecture deleted successfully",
    data: course
  })
})
module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    addChapter,
    deleteChapter,
    addLecture,
    deleteLecture
}
