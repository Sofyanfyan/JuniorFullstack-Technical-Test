const { Product } = require('../models')
const controller = class Controller {
   
   static async fetchProduct(req, res)
   {
      try {

         const data = await Product.findAll();

         res.status(200).json(data);

      } catch {
         
         res.status(500).json({error: "Internal server error!"})
      }
   }
}

module.exports = controller;