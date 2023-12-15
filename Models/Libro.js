import { DataTypes as DT, Model } from "sequelize";


class Libro extends Model {}

Libro.init(
  {
    codigo: {
      type: DT.STRING,
      allowNull: false,
    },
    titulo: {
      type: DT.STRING,
      allowNull: false,
    },
    autor: {
      type: DT.STRING,
      allowNull: false,
    },
    estado: {
      type: DT.ENUM("disponible","alquilado","no apto"),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Libro",
  }
);

export default Libro;