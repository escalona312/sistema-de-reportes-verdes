const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/', reportController.getAllReports);
router.post('/', reportController.createReport);
router.patch('/:id', reportController.updateReportStatus);

module.exports = router;
