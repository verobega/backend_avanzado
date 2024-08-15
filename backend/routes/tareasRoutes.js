const express = require('express');
const router = express.Router();
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers');
const { protect } = require('../middleware/authMiddleware')

//router.route('/').get(protect, getTareas).post(protect, createTareas);
router.get('/', protect, getTareas);
router.post('/', protect, createTareas);

//router.route('/:id').put(protect, updateTareas).delete(protect, deleteTareas);
router.put('/:id', protect, updateTareas);
router.delete('/:id', protect, deleteTareas);

module.exports = router