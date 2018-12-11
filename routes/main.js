const express = require('express');

const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.getIndex);
router.get('/add', mainController.getAddCandidate);
router.post('/add', mainController.postAddCandidate);
router.post('/delete', mainController.postDeleteCandidate);
router.get('/candidate/:candidateId', mainController.getEditCandidate);
router.post('/edit-candidate', mainController.postEditCandidate);
router.post('/login', mainController.postLogin);
router.get('/chat', mainController.getChat);
router.get('/token', mainController.getToken);
router.post('/token', mainController.postToken);

module.exports = router;