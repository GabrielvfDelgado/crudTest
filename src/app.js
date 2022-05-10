const express = require('express');
const app = express();
const port = 3000;
const { alunoRepositorio } = require('./repositorios/alunoRepositorio');
const { AlunoService } = require('./alunoService');

app.get('/aluno/:nome', (req, res) => {
  let service = new AlunoService(alunoRepositorio);
  let result = service.getAluno(req.params.nome);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
