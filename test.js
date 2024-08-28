const { verifyMessage } = require("./dist/main");

const address = "TcsCu4yjc2GFZCXPVkxQ6E54MWCHkdT9z2";
const message = "902392";
const signature =
  "IM2pxWRW2csCRedLajB7ji7swNniPu2DIKPg6FX86Su4dnr5FNkZNBMSztFICDRnpl7lgBmTRN2aWLLToR17TYk=";

test("Verify valid message signature", () => {
  const result = verifyMessage(message, address, signature);

  expect(result).toBe(true);
});

test("Verify unvalid message signature", () => {
  const result = verifyMessage(
    message + " change the message",
    address,
    signature
  );
  expect(result).toBe(false);
});
