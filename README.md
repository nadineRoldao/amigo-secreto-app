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