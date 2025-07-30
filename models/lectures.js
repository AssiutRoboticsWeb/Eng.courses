const monggose=require('mongoose')


const LectureSchema=monggose.Schema({
    title:{
        type:String,
        default:""
        // required:[true,"Title is required"]
    },
    description:{
        type:String,
        default:""
        // required:[true,"Description is required"]
    },
    videos:[{
        type:String,
        required:[true,"Video is required"]
    }],
    course:{
        type:monggose.Schema.Types.ObjectId,
        ref:"Course"
    },
    material:[{
      name:{
        type:String,
        default:"material"
      },
      url:{
        type:String,
        required:[true,"Url is required"],
        default:""
      }
    }]
})




module.exports=monggose.model('Lecture',LectureSchema)