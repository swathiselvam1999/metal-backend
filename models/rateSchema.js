import mongoose from "mongoose";

const rateSchema = new mongoose.Schema({
    metal:{
        type: String,
        required: true
    },
    purity:{
        type: String,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
},{
    timestamps: true
});

const Rate = mongoose.model("Rate", rateSchema);

export default Rate;