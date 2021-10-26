const { DoctoresDAO } = require("../DAO/doctores");
const _doctoresDAO = new DoctoresDAO();

class DoctoresController {
  /**
   * @description Se selecciona el parámetro con la información del doctor y se valida:
   *  - Que no sea vacio.
   * @param {Object} doctor
   */
  validarDoctores(doctor) {
    if (!doctor) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.id) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.cedula) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.registro) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.nombres) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.apellidos) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.especialidad) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.correo) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    } else if (!doctor.telefono) {
      throw {
        ok: false,
        mensaje: "Ingrese la información del doctor",
      };
    }
  }

  /**
   * @description Consulta los doctores existentes
   */

  async consultarDoctores() {
    let resp = await _doctoresDAO.consultarDoctores();
    return resp.rows;
  }

  /**
   * @description Se consulta un doctor en específico
   * @param {Object} id
   */

  async consultarDoctor(id) {
    let resp = await _doctoresDAO.consultarDoctores(id);
    switch (resp.rowCount) {
      case 0:
        throw "Elemento no encontrado";
      case 1:
        return resp.rows;
    }
  }

  /**
  * @description Se crea un doctor con su respectiva información
  * @param {Object} doctor 
 
  */

  async guardarDoctor(doctor) {
    await _doctoresDAO.guardarDoctor(doctor);
  }

  /**
   * @description Se edita una doctor con su respectiva información por id
   * @param {Object} doctor
   * @param {Object} id
   */

  async actualizarDoctor(doctor, id) {
    if (doctor.id != id) {
      throw {
        ok: false,
        mensaje: "id del doctor no corresponde al enviado",
      };
    }
    await _doctoresDAO.actualizarDoctor(doctor);
  }
}

module.exports = { DoctoresController };
