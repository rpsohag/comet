const express = require('express');
const dotenv = require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const FrontIndexRoute = require('./routes/frontend/pages');
const FrontBlogRoute = require('./routes/frontend/blog');
const FrontProductRoute = require('./routes/frontend/product');
const app = express();

const PORT = process.env.SERVER_PORT || 4000;
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout','frontend/layouts/master','backend/layouts/master');
app.use('/', FrontIndexRoute);
app.use('/blog', FrontBlogRoute);
app.use('/product', FrontProductRoute);

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})