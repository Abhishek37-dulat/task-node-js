const Product =  require("../models/productModel.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getProducts, getProductById}