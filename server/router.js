const express = require('express');
const router = express.Router();

/*router.get('/', (req, res) =>{
    res.send('server is up and running');
});*/

router.get("/", (request, response) => {
    response.sendFile(`${__dirname}/client/build/index.html`);
  });

module.exports = router;