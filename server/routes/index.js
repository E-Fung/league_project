const express = require('express');
let router = express.Router();

const championController = require('../controllers').champion;
const allytipsController = require('../controllers').allytips;
const enemytipsController = require('../controllers').enemytips;
const infoController = require('../controllers').info;
const passiveController = require('../controllers').passive;
const spellsController = require('../controllers').spells;
const statsController = require('../controllers').stats;
const tagsController = require('../controllers').tags;

router.post('/champion', championController.add);
router.post('/allytips', allytipsController.getByChampion);
router.post('/enemytips', enemytipsController.getByChampion);
router.post('/info', infoController.getByChampion);
router.post('/passive', passiveController.getByChampion);
router.post('/spells', spellsController.getByChampion);
router.post('/stats', statsController.getByChampion);
router.post('/tags', tagsController.getByChampion);

module.exports = router;
