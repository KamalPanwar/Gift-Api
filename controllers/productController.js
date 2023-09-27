import Product from '../models/productModel.js';
import apiFeatures from '../utils/apiFeatures.js';

export const getAllProducts = async (req, res) => {
  try {
    

   const features= new apiFeatures(Product.find(),req.query).filter()


   const allproducts = await features.query

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
