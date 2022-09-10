const path = require('path');
const { readFileSync } = require('fs');

const FrontBlogPage = (req,res) => {
    const blogs = JSON.parse(readFileSync(path.join(__dirname,'./../../database/blog.json')));
    res.status(200).render('frontend/pages/blog',{
        layout : 'frontend/layouts/master',
        blogs : blogs
    })
}

const FrontSingleBlogPage = (req,res) => {
    const blogs = JSON.parse(readFileSync(path.join(__dirname,'./../../database/blog.json')));
    const singlePost = blogs.find(data => data.slug == req.params.slug);
    res.status(200).render('./frontend/pages/single-blog',{
        layout : 'frontend/layouts/master',
        blog : singlePost
    })
}


module.exports = {
    FrontBlogPage,
    FrontSingleBlogPage
}