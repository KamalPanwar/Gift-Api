import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'],
    unique: true,
    trim: true,
  },
  image:{
    type:String,
    required:[true,'A product must have a image']
  },
  price: {
    type: Number,
    required: [true, 'a Product must have a duration '],
  },
  category: {
    type: String,
    required: [true, 'A tour must have category'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have description'],
  },
  ratings: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    required: [true, 'A tour must have rating'],
  },
  reviews: {
    type:Number,
    required: [true, 'A tour must have review'],
  },
});

const Product=mongoose.model('Product',productSchema)

export default Product