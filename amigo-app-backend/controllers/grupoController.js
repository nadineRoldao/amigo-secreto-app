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

    app.post('/grupo/enviarPedido/:id_grupo/:id_amigo', (req, res) => {

        let idGrupo = req.params.id_grupo;
        let idAmigo = req.params.id_amigo;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.enviarPedido(idGrupo, idAmigo, (err) => {
            if (err) {
                console.log('Houve um erro' + err);
                return;
            }
            console.log('SUCESSO!!');
        });
    });

    app.put('/grupo/aceitarPedido/:id_grupo/:id_amigo', (req, res) => {

        let idGrupo = req.params.id_grupo;
        let idAmigo = req.params.id_amigo;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn); 

        grupoRepository.aceitarPedido(idGrupo, idAmigo, (err) => {
            if (err) {
                console.log('Houve um erro ' + err);
                return;
            }
            console.log('SUCESSO!!');
        });
    });

    app.put('/grupo/trocarModerador/:id_amigo/:id', (req, res) => {

        let idAmigo = req.params.id_amigo;
        let idGrupo = req.params.id;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.trocarModerador(idAmigo, idGrupo, (err) => {
            if (err) {
                console.log('Houve um erro ' + err);
                return;
            }
            console.log('SUCESSO!!'); 
        });
    });

    app.get('/grupo/exibirModerador/:id', (req, res) => {

        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.exibirModerador(id, (err, result) => {
            if (err) {
                res.send('Houve um erro' + err);
                return;
            }
            res.send(result);
        });
    });

    app.get('/grupo/exibirAmigoSorteado/:id_amigo/:id_grupo', (req, res) => {

        let idAmigo = req.params.id_amigo;
        let idGrupo = req.params.id_grupo;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);

        grupoRepository.exibirAmigoSorteado(idAmigo, idGrupo, (err, result) => {
            if (err) {
                res.send('Houve um erro' + err);
                return;
            }
            res.send(result);
        });

    });
}