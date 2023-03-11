const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addProducts = new Schema({
  vichleNo: {
    type: Number,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    require: true,
  },
  vendorCode: {
    type: Number,
    require: true,
  },
  actualPrice: {
    type: Number,
    require: true,
  },
  discountPrice: {
    type: Number,
    require: true,
  },
});
const Product = mongoose.model("Products", addProducts);
module.exports = Product;
