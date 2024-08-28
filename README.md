# telestai-message

Sign and Verify messages in Telestai in JavaScript, primarly for Node.js

## If you want to use it in the browser, use Browserify

@Telestai-Project/telestai-message is based on 'bitcoinjs-lib'.

## install

```
npm install @Telestai-Project/telestai-message

//If you need to sign messages,  install CoinKey
npm install coinkey
```

## How to use

```
const { sign, verifyMessage } = require("@Telestai-Project/telestai-message");

//coinkey helps us convert from WIF to privatekey
const CoinKey = require("coinkey");

//Sign
{
  //Address RVDUQTULaceEudDsgqCQBT6bfcdqUSvJPV
  //Public Key 031c5142f11f629bad27dd567c41e189ee23eccd9b57561fd0ff7c96b2cc9a0a0f
  const privateKeyWIF = "L1JHsDosNU9FeUYB24Pixwkxs56pwCrj5rdtuKHXTcWBJTDLGNa7";

  //Convert WIF to private key
  const privateKey = CoinKey.fromWif(privateKeyWIF).privateKey;
  const message = "Hello world";

  const signature = sign(message, privateKey);
  console.log("Signature", signature);
}

//Verify
{
  const address = "RS4EYELZhxMtDAuyrQimVrcSnaeaLCXeo6";
  const message = "Hello world";
  const signature =
    "H2zo48+tI/KT9eJrHt7PLiEBMaRn1A1Eh49IFu0MbfhAFBxVc0FG2UE5E79PCbhd9KexijsQxYvNM6AsVn9EAEo=";

  console.log("Verify", verifyMessage(message, address, signature));
}

```
