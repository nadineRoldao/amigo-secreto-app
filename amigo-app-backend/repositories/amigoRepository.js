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

module.exports = () => AmigoRepository;