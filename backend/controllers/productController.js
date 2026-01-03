import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

// Get all products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

//  Get single product by ID
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//  Create a new product
export const createProduct = asyncHandler(async (req, res) => {
  if (Array.isArray(req.body)) {
    const createdProducts = await Product.insertMany(req.body);
    return res.status(201).json({
      message: "✅ Multiple products added successfully",
      count: createdProducts.length,
      data: createdProducts,
    });
  }

  // If single product
  const { name, price, description, imageUrl } = req.body;
  const product = new Product({ name, price, description, imageUrl });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update an existing product
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.imageUrl = imageUrl || product.imageUrl;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//  Delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.status(200).json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
