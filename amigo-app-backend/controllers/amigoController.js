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
}