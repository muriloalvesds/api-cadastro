Api em Node-js, express e mongodb.

Como utilizar o projeto

Sem docker: 
terminal ./> npm install 
Para rodar o projeto:
terminal ./> npm start

MongoDB e Credenciais:
Depois que instalar o projeto em sua maquina. Terá que entrar no site do mongodb(https://www.mongodb.com/), Criar um banco de dados e conectar com o projeto. como vc podem ver deixei um arquivo chamado (Credenciais-exemple.js), onde vai inserir seu usuario e senha que vai conectar com o mongodb.  

Insomnia:
Eu utilizei o Insomnia para fazer os teste.

Rota GET/health:
Rota principal onde vai passar (http://localhost:3333/health).

Rota POST/:
Cadastra um novo produto, uma descrição e um valor

Rota GET/:
Recebe um produto retorna os dados completos

Rota GET/detail:
Onde vc vai poder passar o id de um determinado produto e retorna o detalhe desse produto  

Rota PUT/update:
Aqui vc vai colocar o id do produto que quer atualizar e botar as novas informaçoes

Rota DEL/delete:
Aqui simplesmente vai passar o id do produto que deseja deletar
