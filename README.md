# Funcionalidade de extensão ao CreaNet

### Descrição da Solução (Upload da lista de formandos):

Primeiramente, nossa solução inclui adicionar uma nova funcionalidade ao CreaNet, a possibilidade da conta da instituição além de permitir colocar contato também permitir colocar a lista de formandos.

Essa lista de formandos estaria limitada ao formato ***.xlsx***, o que permitiria que nossa aplicação facilicitasse a consulta de formandos otimizando o comparativo de nome de formando com o diploma do solicitante de registro. Além de que por ser uma extensão de algo pré-existente como Crea-SP induz segurança e maior rapidez para implementação.

#### Tela de Visão geral

Primeira tela de contato da instituição, no caso do coordenador

![Visão Geral](../Crea-Hackathon/front/assets/visao-geral.PNG)

#### Tela de cadastramento do documento

![Tela de cadastramento do documento](../Crea-Hackathon/front/assets/cadastro-crea.PNG)


#### Template para auxiliar a instituição em relação ao melhor modelo de lista de formandos

Nossos campos incluem nome, cpf, email e data

![Template](../Crea-Hackathon/front/assets/template.PNG)

### Descrição da Solução (Conexão com o EMEC)



### Tecnologias usadas

Todas pensadas na simplificação da implementação pra testagem, devido a serem tecnologias rápida de se implementar

- Protótipo estático (Figma)
- Frontend(HTML, JavaScript e CSS)
- Backend(Express, Sequelize, JavaScript)
- Banco de Dados (SQLite3)

### Como rodar a solução:

Primeiramente, precisa das seguintes tecnologias abaixo:

- Um editor de texto de código (VSCODE, por exemplo);
- Baixado o SQlite

Abra o terminal na pasta \back e rode:

```bash
npm i
```

Assim ira instalar todas as dependencias necessarias, logo após isso, o comando para rodar
o servidor:

```bash
npm run start
```

Após rodar o comando acima, haverá a devolução do link da página inicial:

```bash
http://localhost:3000
```

### Estrutura de Pastas

meu_projeto/
|README.md
|-- back/
|    |-- config/
|    |-- model/
|    |   |app.js
|    |   |database.sqlite
|    |   |package.json
|-- front/
|    |-- assets/
|    |-- css/
|    |-- js/
|    |-- pages/
|    |-- planilha
|    |   |index.html
|-- LICENSE

### Brainstorm da Solução:

[Link para o miro](https://miro.com/welcomeonboard/dHNDclVPY1lKdGxtZEpTQmlnc3dVQ1VCa1VOMlR3OWtpdm9oWHBjRzZkNXpBQmFjcFhtWG9rSmIxbWRCT3gza3wzNDU4NzY0NTI0ODU2MDEyMDk0fDI=?share_link_id=59429647370)



### Protótipo no Figma

[Link para o protótipo](https://www.figma.com/file/BDm1HdEP3Upl9AQF3FSxZC/crea-hackathon?type=design&node-id=0%3A1&mode=design&t=nCZYSRFa7UJOM3yV-1)