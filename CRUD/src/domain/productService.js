const { response } = require("express");
const moment = require('moment');
const { products } = require("../create_model_prod");



async function getProductById(id) {
    const response = await products.findOne({_id: id});
    if(response == null){
        console.log('Product not found')
    }
    return response;
}

async function getAll() {
    const response = await products.find()
    return response;
}

async function addProduct(body) {

    let timestamp = moment().format('lll');
    const { title, price, thumbnail, code, stock, description } = body;
    const item = {
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description
    }
    try {
        const pr = await new products (item);
        pr.save();
        return 'product added successfully';
    } catch (error) {
        return error;
    }
}

async function update(id,body) {
    try{
        const pr = await products.findByIdAndUpdate(id, {$set: body});
        pr.save();
        return 'Product uploaded successfully';
    }catch(err){
        return err;
    }
}

async function deleteProduct(id) {
    try{
        await products.deleteOne({_id: id});
        return 'Product deleted successfully';
    }catch(err){
        return err;
    }
}


module.exports = {
    getProductById,
    getAll,
    addProduct,
    update,
    deleteProduct
}