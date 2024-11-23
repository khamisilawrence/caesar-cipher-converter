export function determineShift(
  text: string,
  alphabet: string,
  dictionary: Set<string>
): number {
  let bestShift = 0;
  let maxValidWords = 0;

  for (let shift = 0; shift < alphabet.length; shift++) {
    const decrypted = text
      .split("")
      .map((char) => {
        const index = alphabet.indexOf(char.toLowerCase());
        return index !== -1
          ? alphabet[(index - shift + alphabet.length) % alphabet.length]
          : char;
      })
      .join("");

    const validWords = decrypted
      .split(/\s+/)
      .filter((word) => dictionary.has(word)).length;

    if (validWords > maxValidWords) {
      maxValidWords = validWords;
      bestShift = shift;
    }
  }

  return bestShift;
}
