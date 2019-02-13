insert into amigo (nome, email, senha) values ('Edney','edneyroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Nadine','vitorianadineroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Giselle', 'giselleroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Marjorie', 'marjorieroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Draco', 'dracoroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Pietra', 'pietraroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Mayara', 'mayararoldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Fillipe', 'filliperoldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Matheus', 'matheusroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Marilene', 'marileneroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Thabita', 'thabitaroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Biba', 'bibaroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Gustavo', 'gustavoroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Daniel', 'danielroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Pedro', 'pedroroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Viviane', 'vivianeroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Tadeu', 'tadeuroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Anna', 'annaroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Gabriel', 'gabrielroldao@gmail.com', '123456');
insert into amigo (nome, email, senha) values ('Lucas', 'lucasroldao@gmail.com', '123456');

insert into grupo (nome, id_amigo, data_sorteio, valor_min, valor_max) values ('Familia ', 2, null, 100.00, 100.00);
insert into grupo (nome, id_amigo, data_sorteio, valor_min, valor_max) values ('Familia2', 9, null, 100.00, 100.00);

insert into grupo_amigo (id_amigo, id_grupo, ativo) values (1, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (2, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (3, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (4, 1, 'n');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (5, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (6, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (7, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (8, 1, 'n');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (9, 1, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (10, 1, 'y');

insert into grupo_amigo (id_amigo, id_grupo, ativo) values (11, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (12, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (13, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (14, 2, 'n');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (15, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (16, 2, 'n');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (17, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (18, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (19, 2, 'y');
insert into grupo_amigo (id_amigo, id_grupo, ativo) values (20, 2, 'y');

insert into grupo_postagem (id_amigo, id_grupo, texto, link) values (2, 1, 'teste insert banco de cados', 'www.siteteste.com.br');
insert into grupo_postagem (id_amigo, id_grupo, texto, link) values (4, 2, 'teste insert banco de cados', 'www.siteteste.com.br');