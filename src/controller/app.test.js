describe('Test routes GET| aluno/:nome', () => {

  it('Get Aluno Sucess', () => {
    const { AlunoService } = require('../service/alunoService');
    const { alunoRepositorioMock } = require('../../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("mello");

    expect(result.status).toEqual(200);
    expect(result.aluno).toEqual({
      nome: 'mello',
      senha: '1111',
      cpf: '121.123.123-20'
    });
  });

  it('Get Aluno Fail', () => {
    const { AlunoService } = require('../service/alunoService');
    const { alunoRepositorioMock } = require('../../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("gabriel");

    expect(result.status).toEqual(404);
    expect(result.aluno).toBeNull();
  });
});


describe('Test routes GET| matricula/:valor', () => {
  it('Get Matricula Sucess', () => {
    const { MatriculaService } = require('../service/matriculaService');
    const { matriculaRepositorioMock } = require('../../test/mock/matriculaRepositorioMock');
    let service = new MatriculaService(matriculaRepositorioMock);
    let result = service.getMatricula("1111");
    expect(result.status).toEqual(200);
    expect(result.matricula).toEqual({
      nome: 'mello',
      matricula: '1111'
    });
  });
});


describe('Test routes GET| professor/:nome', () => {
  it('Get Matricula Sucess', () => {
    const { ProfessorService } = require('../service/professorService');
    const { professorRepositorioMock } = require('../../test/mock/professorRepositorioMock');
    let service = new ProfessorService(professorRepositorioMock);
    let result = service.getProfessor("eduardo");
    expect(result.status).toEqual(200);
    expect(result.professor).toEqual({
      nome: 'eduardo',
      senha: '852',
      cpf: '111.113.113-20',
      materia: 'historia'
    });
  });
});


describe('Test routes POST| aluno/', () => {

  it('Post Aluno Sucess', () => {
    const { AlunoService } = require('../service/alunoService');
    const { alunoRepositorioMock } = require('../../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.postAluno(
      {
        nome: 'gustavo',
        senha: '5555',
        cpf: '111.123.123-20'
      });

    expect(result).toEqual(201);
  });

  it('Get Aluno Sucess after Post', () => {
    const { AlunoService } = require('../service/alunoService');
    const { alunoRepositorioMock } = require('../../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("gustavo");

    expect(result.status).toEqual(200);
    expect(result.aluno).toEqual({
      nome: 'gustavo',
      senha: '5555',
      cpf: '111.123.123-20'
    });
  });
});