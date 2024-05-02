import mongoose from 'mongoose'

const programmersSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Occupation: {
        type: String,
        required: true
    },
    Degree: {
        type: String,
        required: true
    },
    Language: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Programmers = mongoose.model("Programmer", programmersSchema)
export default Programmers