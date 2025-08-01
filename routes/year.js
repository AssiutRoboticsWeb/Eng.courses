const express = require('express')
const router = express.Router()
const YearController = require('../controller/year.controller')
const checkRole = require('../middlewares/checkRole')

// Apply role-based middleware
// router.use(checkRole("manager", "admin"))



// Course management routes
router.post('/:id/first-semester/subjects', YearController.addSubjectToFirstSemester)
router.post('/:id/second-semester/subjects', YearController.addSubjectToSecondSemester)

// router.put('/:id/first-semester/courses/:courseId', YearController.updateCourseInFirstSemester)
// router.put('/:id/second-semester/courses/:courseId', YearController.updateCourseInSecondSemester)

router.delete('/:id/first-semester/subjects/:subjectId', YearController.removeSubjectFromFirstSemester)
router.delete('/:id/second-semester/subjects/:subjectId', YearController.removeSubjectFromSecondSemester)

module.exports = router
