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

GrupoRepository.prototype.buscarGrupoPorNome = (termo, callback) => {
    termo = '%' + termo.trim() + '%';
    connection.query("SELECT g.id, g.nome, g.id_amigo, g.data_sorteio, g.valor_min, g.valor_max, g.data_evento, g.local_evento, a.nome FROM grupo g INNER JOIN amigo a ON g.id_amigo = a.id WHERE TRIM(g.nome) LIKE ?", [termo], callback);
}

GrupoRepository.prototype.listarMensagensAmigoSorteado = (id_amigo, id_grupo, callback) => {
    connection.query('SELECT texto, link, data_postagem FROM grupo_postagem WHERE id_amigo = (' 
    + 'SELECT ga.id_amigo_sorteado ' 
    + 'FROM amigo a INNER JOIN grupo_amigo ga ON a.id = ga.id_amigo '
    + 'WHERE ga.id_amigo = ? AND ga.id_grupo = ?)', [id_amigo, id_grupo], callback);
}

GrupoRepository.prototype.listarMensagensGrupo = (id_grupo, callback) => {
    connection.query('SELECT texto, link, data_postagem FROM grupo_postagem WHERE id_grupo = ?', [id_grupo], callback);
}

GrupoRepository.prototype.buscarGrupoPorId = (id, callback) => {
    connection.query('SELECT * FROM grupo WHERE id = ?', [id], callback);
}

GrupoRepository.prototype.atualizarGrupo = (grupo, callback) => {
    const SQL = ' UPDATE grupo SET  nome          = ?,' +
                '                   data_sorteio  = ?,' +
                '                   valor_min     = ?,' +
                '                   valor_max     = ?,'  +
                '                   data_evento   = ?,'  +
                '                   local_evento  = ?'  +
                ' WHERE id = ?';

    const params = [
        grupo.nome,
        grupo.data_sorteio,
        grupo.valor_min,
        grupo.valor_max,
        grupo.data_evento,
        grupo.local_evento,
        grupo.id
    ]
    connection.query(SQL, params, callback);
}

GrupoRepository.prototype.postarMensagem = (grupo_postagem, callback) => {
    connection.query('INSERT INTO grupo_postagem SET ?', grupo_postagem, callback);
}

GrupoRepository.prototype.atualizarGrupoAmigo = (idAmigoSorteado, idGrupo, idAmigo, callback) => {
    connection.query('UPDATE grupo_amigo SET id_amigo_sorteado = ? WHERE id_grupo = ? AND id_amigo = ?', 
    [idAmigoSorteado, idGrupo, idAmigo], callback);
} 

GrupoRepository.prototype.desfazerSorteio = (idGrupo, callback) => {
    connection.query('UPDATE grupo_amigo SET id_amigo_sorteado = null WHERE id_grupo = ?', [idGrupo], callback);
}

GrupoRepository.prototype.sairDoGrupo = (idAmigo, idGrupo, callback) => {
    connection.query('DELETE FROM grupo_amigo WHERE id_amigo = ? and id_grupo = ?', [idAmigo, idGrupo], callback);
}
module.exports = () => GrupoRepository;