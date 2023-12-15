class xMemoryDao {
    constructor() {
      this.palabras = ["kuka"];
    }
    createLibroDao = async (codigoLibro, tituloLibro,autorLibro) => {
        try {
          const libro = {
            codigo: codigoLibro,
            titulo: tituloLibro,
            autor: autorLibro,
            estado: "disponible"
          }
          await this.libros.push(libro);
          return await libro;
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
  
  export default xMemoryDao;
  