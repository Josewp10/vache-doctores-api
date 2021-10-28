const express = require('express');
const { DoctoresController } = require('../controllers/doctores');
const {success, errorResponse} = require('../../../libs/utils/responses');

const router = express.Router();
const _doctoresController = new DoctoresController;

/**
 * Petición: Traer todos los Doctores
 * Parámetros: Vacío
 * Cuerpo: Vacío
 * Respuesta: doctores consultados o mensaje de error
 */
 router.get('/doctores', async (req, res) => {
    try {
       let resp = await _doctoresController.consultarDoctores();
        success(req, res, 'Doctores Consultados', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});

 
/**
 * Petición: Traer un doctor específico
 * Parámetros: id
 * Cuerpo: Vacío
 * Respuesta: doctor consultado o mensaje de error
 */
 router.get('/doctores/:id', async (req, res) => {
    let id = req.params.id;
    try {
       let resp = await _doctoresController.consultarDoctor(id);
        success(req, res, 'Doctor Consultado', resp, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
});


/**
 * Petición: Crear Doctor
 * Respuesta: doctor creado
 */
router.post('/doctores', async (req, res) => {
    try {
      let doctores = req.body;
  
      await _doctoresController.guardarDoctor(doctores);
      success(req, res, 'Doctor creado', null, 200);
    } catch (error) {
      errorResponse(req, res, 'ERROR', error);
    }
  });

/**
 * Petición: Editar Doctor
 * Respuesta: pedido modificado
 */
  router.put("/doctores/:id", async (req, res) => {
    try {
      let id = req.params.id;
      let doctor = req.body;
  
      await _doctoresController.actualizarDoctor( doctor, id);
      success(req, res, 'Doctor Actualizado', null, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }
  });

  module.exports = router;
