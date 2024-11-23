export const alphabets = {
  english: "abcdefghijklmnopqrstuvwxyz",

  // Latin-based languages
  spanish: "abcdefghijklmnñopqrstuvwxyzáéíóúü",
  french: "abcdefghijklmnopqrstuvwxyzàâçéèêëîïôùûüÿ",
  german: "abcdefghijklmnopqrstuvwxyzäöüß",
  italian: "abcdefghijklmnopqrstuvwxyz",
  portuguese: "abcdefghijklmnopqrstuvwxyzáâãàçéêíóôõú",
  dutch: "abcdefghijklmnopqrstuvwxyz",
  romanian: "abcdefghijklmnopqrstuvwxyzăâîșț",

  // Greek
  greek: "αβγδεζηθικλμνξοπρστυφχψω",

  // Cyrillic-based languages
  russian: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
  ukrainian: "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя",
  bulgarian: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
  serbian: "абвгдђежзийклљмнњопрстћуфхцчџш",
  macedonian: "абвгдежзѕијклмнопрстќуфхцчџш",

  // Arabic
  arabic: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",

  // Hebrew
  hebrew: "אבגדהוזחטיכלמנסעפצקרשת",

  // Devanagari
  devanagari: "अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह",

  // Thai
  thai: "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลวศษสหฬอฮ",

  // Armenian
  armenian: "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ",

  // Georgian
  georgian: "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ",

  // Hangul (Korean)
  korean: "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ",

  // Japanese
  hiragana:
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
  katakana:
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",

  // Chinese (limited transliteration set)
  chinese: "一二三四五六七八九十",

  // Other languages
  swahili: "abcdefghijklmnopqrstuvwxyz",
  esperanto: "abcdefghijklmnopqrstuvwxyzĉĝĥĵŝŭ",
  kurdish_latin: "abcdefghijklmnopqrstuvwxyzçêîşû",
  kurdish_cyrillic: "абвгдеэжзийклмнопрстуфхцчшщъыьэюя",
  albanian: "abcdefghijklmnopqrstuvwxyzçë",
  mongolian: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
};

export function getAlphabet(language: keyof typeof alphabets): string {
  if (!alphabets[language]) {
    console.warn(
      `Alphabet for ${language} is not supported. Defaulting to English.`
    );
  }
  return alphabets[language] || alphabets.english;
}
