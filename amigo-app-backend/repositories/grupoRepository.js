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

GrupoRepository.prototype.enviarPedido = (id_grupo, id_amigo, callback) =>{
    connection.query('INSERT INTO grupo_amigo (id_grupo, id_amigo) VALUES (?, ?)', [id_grupo, id_amigo], callback);
}

GrupoRepository.prototype.aceitarPedido = (id_grupo, id_amigo, callback) => {
    connection.query("UPDATE grupo_amigo SET ativo = 'y' WHERE id_grupo = ? and id_amigo = ?", [id_grupo, id_amigo], callback);
}

GrupoRepository.prototype.trocarModerador = (id_amigo, id, callback) => {
    connection.query('UPDATE grupo SET id_amigo = ? WHERE id = ?', [id_amigo, id], callback);
}

GrupoRepository.prototype.exibirModerador = (id, callback) => {
    connection.query('SELECT a.id, a.nome FROM amigo a INNER JOIN grupo g ON a.id = g.id_amigo WHERE g.id = ?', [id], callback);
}

GrupoRepository.prototype.exibirAmigoSorteado = (id_amigo, id_grupo, callback) => {
    connection.query('SELECT id, nome FROM amigo WHERE id = (SELECT ga.id_amigo_sorteado FROM '
    + 'amigo a INNER JOIN grupo_amigo ga ON a.id = ga.id_amigo '
    +'WHERE ga.id_amigo = ? AND ga.id_grupo = ?)', [id_amigo, id_grupo], callback);
}

module.exports = () => GrupoRepository;