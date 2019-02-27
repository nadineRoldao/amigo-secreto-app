module.exports = (app) => {
    app.post('/grupo/criar', (req, res) => {
        let grupo = req.body;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.create(grupo, (err) => {
            if (err) {
                res.send('Houve um erro');
                return;
            }
            res.send('SUCESSO!');
        });
    });

    app.delete('/grupo/:idGrupo/:idAmigo/deletar', (req, res) => {
        
        let id = req.params.idGrupo;
        let idAmigo = req.params.idAmigo;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);
        
        grupoRepository.deletar(id, idAmigo, (err) => {
            if(err){
             res.send('Houve um erro');
             return;
            }
            res.send('SUCESSO!!');
        });
    });

    app.get('/grupo/amigos-ativos/:id', (req, res) => {

        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.listarAmigos(id, 'y', (err, result) => {
            if (err) {
                res.send('Houve um erro' + err);
                return;
            }
            res.send(result);
        });
    });

    app.get('/grupo/amigos-inativos/:id', (req, res) => {

        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.listarAmigos(id, 'n', (err, result) => {
            if (err) {
                res.send('Houve um erro' + err);
                return;
            }
            res.send(result);
        });
    });
}