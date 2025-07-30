const monggose=require('mongoose')


const TrackSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    years:[{
        type:monggose.Schema.Types.ObjectId,
        ref:"Year"
    }],
    type:{
        type:String,
        enum:["general","credit"],
        required:[true,"Type is required"]
    }
})




module.exports=monggose.model('Track',TrackSchema)
