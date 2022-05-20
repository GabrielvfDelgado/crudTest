class MatriculaService {
  repositorio = [];

  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  getMatricula(valor) {
    const existeMatricula = this.repositorio.filter(res =>
      res.matricula == valor
    );

    if (existeMatricula.length > 0) {
      return { status: 200, matricula: existeMatricula[0] };
    } else {
      return { status: 404, matricula: null };
    }
  }

}

module.exports = { MatriculaService };