const { readFileSync } = require('fs');
const path = require('path');

const FrontProductPage = (req,res) => {
    const products = readFileSync(path.join(__dirname,'./../../database/product.json'));
    res.status(200).render('frontend/pages/product',{
        layout: 'frontend/layouts/master',
        products : JSON.parse(products)
    });
}
const FrontSingleProductPage = (req,res) => {
    const products = JSON.parse(readFileSync(path.join(__dirname,'./../../database/product.json')));
    const singleProduct = products.find(data => data.slug == req.params.slug);
    res.status(200).render('frontend/pages/single-product',{
        layout: 'frontend/layouts/master',
        product : singleProduct
    });
}

module.exports = {
    FrontProductPage,
    FrontSingleProductPage
}