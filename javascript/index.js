const pg = require('pg')

const pool = new pg.Pool({
    user: "reposicao_owner",
    host: "ep-morning-sky-a58xrbl2.us-east-2.aws.neon.tech",
    database: "reposicao",
    password: "z5jLEw2xVuIe",
    ssl: true
})

pool.connect()

async function adicionarProduto(){
    const res = await pool.query("insert into produto (id, nome) values (4, 'sei lá') ") 
    console.log(res);
}

adicionarProduto()
// async function buscarProdutos() {

//     const consulta = await pool.query("select * from produto")
 
//     console.log(consulta.rows)
// }


// buscarProdutos()





/* create table produto(
   id int, nome varchar
) */


//   select * from produto
//   insert into produto (id, nome) values (2, 'teclado')
//   delete from produto where id = 2 
//   alter table produto add constraint nome_unico unique(nome)
//   alter table produto add constraint identificacao primary key(id)
   
//   select id from produto --projeção 
//   where id >= 1 --filtragem
//   or id = 1, --ou
//   and nome like '%mouse%' --pesquisa
//   order by id desc --asc --ordem dos fatores
//   limit 4; --limita a quantidade de dados
   
//   create table categoria (id int, nome varchar) 
//   insert into categoria (id, nome) values (1, 'ti')
//   alter table produto add column categoria_id int