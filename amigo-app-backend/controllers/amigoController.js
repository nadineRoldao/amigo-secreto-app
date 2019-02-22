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

    app.delete('/amigo/deletar/:id', (req, res) => {
        
        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let amigoRepository = new app.repositories.amigoRepository(conn);
        
        amigoRepository.deletar(id, (err) => {
            if(err){
             res.send('Houve um erro');
            }
            res.send('SUCESSO!!');
        });
    });

    // app.put('/clientes/atualizar', function(req, res){
    //     let cliente = req.body;
    //     let conn = app.repositories.connectionFactory();
    //     let clienteRepository = new app.repositories.clienteRepository(conn);

    //     clienteRepository.atualizar(cliente, function(err) {
    //         if(err){
    //            res.send('Não foi possível atualizar o cliente');
    //         }
    //         res.send('Sucesso!');
    //     });
    // });

    app.put('/amigos/atualizar/:id', (req, res) => {
        let amigo;
        let id = req.params.id;
        let amigoAtualizar = req.body;
        let conn = app.repositories.connectionFactory();
        let amigoRepository = new app.repositories.amigoRepository(conn);

        amigoRepository.buscarPorId(id, (err, result) => {
            this.amigo = result;
        });

        let amigoFinal = Object.assign({}, amigo, amigoAtualizar);

        amigoRepository.atualizar(amigoFinal, (err) => {
            if (err) {
                res.send('Houve um erro');
            }
            res.send('SUCESSO!!');
        });
    });

}