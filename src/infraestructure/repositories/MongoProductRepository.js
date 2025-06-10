const ProductRepository = require('../../domain/repositories/ProductRepository');
const ProductModel = require('../database/models/ProductModel');
const Product = require('../../domain/entities/Product');

class MongoProductRepository extends ProductRepository {
  async getAll() {
    const products = await ProductModel.find();
    return products.map(p => new Product(p.toObject()));
  }

  async create(product) {
    const newProduct = await ProductModel.create(product);
    return new Product(newProduct.toObject());
  }
  async getById(id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      return null;
    }
    return new Product(product.toObject());
    }
    
  async update(id, productData) {
    const product = await ProductModel.findByIdAndUpdate(id, productData, { new: true });
    if (!product) {
      return null;
    }
    return new Product(product.toObject());
  }
  }
module.exports = MongoProductRepository;