-- drop database amigo_secreto_app;
-- create database amigo_secreto_app;
use amigo_secreto_app;

drop table if exists grupo_amigo;
drop table if exists grupo_postagem;
drop table if exists amigo;
drop table if exists grupo;

create table amigo (
    id    		int   			not null auto_increment primary key,
    nome        varchar(255)    not null,
    email       varchar(255)    not null,
    senha       varchar(255)    not null,
    imagem      varchar(255)    null
);

create table grupo (
    id              int 		    not null auto_increment primary key,
    nome            varchar(255)    not null,
    id_amigo        int             null,
    data_sorteio    timestamp       null,
    valor_min       float           null,
    valor_max       float           null
);

create table grupo_amigo (
	id_amigo            int  		   	not null,
    id_grupo            int    			not null,
    id_amigo_sorteado   int             null,
    ativo               ENUM('y', 'n')  not null default 'n',
    primary key (id_grupo, id_amigo)
);

create table grupo_postagem (
    id          int   		 not null auto_increment primary key,
	id_amigo    int    		 not null,
    id_grupo    int    		 not null,
    texto       varchar(1000),
    link        varchar(255)
);

alter table grupo
add foreign key (id_amigo) references amigo(id);

alter table grupo_amigo
add foreign key (id_amigo) references amigo(id);

alter table grupo_amigo
add foreign key (id_grupo) references grupo(id);

alter table grupo_postagem
add foreign key (id_amigo) references amigo(id);

alter table grupo_postagem
add foreign key (id_grupo) references grupo(id);
