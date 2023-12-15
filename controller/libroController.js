import libroApi from "../Api/libroApi.js";
import Libro from "../Models/Libro.js";
const libroapi = new libroApi();

class LibroController {
  constructor() {}

  create = async (req, res) => {
    try {
      const { codigo, titulo,autor} = req.body;
      const libro = await this.xapi.create({codigo, titulo,autor});
      res.status(200).send({
        success: true,
				message: "Libro creado con exito",
				data: libro,
      });
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAllLibros = async (req, res) => {
    try {
      const data = await xapi.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getLibroById = async (req, res) => {
    try {
      const { codigo } = req.params;
      const libro = await Libro.findOne({
        where: { codigo },
        attributes: ["codigo"],
      });

      if (!libro) throw new Error("No hay libros con ese id");

      res.status(200).send({
        success: true,
        message: "El libro",
        data: libro,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteLibro = async (req, res) => {
    try {
      const { id } = req.params;
      const libro = await Libro.destroy({
        where: { id },
      });
      if (!libro) throw new Error("no se elimino nada");
      res
        .status(200)
        .send({ success: true, message: "libro eliminado", data: libro });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  
}

export default LibroController;
