const express = require('express');
const app = express();
const port = 3000;
const { alunoRepositorio } = require('../repositorios/alunoRepositorio');
const { AlunoService } = require('../model/alunoService');
const { MatriculaService } = require('../model/matriculaService');
const { matriculaRepositorio } = require('../repositorios/matriculaRepositorio');

app.get('/aluno/:nome', (req, res) => {
  const service = new AlunoService(alunoRepositorio);
  const result = service.getAluno(req.params.nome);
  res.json(result);
});

app.get('/matricula/:valor', (req, res) => {
  const service = new MatriculaService(matriculaRepositorio);
  const result = service.getMatricula(req.params.valor);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
