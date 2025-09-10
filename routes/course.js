const express = require('express')
const router = express.Router()
const CourseController = require('../controller/course.controller')


router.post('/', CourseController.createCourse)         
router.get('/', CourseController.getAllCourses)       
router.get('/:id', CourseController.getCourseById)     
router.put('/:id', CourseController.updateCourse)      
router.delete('/:id', CourseController.deleteCourse)   

// ✅ Chapters routes
router.post('/:courseId/chapters', CourseController.addChapter)
router.delete('/:courseId/chapters/:chapterId', CourseController.deleteChapter)

// ✅ Lectures routes
router.post('/:courseId/chapters/:chapterId/lectures', CourseController.addLecture)
router.delete('/:courseId/chapters/:chapterId/lectures/:lectureId', CourseController.deleteLecture)
router.get('/:courseId/chapters', CourseController.getAllChapters)
router.get('/:courseId/chapters/:chapterId/lectures', CourseController.getAllLectures)

module.exports = router
