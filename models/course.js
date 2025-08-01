const monggose=require('mongoose')


const CourseSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    track:{
        type:monggose.Schema.Types.ObjectId,
        ref:"Track"
    },
    year:{
        type:monggose.Schema.Types.ObjectId,
        ref:"Year"
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    subject:{
        type:monggose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    instructor:{
        type:String
    },
    lectures:[{
        type:monggose.Schema.Types.ObjectId,
        ref:"Lecture"
    }]

})




module.exports=monggose.model('Course',CourseSchema)
