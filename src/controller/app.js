const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const { alunoRepositorio } = require('../repositorios/alunoRepositorio');
const { AlunoService } = require('../service/alunoService');
const { MatriculaService } = require('../service/matriculaService');
const { matriculaRepositorio } = require('../repositorios/matriculaRepositorio');
const { ProfessorService } = require('../service/professorService');
const { professorRepositorio } = require('../repositorios/professorRepositorio');

app.get('/aluno/:nome', (req, res) => {
  const service = new AlunoService(alunoRepositorio);
  const result = service.getAluno(req.params.nome);
  res.json(result);
});

app.post('/aluno', (req, res) => {
  const service = new AlunoService(alunoRepositorio);
  console.log(req.body);
  const result = service.postAluno(req.body);
  res.json("Aluno criado");
});

app.get('/matricula/:valor', (req, res) => {
  const service = new MatriculaService(matriculaRepositorio);
  const result = service.getMatricula(req.params.valor);
  res.json(result);
});

app.get('/professor/:nome', (req, res) => {
  const service = new ProfessorService(professorRepositorio);
  const result = service.getProfessor(req.params.nome);
  res.json(result);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
