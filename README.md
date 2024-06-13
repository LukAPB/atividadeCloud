# Passos para executar a aplicação


1) Execute os scripts de criação de tabela e inserção de dados:
   - Copie e cole o conteúdo do arquivo init.sql em seu cliente MySQL para criar a tabela e inserir os dados.

2) Para executar a aplicação, rode o comando abaixo:
docker run -p 3000:3000 --name nodejs-app -d lukapb/atividadecloud:1.0.0

1) Abra a URL http://localhost:3000/consulta-dados para ver os dados.

2) O link do GitHub é https://github.com/lukapb/atividadecloud e do DockerHub é https://hub.docker.com/repository/docker/lukapb/atividadecloud/general

3) Para verificar a liveness da aplicação, acesse http://localhost:3000/liveness
4) Para verificar a readiness da aplicação, acesse http://localhost:3000/readiness
