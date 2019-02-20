module.exports = (app) => {
    app.post('/amigo/criar', (req, res) => {
        let amigo = req.body;
        let conn = app.repositories.connectionFactory();
        let amigoRepository = new app.repositories.amigoRepository(conn);

        amigoRepository.create(amigo, (err) => {
            if(err){
                res.send('Houve um erro');
                return;
            }
            res.send('Sucesso!');
        });
    });

    app.get('/amigos/:id', (req, res) => {
        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let amigoRepository = new app.repositories.amigoRepository(conn);

        amigoRepository.buscarPorId(id, (err, result) => {
            if(err){
                res.send('Houve um erro');
                return;
            }
            res.send(result[0]);
        });
    });

    app.get('/amigo/logar', (req, res) => {
        // utilizando o query string pois com o pathParam o @ pode ser removido do request
        // exemplo url: localhost:3000/amigo/logar?email=matheusroldao@gmail.com&senha=123456
        let email = req.query.email;
        let senha = req.query.senha;
        let conn = app.repositories.connectionFactory();
        let amigoRepository = new app.repositories.amigoRepository(conn);

        amigoRepository.buscarPorEmailESenha(email, senha, (err, result) => {
            if(err){
                res.send('Houve um erro');
                return;
            }
            res.send(result[0]);
        });
    });
}