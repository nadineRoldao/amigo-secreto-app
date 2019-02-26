let connection;

function GrupoRepository(conn){
    connection = conn;
}

GrupoRepository.prototype.create = (grupo, callback) => {
    connection.query('INSERT INTO grupo SET ?', grupo, callback);
}

GrupoRepository.prototype.deletar = (id, callback) => {
    connection.query('DELETE FROM grupo WHERE id = ?', [id], callback);
}

module.exports = () => GrupoRepository;