const express=require('express')
const router=express.Router()
const TrackController=require('../controller/track.controler')
const checkRole=require('../middlewares/checkRole')
// crud tracks
// const auth = require("../middlewares/jwt").auth


router.get('/',TrackController.getAllTracks);

// router.use(auth,checkRole("manager","admin"))

router.post('/',TrackController.addTrack);





router.route('/:id')
.get(TrackController.getTrackById)
.put(TrackController.editTrack)
.delete(TrackController.deleteTrack);


router.post('/add-subject', TrackController.addSubjectToTrack);




module.exports=router