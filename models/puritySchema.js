import mongoose from "mongoose";

const puritySchema = new mongoose.Schema({
    
    metal:{
        type: String,
        required: true
    },
    purity:{
        type: String,
        required: true
    }
    
},{
    timestamps: true
})

const Purity = mongoose.model("Purity", puritySchema)

export default Purity;