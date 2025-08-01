const monggose=require('mongoose')

const YearSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    firstSemester:{
        subjects:[{
            type:monggose.Schema.Types.ObjectId,
            ref:"Subject"
        }]  
    },
    secondSemester:{
        subjects:[{
            type:monggose.Schema.Types.ObjectId,
            ref:"Subject"
        }]
    },

})



const TrackSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    // add 5 years by default
    years:[
        YearSchema
    ],
    type:{
        type:String,
        enum:["general","credit"],
        required:[true,"Type is required"]
    }
})




module.exports={
    Track:monggose.model('Track',TrackSchema),
    YearSchema:YearSchema
}