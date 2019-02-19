let porta = 3000;
let app = require('./config/express')();

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));