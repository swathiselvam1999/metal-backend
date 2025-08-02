import Purity from "../models/puritySchema.js";

const addPurity = async (req, res) => {
  const { metal, purity } = req.body;
  try {
    if (!metal) {
      return res.status(400).json({ message: "please Choose metal" });
    } else if(!purity){
      return res.status(400).json({ message: "please Enter Purity" });
    }
    const newPurity = await Purity.create({ metal, purity });
    res.status(201).json(newPurity);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const getPurity = async (req, res) => {
  const { id } = req.params;
  try {
    const purity = await Purity.findById(id);
    res.json(purity);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const getAllPurities = async (req, res) => {
  const purities = await Purity.find();
  res.json(purities);
};

const updatepurity = async (req, res) => {
  const { id } = req.params;

  const { metal, purity } = req.body;
  console.log("ID:", req.params.id);
  console.log("Body:", req.body);
  try {
    const updated = await Purity.findByIdAndUpdate(
      id,
      { metal, purity },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const deletePurity = async (req, res) => {
  const { id } = req.params;
  try {
    await Purity.findByIdAndDelete(id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

export { addPurity, getPurity, getAllPurities, updatepurity, deletePurity };
