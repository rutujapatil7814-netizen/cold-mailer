import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
    },
    fileURL:{
        type:String,
        required : true,

    },
    createBy:{
        type :mongoose.Schema.Types.ObjectId,
        // required : true ,
        ref : "User"
    }
}) 
const File=mongoose.model("File",fileSchema)
export default File