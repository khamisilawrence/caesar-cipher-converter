import { caesarCipher } from "../utils/caesarCipher";

test("Encrypt English Text", () => {
  const result = caesarCipher("hello", 1, "abcdefghijklmnopqrstuvwxyz");
  expect(result).toBe("ifmmp");
});

test("Decrypt English Text", () => {
  const result = caesarCipher("ifmmp", -1, "abcdefghijklmnopqrstuvwxyz");
  expect(result).toBe("hello");
});
