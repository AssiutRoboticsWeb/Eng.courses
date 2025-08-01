const asyncHandler=require('../utils/asyncHandler')
const appError=require("../utils/AppError")
const Track=require('../models/track').Track
const YearSchema=require('../models/track').YearSchema
const monggose=require('mongoose')


const getAllTracks=asyncHandler(async(req,res)=>{   
    const tracks=await Track.find()
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
        throw appError("Track not found",404)
    }
    res.status(200).json({
        status:true,
        message:"Track fetched successfully",
        data:track
    })
})

const addTrack= asyncHandler(async(req,res)=>{
    const {name,type}=await Track.create(req.body);
    if(!name){
        throw appError("name is required",400)
    }
    if(!type){
        throw appError("type is required",400)
    }
    // add 5 years by default
    const years=[]
    for(let i=0;i<5;i++){
        const year=new YearSchema({
            name:`Year ${i+1}`,
            firstSemester:{
                courses:[{
                    type:monggose.Schema.Types.ObjectId,
                    ref:"Course"
                }]  
            },
            secondSemester:{
                courses:[{
                    type:monggose.Schema.Types.ObjectId,
                    ref:"Course"
                }]
            },
        })
        years.push(year)
    }

    const newTrack= new Track({
        name,
        type,
        years,
        
    })

    newTrack.save()
    res.status(201).json({
        status:true,
        message:"Track created successfully",
        data:newTrack
    })

})


const editTrack= asyncHandler(async(req,res)=>{
    const trackId=req.params.id
    const {name,type}=req.body;

    if(!name){
        throw appError("name is required",400)
    }
    if(!type){
        throw appError("type is required",400)
    }
    await Track.findByIdAndUpdate(trackId,{
        name,
        type
    })

    res.status(200).json({
        status:true,
        message:"Track updated successfully",
        data:newTrack
    })
})


const deleteTrack=asyncHandler(async (req,res)=>{
    const trackId=req.params.id;
    const track=await Track.findById(trackId)
    if(!track){
        throw appError("Track not found",404)
    }
    // delete track
    await track.remove()
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
