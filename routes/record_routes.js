const express = require('express');

const recordControllers = require('../controllers/record_controller');

const router = express.Router();


// upload a new record
router.post('/', recordControllers.createRecord);

// get the record by the record's id
router.get('/:record_id', recordControllers.getRecordByRecordId);

// get all the records by the patient's id
router.get('/patient/:patient_id', recordControllers.getRecordsByPatientId);


module.exports = router;


