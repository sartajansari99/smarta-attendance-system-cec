const mongoose=require('mongoose')
const userModel=new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    rfid:{
        type:String,
        required:true,
        unique:true
    },
    semester:{
        type:Number,
        required:true,
    },
    schooling:{
        type:String,
        required:true,
    },
    schoolingPer:{
        type:Number,
        required:true,
    },
    intermediate:{
        type:String,
        required:true,
    },
    intermediatePer:{
        type:Number,
        required:true,
    },
    fatherName:{
        type:String,
        reqiured:true
        
    },
    motherName:{
        type:String,
        required:true
       
    },
    parentEmail:{
        type:String,
        required:true,
        unique:true
    },
    cgpa:{
        type:String,
    },
    branch:{
        type:String,
        required:true,
        
        enum:["CSE","ECE","ME","CIVIL","EE"]
    },
    batches:{
        type:Number,
        required:true,
    },
    photo:{
        type:String,
        // required:true
    }

})
module.exports=mongoose.model("user",userModel)