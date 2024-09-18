const { verifyMessage, sign } = require("./dist/main");
const bitcoin = require('bitcoinjs-lib');
const ECPairFactory = require('ecpair').ECPairFactory;
const ecc = require('tiny-secp256k1');

const ECPair = ECPairFactory(ecc);

const wifPrivateKey = "your_wif_private_key";
const keyPair = ECPair.fromWIF(wifPrivateKey, bitcoin.networks.bitcoin);
const decodedPrivateKey = keyPair.privateKey;

const privateKeyBuffer = Buffer.from(decodedPrivateKey);

const address = "you_public_key";
const message = "something";
const signature =
  "signature";

test("Verify valid message signature", () => {
  const result = verifyMessage(message, address, signature);
  expect(result).toBe(true);
});

test("Verify invalid message signature", () => {
  const result = verifyMessage(
    message + " change the message",
    address,
    signature
  );
  expect(result).toBe(false);
});

test("Sign message", () => {
  const result = sign("Hello", privateKeyBuffer);
  console.log(result);
});
