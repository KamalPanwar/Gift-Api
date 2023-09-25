import Product from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const allproducts = await Product.find();
    res.status(200).json({
      status: 'sucess',
      results: allproducts.length,
      data: {
        allproducts,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'sucess',
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(300).json({
        status:"something is not right"
    })
  }
};
