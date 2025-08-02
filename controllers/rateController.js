import Rate from "../models/rateSchema.js";

const getLatestRate = async(req, res)=>{
    const {metal, purity} = req.query;
    try{
        const latestRate = await Rate.findOne({metal, purity}).sort({date:-1});
        if(!latestRate) {
            return res.status(404).json({ message: "No rate found" });
        }
        res.json(latestRate);
    } catch (err) {
    console.error("Latest rate error:", err);
    res.status(500).json({ message: "Server error" });
  }
    
}

const addRate = async(req, res)=>{
    const {metal, purity, rate, date} = req.body;
    try{
        const newRate = await Rate.create({metal, purity, rate, date});
        res.status(201).json(newRate);
    }catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getRates = async(req, res)=>{
    const {metal, purity} = req.query;
    const filter= {};
    if(metal) filter.metal = metal;
    if(purity) filter.purity = purity;

    const rates = await Rate.find(filter).sort({date:-1});
    res.json(rates)
};


export {addRate, getRates, getLatestRate}
