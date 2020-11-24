## Download from NPM

```sh
npm install --save ztostor-sdk-js
```

## Download from Source

```sh
git clone https://github.com/liuyi0618/ztostor-sdk-js
cd ztostor-sdk-js
npm install
npm install -g
```

```js
var S3Client = require('ztostor-sdk-js')

var s3Client = new S3Client.Client({
    endPoint: 'localhost',
    port: 80,
    useSSL: false,
    accessKey: 'test',
    secretKey: 'Test123456'
});
```

如果在浏览器 Browser 环境中使用 SDK，强烈建议部署一个签名服务器，专门用来对请求做签名，这样的好处是不会将 access_key_id 和 secret_access_key 暴露在客户端

```js
var S3Client = require('ztostor-sdk-js')

var s3Client = new S3Client.Client({
    endPoint: 'localhost',
    port: 80,
    useSSL: false,
    signature_server: "<your.signserver.com>"
});
```