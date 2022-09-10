const { readFileSync } = require('fs');
const path = require('path');
const FrontIndexPage = (req, res) => {
    res.status(200).render('frontend/pages/index',{
        layout : 'frontend/layouts/master'
    });
}



const FrontContactPage = (req, res) => {
    res.status(200).render('frontend/pages/contact',{
        layout: 'frontend/layouts/master'
    })
}

const FrontAboutPage = (req,res) => {
    const clients = JSON.parse(readFileSync(path.join(__dirname,'./../../database/client.json')));
    res.status(200).render('frontend/pages/about-us',{
        layout : 'frontend/layouts/master',
        clients : clients
    })
}

const FrontServicesPage = (req,res) => {
    res.status(200).render('frontend/pages/services',{
        layout : 'frontend/layouts/master'
    })
}

module.exports = {
    FrontIndexPage,
    FrontContactPage,
    FrontAboutPage,
    FrontServicesPage
}