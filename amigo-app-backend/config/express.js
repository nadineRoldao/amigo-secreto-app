let app = require('express')();
let consign = require('consign');
let bodyParser = require('body-parser');
let  validator = require('express-validator');

module.exports = () => {
    console.log(('Carregamdo módulo express'));

    app.use( validator() );

    app.use( bodyParser.urlencoded( {extended: true} ) );
    app.use( bodyParser.json() );

    consign()
        .include('controllers')
        .then('services')
        .then('repositories')
        .into(app);

    return app;
};
