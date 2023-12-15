import Factory from "../DAOs/Factory.js";

class libroApi {
  constructor() {
    this.factory = Factory.factory();
  }

  // Validar que la palabra no esté vacía o sea inválida antes de crear
  create = async (codigo, titulo,autor) => {
    try {
      const libro = await this.factory.xDao.createLibroDao(codigo, titulo,autor);
      return libro;
    } catch (error) {
      return error;
    }
  };

  getAllLibros = async () => {
    try {
      const data = await this.factory.xDao.getAllDao();
      return data;
    } catch (error) {
      return error.message || error;
    }
  };

  // Validar que el ID es válido antes de eliminar
  deleteLibro = async (id) => {
    try {
      if (!id || typeof id !== 'string') {
        throw new Error('ID inválido');
      }

      const data = await this.factory.xDao.deleteDao(id);
      return data;
    } catch (error) {
      return error.message || error;
    }
  };

  // Validar que el ID es válido antes de obtener el libro
  getLibroById = async (id) => {
    try {
      if (!id || typeof id !== 'string') {
        throw new Error('ID inválido');
      }

      const data = await this.factory.xDao.getByIdDao(id);
      return data;
    } catch (error) {
      return error.message || error;
    }
  };
}

export default libroApi;