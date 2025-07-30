const monggose=require('mongoose')

const YearSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
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




module.exports=monggose.model('Year',YearSchema)
