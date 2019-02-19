let connection;

function AmigoRepository(conn){
    connection = conn;
}

AmigoRepository.prototype.create = (amigo, callback) => {
    connection.query('insert into amigo set ?', amigo, callback);
}

module.exports = () => AmigoRepository;