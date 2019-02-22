let connection;

function AmigoRepository(conn){
    connection = conn;
}

AmigoRepository.prototype.create = (amigo, callback) => {
    connection.query('INSERT INTO amigo SET ?', amigo, callback);
}

AmigoRepository.prototype.buscarPorId = (id, callback) => {
    connection.query('SELECT id, nome, email, imagem FROM amigo WHERE id = ?', [id], callback);
}

AmigoRepository.prototype.buscarPorEmailESenha = (email, senha, callback) => {
    const SQL = 'SELECT id, nome, email, imagem FROM amigo WHERE email = ? and senha = ?';
    connection.query(SQL, [email, senha], callback);
}

AmigoRepository.prototype.deletar = (id, callback) => {
    connection.query('DELETE FROM amigo WHERE id = ?', [id], callback);
}

AmigoRepository.prototype.atualizar = (amigo, callback) => {
    const SQL = ' UPDATE amigo SET  nome   = ?,' +
                '                   email  = ?,' +
                '                   senha  = ?,' +
                '                   imagem = ?'  +
                ' WHERE id = ?';

    const params = [
        amigo.nome,
        amigo.email,
        amigo.senha,
        amigo.imagem,
        amigo.id
    ]

    connection.query(SQL, params, callback);
}

module.exports = () => AmigoRepository;