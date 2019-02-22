let connection;

function GrupoRepository(conn){
    connection = conn;
}

GrupoRepository.prototype.create = (grupo, callback) => {
    connection.query('INSERT INTO grupo SET ?', grupo, callback);
}

module.exports = () => GrupoRepository;