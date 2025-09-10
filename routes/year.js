const express = require('express')
const router = express.Router()
const YearController = require('../controller/year.controller')
const checkRole = require('../middlewares/checkRole')

// Apply role-based middleware ٍ
// router.use(checkRole("manager", "admin"))


//  Subjects Management
router.post('/:trackId/:yearId/first-semester/subjects', YearController.addSubjectToFirstSemester)
router.post('/:trackId/:yearId/second-semester/subjects', YearController.addSubjectToSecondSemester)

router.delete('/:trackId/:yearId/first-semester/subjects/:subjectId', YearController.removeSubjectFromFirstSemester)
router.delete('/:trackId/:yearId/second-semester/subjects/:subjectId', YearController.removeSubjectFromSecondSemester)


//  Years Management
router.post('/:trackId/add-year', YearController.addYear)
router.delete('/:trackId/:yearId', YearController.deleteYear)

//  Get all years of a track
router.get('/:trackId/years', YearController.getAllYears)

module.exports = router
