

describe('Test routes GET| aluno/:nome', () => {

  it('Get Aluno Sucess', () => {
    const { AlunoService } = require('../model/alunoService');
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
    const { AlunoService } = require('../model/alunoService');
    const { alunoRepositorioMock } = require('../../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("gabriel");

    expect(result.status).toEqual(404);
    expect(result.aluno).toBeNull();
  });
});


describe('Test routes GET| matricula/:valor', () => {
  it('Get Matricula Sucess', () => {
    const { MatriculaService } = require('../model/matriculaService');
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