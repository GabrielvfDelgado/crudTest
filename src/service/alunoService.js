class AlunoService {
  repositorio = [];

  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  getAluno(nome) {
    const existealuno = this.repositorio.filter(res =>
      res.nome == nome
    );

    if (existealuno.length > 0) {
      return { status: 200, aluno: existealuno[0] };
    } else {
      return { status: 404, aluno: null };
    }
  }

  postAluno(objeto) {
    this.repositorio.push(objeto);
    return 201;
  }

}

module.exports = { AlunoService };