let mysql = require('mysql');

function getConnection (){
    // futuramente os dados de conexão com o banco vão para um arquivo chamado 
    // enviroment, para que os dados não fiquem expostos
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'amigo_secreto_app'
    });

    return connection;
}

module.exports = () => getConnection;