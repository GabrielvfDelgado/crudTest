class ProfessorService {
  repositorio = [];

  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  getProfessor(nome) {
    const existeProf = this.repositorio.filter(res =>
      res.nome == nome
    );

    if (existeProf.length > 0) {
      return { status: 200, professor: existeProf[0] };
    } else {
      return { status: 404, professor: null };
    }
  }

}

module.exports = { ProfessorService };