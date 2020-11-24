var express = require('express');
var cors = require('cors');
var logger = require('loglevel');
var signer = require('ztostor-sdk-js/dist/main/signing');

logger.setLevel('debug');

const app = express();
const port = 3000;

class Auth {
  constructor(accessKey, secretKey) {
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.region = 'us-east-1';
  }
}
const auth = new Auth('Minio', 'Test123456');

app.use(cors());
app.use(express.json()); // for parsing application/json

app.post('/', (req, res) => {
  const operation = req.body;
  var date = new Date();
  var authorization = signer.signV4(operation, auth.accessKey, auth.secretKey, auth.region, date);
  res.json(authorization);
  // if (operation.expiresTTL) {
  //   res.json(signer.getQuerySignature(operation));
  // } else {
  //   res.json(signer.signV4(operation));
  // }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));