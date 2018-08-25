const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log(req.query.code);  
});

module.exports = router;