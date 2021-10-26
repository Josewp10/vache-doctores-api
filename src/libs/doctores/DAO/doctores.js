const config = require("config");
const database = config.get("DB");
const ServicePg = require("../../../database/postgress");
const _servicio = new ServicePg(database);

class DoctoresDAO {
  /**
   * @description Consulta toda la información de los doctores en la base de datos.
   * @returns
   */
  async consultarDoctores() {
    let sql = `SELECT id, cedula, registro, nombres, apellidos, especialidad, correo, telefono
	FROM public."doctores";`;
    let respuesta = await _servicio.executeSQL(sql);
    return respuesta;
  }

  /**
   * @description Consulta un doctor en específico en la base de datos.
   * @param {int} id
   * @returns
   */
  async consultarDoctor(idr) {
    let sql = `SELECT id, cedula, registro, nombres, apellidos, especialidad, correo, telefono
	FROM public."doctores" where id=$1;`;

    let respuesta = await _servicio.executeSQL(sql, [id]);
    return respuesta;
  }

  /**
   * @description Registra un nuevo doctor en la base de datos.
   * @param {Object} doctor
   * @returns
   */
  async guardarDoctor(doctor) {
    let sql = `INSERT INTO public."doctores"(id, cedula, registro, nombres, apellidos, especialidad, correo, telefono)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    let valores = [
      doctor.id,
      doctor.cedula,
      doctor.registro,
      doctor.nombres,
      doctor.apellidos,
      doctor.especialidad,
      doctor.correo,
      doctor.telefono,
    ];
    let respuesta = await _servicio.executeSQL(sql, valores);
    return respuesta;
  }

  /**
   * @description Actualiza la información de un doctor.
   * @param {Object} doctor
   * @returns
   */
  async actualizarDoctor(doctor) {
    let sql = `UPDATE public."doctores"
        SET cedula=$1, registro=$2, nombres=$3, apellidos=$4, especialidad=$5, correo=$6, telefono=$7
        WHERE id=$8;`;
    let valores = [
      doctor.cedula,
      doctor.registro,
      doctor.nombres,
      doctor.apellidos,
      doctor.especialidad,
      doctor.correo,
      doctor.telefono,
      doctor.id,
    ];
    await _servicio.executeSQL(sql, valores);
  }
}

module.exports = { DoctoresDAO };
