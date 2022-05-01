const router = require('express').Router();
const { sendMessage } = require('../../../controllers/messageControllers');

router.post('/', sendMessage);

module.exports = router
