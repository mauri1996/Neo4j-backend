/*jshint esversion: 6 */
const { Router } = require('express');
const vuelosCtrl = require('../controllers/pelis.controller');
const router = Router();


router.get('/', vuelosCtrl.getMovies);
router.post('/', vuelosCtrl.createMovie);
router.get('/peli', vuelosCtrl.getMovie);
router.put('/:id', vuelosCtrl.updateMovie);
router.delete('/:id', vuelosCtrl.deleteMovie);



module.exports = router;