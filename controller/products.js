const productModel = require("../model/addproducts");
const path = require("path");
const csvtojson = require("csvtojson");
const publicFolderPath = path.join(__dirname, "../public");
const relativePathToCSV = "product.csv";
const absolutePathToCSV = path.join(publicFolderPath, relativePathToCSV);
exports.addProduct = async function (req, res) {
  csvtojson()
    .fromFile(absolutePathToCSV)
    .then((data) => {
      console.log(data);
      data.map(async (item) => {
        const myProducts = new productModel(item);
        console.log("data ", myProducts);
        await myProducts.save();
        console.log("data in db", myProducts);
      });
      res.status(200).json({
        message: "OK! Products are added",
        data,
      });
    });
};
exports.viewProducts = async function (req, res) {
  try {
    // console.log("here inside");
    const showProducts = await productModel.find({});
    if (showProducts) {
      return res.status(200).json({
        message: "OK: Products found",
        showProducts,
      });
    } else {
      return res.status(400).json({
        message: "Bad request Product Not Found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Bad request:not permitted in this route",
    });
  }
};
exports.searchProducts = async function (req, res) {
  try {
    let productName = req.body.productName;
    console.log("Product", productName);
    const product = await productModel.find({ productName: productName });
    // console.log("product", product.length);
    if (!product && product !== "") {
      return res.status(200).json({
        message: "Bad Request! product is not found",
      });
    }
    if (product.length == "0") {
      return res.status(200).json({
        message: "Bad Request! product is not found",
      });
    }
    if (product) {
      return res.status(200).json({
        message: "OK! Products are found Successfully",
        product,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Bad request! You are permitted in this route",
      error,
    });
  }
};
