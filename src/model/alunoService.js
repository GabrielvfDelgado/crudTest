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

}

module.exports = { AlunoService };