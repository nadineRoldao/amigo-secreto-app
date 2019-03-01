# amigo-secreto-app
Este é um projeto de estudo, onde será desenvolvido o backend da aplicação com o JavaScript utilizando NodeJS, nesse projeto, todas as features serão consumidas através de WebService Rest.
Após o desenvolvimento da API, vou implementar o frontend com TypeScript utilizando Angular.
Toda a parte de armazenamento de dados será desenvolvida com MySQL.

### criacao-scripts
- Criação do banco de dados com suas tabelas
- Adição de constraints e foreign keys
- Criação de arquivo que popula o banco para testes iniciais
- Desenvolvimento e testes das principais Queries utilizadas no sistema

### estrutura-backend
- Criação da estrutura do projeto por meio do npm
- Instalação do express e suas configurações iniciais como: 
    - consign para importação de módulos de forma simples
    - body-parser para ensinar o express a fazer parser de Json no corpo das requisições
    - express-validator para criar regras de validação de objetos enviado nos serviços.

### criacao-conexao-db 
- Adicionado driver MySql para node via npm
- Criação do connectionFactory (arquivo que cria nossas conexões)

### resource-amigo
- Criação de amigoController (responsavel por receber as requisições do usuário (request), processa-los e devolver uma resposta(response) baseado em uma rota)
- Implementado lógica que busca um amigo pelo id e pelo email e senha
- Aprendi a diferença entre queryString e pathParam e como recupera-los usando o express
    - queryString: localhost:3000/amigo/logar?email=matheusroldao@gmail.com&senha=123456
    - pathParam: localhost:3000/amigos/9
- Entendendo melhor o conceito de funções de callback
- Estudei sobre funções sincronas e asincronas e breve introdução do que são promisses

### resouce-grupo
- Criação de grupoController e grupoRepository e implementando o método de criação de grupo
- Implementação dos metodos de deletar grupo e listar amigos ativos e inativos
- Implementação dos metodos
    - Listar amigos ativos
    - Listar amigos inativos
    - Enviar pedido pra entrar no grupo
    - Aceitar pedido para entrar no grupo
    - Trocar de moderador
    - Exibir moderador
    - Exibir amigo sorteado