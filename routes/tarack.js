const express=require('express')
const router=express.Router()
const TrackController=require('../controller/track.controler')
const checkRole=require('../middlewares/checkRole')
// crud tracks
router.use(checkRole("manager","admin"))

router.post('/',TrackController.addTrack);


router.get('/',TrackController.getAllTracks);


router.route('/:id')
.get(TrackController.getTrackById)
.put(TrackController.editTrack)
.delete(TrackController.deleteTrack);






module.exports=router