var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Bimorethi27',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}
