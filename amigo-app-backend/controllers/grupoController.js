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

    app.delete('/grupo/deletar/:id', (req, res) => {
        
        let id = req.params.id;
        let conn = app.repositories.connectionFactory();
        let grupoRepository = new app.repositories.grupoRepository(conn);
        
        grupoRepository.deletar(id, (err) => {
            if(err){
             res.send('Houve um erro');
            }
            res.send('SUCESSO!!');
        });
    });
}