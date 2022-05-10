

describe('Teste de rotas GET', () => {

  it('Get Aluno sucess', () => {
    const { AlunoService } = require('./alunoService');
    const { alunoRepositorioMock } = require('../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("mello");

    expect(result.status).toEqual(200);
    expect(result.aluno).toEqual({
      nome: 'mello',
      senha: '1111',
      cpf: '121.123.123-20'
    });
  });

  it('Get Aluno fail', () => {
    const { AlunoService } = require('./alunoService');
    const { alunoRepositorioMock } = require('../test/mock/alunoRepositorioMock');
    let service = new AlunoService(alunoRepositorioMock);
    let result = service.getAluno("gabriel");

    expect(result.status).toEqual(404);
    expect(result.aluno).toBeNull();
  });
});