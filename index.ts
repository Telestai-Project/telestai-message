import bitcoinMessage from "bitcoinjs-message";
const MESSAGE_PREFIX = "\x19Telestai Signed Message:\n";

/** returns a base64 encoded string representation of the signature */
export function sign(message: string, privateKey: any, compressed = true) {
  const signature = bitcoinMessage.sign(
    message,
    privateKey,
    compressed,
    MESSAGE_PREFIX
  );

  return signature.toString("base64");
}
export function verifyMessage(
  message: string,
  address: string,
  signature: string
) {
  const m = Buffer.from(message).toString("ascii");
  const result = bitcoinMessage.verify(m, address, signature, MESSAGE_PREFIX);
  return result;
}
