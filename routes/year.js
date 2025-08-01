const express = require('express')
const router = express.Router()
const YearController = require('../controller/year.controller')
const checkRole = require('../middlewares/checkRole')

// Apply role-based middleware
router.use(checkRole("manager", "admin"))

// Basic CRUD operations
router.post('/', YearController.addYear)
router.get('/', YearController.getAllYears)

router.route('/:id')
    .get(YearController.getYearById)
    .put(YearController.editYear)
    .delete(YearController.deleteYear)

// Course management routes
router.post('/:id/first-semester/courses', YearController.addCourseToFirstSemester)
router.post('/:id/second-semester/courses', YearController.addCourseToSecondSemester)

// router.put('/:id/first-semester/courses/:courseId', YearController.updateCourseInFirstSemester)
// router.put('/:id/second-semester/courses/:courseId', YearController.updateCourseInSecondSemester)

router.delete('/:id/first-semester/courses/:courseId', YearController.removeCourseFromFirstSemester)
router.delete('/:id/second-semester/courses/:courseId', YearController.removeCourseFromSecondSemester)

module.exports = router
