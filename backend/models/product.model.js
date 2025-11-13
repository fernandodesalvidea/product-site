import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },  
  }, {
    timestamps: true, //createdAt and updatedAt fields automatically managed by mongoose
  });

  const Product = mongoose.model('Product', productSchema);
  //mongoose pluralizes the model name 'Product' to 'products' for the collection name in MongoDB

  export default Product;