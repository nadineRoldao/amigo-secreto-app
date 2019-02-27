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

GrupoRepository.prototype.listarAmigosAtivos = (id, callback) => {
    connection.query("SELECT ga.id_amigo, a.nome FROM amigo a INNER JOIN grupo_amigo ga ON a.id = ga.id_amigo WHERE ga.id_grupo = ? AND ga.ativo = 'y'", [id], callback);
}

GrupoRepository.prototype.listarAmigosInativos = (id, callback) => {
    connection.query("SELECT ga.id_amigo, a.nome FROM amigo a INNER JOIN grupo_amigo ga ON a.id = ga.id_amigo WHERE ga.id_grupo = ? AND ga.ativo = 'n'", [id], callback);
}

module.exports = () => GrupoRepository;