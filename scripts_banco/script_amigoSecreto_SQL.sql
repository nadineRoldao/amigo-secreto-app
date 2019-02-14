-- cadastrar amigo
insert into amigo (nome, email, senha) values ('teste', 'teste', 'teste');

-- alterar profile
update amigo set imagem = 'teste';

-- criar grupo
insert into grupo (nome, id_amigo) values ('teste', 12);

-- enviar pedido para entrar no grupo
insert into grupo_amigo (id_amigo, id_grupo) values (21, 3);

-- aceitar pedido para entrar no grupo
update grupo_amigo set ativo = 'y' where id_amigo = 21 and id_grupo = 3;

-- agendar sorteio

-- listar amigos do grupo ativos
select ga.id_amigo, a.nome
	from amigo a inner join grupo_amigo ga on a.id = ga.id_amigo
where ga.id_grupo = 1 and ga.ativo = 'y';

-- listar amigos do grupo não ativos
select ga.id_amigo, a.nome
	from amigo a inner join grupo_amigo ga on a.id = ga.id_amigo
where ga.id_grupo = 1 and ga.ativo = 'n';

-- trocar moderador
update grupo set id_amigo = 5 where id_grupo = 1;

-- exibir moderador 
select a.id, a.nome
	from amigo a inner join grupo g on a.id = g.id_amigo
where g.id = 1;

-- exibir amigo sorteado
-- select a.nome 
-- from amigo a inner join grupo_amigo ga on a.

select id, nome from amigo where id = (
	select ga.id_amigo_sorteado
		from amigo a inner join grupo_amigo ga on a.id = ga.id_amigo
	where ga.id_amigo = 7 and ga.id_grupo = 1
);

-- listar mensagem do grupo


-- listar mensagem do amigo sorteado











-- id 7 e id 9 grupo 1
