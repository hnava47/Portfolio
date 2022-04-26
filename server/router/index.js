const router = require('express').Router();
const messageRoutes = require('./messageRoutes');

router.use('/message', messageRoutes);

module.exports = router;
