let connection;

function GrupoRepository(conn){
    connection = conn;
}

GrupoRepository.prototype.create = (grupo, callback) => {
    connection.query('INSERT INTO grupo SET ?', grupo, callback);
}

GrupoRepository.prototype.deletar = (id, idAmigo, callback) => {
    connection.query('DELETE FROM grupo WHERE id = ? and id_amigo = ?', [id, idAmigo], callback);
}

GrupoRepository.prototype.listarAmigos = (id, ativo, callback) => {
    connection.query("SELECT ga.id_amigo, a.nome FROM amigo a INNER JOIN grupo_amigo ga ON a.id = ga.id_amigo WHERE ga.id_grupo = ? AND ga.ativo = ?", [id, ativo], callback);
}

module.exports = () => GrupoRepository;