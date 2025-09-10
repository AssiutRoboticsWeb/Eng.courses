const asyncHandler=require('../utils/asyncHandler')
const AppError=require("../utils/AppError")
const Track=require('../models/track').Track
YearSchema=require('../models/track').YearSchema
const monggose=require('mongoose')


const getAllTracks=asyncHandler(async(req,res)=>{   
    const tracks=await Track.find({})
    res.status(200).json({
        status:true,
        message:"Tracks fetched successfully",
        data:tracks
    })
})

const getTrackById=asyncHandler(async(req,res)=>{
    const trackId=req.params.id
    const track=await Track.findById(trackId)
    if(!track){
        throw new AppError("Track not found",404)
    }
    res.status(200).json({
        status:true,
        message:"Track fetched successfully",
        data:track
    })
})

const addTrack = asyncHandler(async (req, res) => {
    const { name, type } = req.body;

    if (!name) {
        throw new AppError("name is required", 400)
    }
    if (!type) {
        throw new AppError("type is required", 400)
    }

    // add 5 years by default
let years = []
for (let i = 0; i < 5; i++) {
    years.push({
        name: `Year ${i + 1}`,
        firstSemester: { subjects: [] },
        secondSemester: { subjects: [] }
    })
}

const newTrack = new Track({
    name,
    type,
    years
})

await newTrack.save()


    res.status(201).json({
        status: true,
        message: "Track created successfully",
        data: newTrack
    })
})



const editTrack= asyncHandler(async(req,res)=>{
    const trackId=req.params.id
    const {name,type}=req.body;

    if(!name){
        throw new AppError("name is required",400)
    }
    if(!type){
        throw new AppError("type is required",400)
    }

    const updatedTrack = await Track.findByIdAndUpdate(
        trackId,
        { name, type },
        { new: true } // يرجّع التراك بعد التعديل
    )

    res.status(200).json({
        status:true,
        message:"Track updated successfully",
        data: updatedTrack
    })
})


const deleteTrack=asyncHandler(async (req,res)=>{
    const trackId=req.params.id;
    const track=await Track.findById(trackId)
    if(!track){
        throw new AppError("Track not found",404)
    }
    // delete track
    // await track.remove()
    await track.deleteOne();
    res.status(200).json({
        status:true,
        message:"Track deleted successfully",
        data:track
    })
})  


module.exports={
    addTrack,
    editTrack,
    deleteTrack,
    getAllTracks,
    getTrackById
}
