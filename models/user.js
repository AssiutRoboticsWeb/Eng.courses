const monggose=require('mongoose')

const UserSchema=monggose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    avatar: {
        type:String,
        // required:[true,"Avatar is required"]
    },
    googleId:{
        type:String,
         required:[true,"Google Id is required"],
        unique:true
    },
    roles:[{
        type:String,
        enum:["user","admin","manager","instructor"],
        default:"user"
    }]
,
})




module.exports=monggose.model('User',UserSchema)





