const express = require('express');
const { addPoints, getPoints } = require('../controllers/pointsController');
const router = express.Router();

router.post('/add', addPoints);
router.get('/:userId', getPoints);

module.exports = router;
