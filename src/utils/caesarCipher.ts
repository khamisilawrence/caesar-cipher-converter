export function caesarCipher(
  text: string,
  shift: number,
  alphabet: string
): string {
  return text
    .split("")
    .map((char) => {
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) return char; // Preserve non-alphabet characters
      const shiftedIndex = (index + shift) % alphabet.length;
      return alphabet[shiftedIndex];
    })
    .join("");
}
