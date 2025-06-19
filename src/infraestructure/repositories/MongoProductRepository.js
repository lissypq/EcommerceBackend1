<<<<<<< HEAD
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
}
 
=======
const ProductRepository = require('../../domain/repositories/ProductRepository');
const ProductModel = require('../database/models/ProductModel');
const Product = require('../../domain/entities/Product');
 
class MongoProductRepository extends ProductRepository {

  async getAll() {
  // Obtiene todos los productos de la base de datos
    const newProducts = await ProductModel.find().lean().exec();
    return newProducts.map(product => new Product(product));
    
   
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
    return product.toObject();
}
 }
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = MongoProductRepository;