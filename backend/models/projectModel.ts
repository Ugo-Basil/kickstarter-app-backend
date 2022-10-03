import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    }
}, {
    timestamps: true,
})


export default mongoose.models.Project || mongoose.model('Project', projectSchema)