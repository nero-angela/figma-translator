import { InvalidFrameNameException } from "./exceptions";

export class Language {
  static defaultSelectedLanguage = { q: "en", name: "English" };

  static getTargetLang(node: SceneNode): Record<string, string> {
    const firstWord = node.name.split(/[\/\s]+/)[0];
    const targetLang = Language.languages.find(
      (l) => l.q.toLowerCase() === firstWord.toLowerCase()
    );
    if (!targetLang) {
      throw new InvalidFrameNameException(node);
    } else {
      return targetLang;
    }
  }

  static languages: Record<string, string>[] = [
    { q: "af", name: "Afrikaans" },
    { q: "sq", name: "Albanian" },
    { q: "am", name: "Amharic" },
    { q: "ar", name: "Arabic" },
    { q: "hy", name: "Armenian" },
    { q: "as", name: "Assamese" },
    { q: "ay", name: "Aymara" },
    { q: "az", name: "Azerbaijani" },
    { q: "bm", name: "Bambara" },
    { q: "eu", name: "Basque" },
    { q: "be", name: "Belarusian" },
    { q: "bn", name: "Bengali" },
    { q: "bho", name: "Bhojpuri" },
    { q: "bs", name: "Bosnian" },
    { q: "bg", name: "Bulgarian" },
    { q: "ca", name: "Catalan" },
    { q: "ceb", name: "Cebuano" },
    { q: "zh-CN", name: "Chinese Simplified" },
    { q: "zh-TW", name: "Chinese Traditional" },
    { q: "co", name: "Corsican" },
    { q: "hr", name: "Croatian" },
    { q: "cs", name: "Czech" },
    { q: "da", name: "Danish" },
    { q: "dv", name: "Dhivehi" },
    { q: "doi", name: "Dogri" },
    { q: "nl", name: "Dutch" },
    Language.defaultSelectedLanguage,
    { q: "eo", name: "Esperanto" },
    { q: "et", name: "Estonian" },
    { q: "ee", name: "Ewe" },
    { q: "fil", name: "Filipino" },
    { q: "fi", name: "Finnish" },
    { q: "fr", name: "French" },
    { q: "fy", name: "Frisian" },
    { q: "gl", name: "Galician" },
    { q: "ka", name: "Georgian" },
    { q: "de", name: "German" },
    { q: "el", name: "Greek" },
    { q: "gn", name: "Guarani" },
    { q: "gu", name: "Gujarati" },
    { q: "ht", name: "Haitian Creole" },
    { q: "ha", name: "Hausa" },
    { q: "haw", name: "Hawaiian" },
    { q: "iw", name: "Hebrew" },
    { q: "hi", name: "Hindi" },
    { q: "hmn", name: "Hmong" },
    { q: "hu", name: "Hungarian" },
    { q: "is", name: "Icelandic" },
    { q: "ig", name: "Igbo" },
    { q: "ilo", name: "Ilocano" },
    { q: "id", name: "Indonesian" },
    { q: "ga", name: "Irish" },
    { q: "it", name: "Italian" },
    { q: "ja", name: "Japanese" },
    { q: "jw", name: "Javanese" },
    { q: "kn", name: "Kannada" },
    { q: "kk", name: "Kazakh" },
    { q: "km", name: "Khmer" },
    { q: "rw", name: "Kinyarwanda" },
    { q: "gom", name: "Konkani" },
    { q: "ko", name: "Korean" },
    { q: "kri", name: "Krio" },
    { q: "ku", name: "Kurdish" },
    { q: "ckb", name: "Kurdish" },
    { q: "ky", name: "Kyrgyz" },
    { q: "lo", name: "Lao" },
    { q: "la", name: "Latin" },
    { q: "lv", name: "Latvian" },
    { q: "ln", name: "Lingala" },
    { q: "lt", name: "Lithuanian" },
    { q: "lg", name: "Luganda" },
    { q: "lb", name: "Luxembourgish" },
    { q: "mk", name: "Macedonian" },
    { q: "mai", name: "Maithili" },
    { q: "mg", name: "Malagasy" },
    { q: "ms", name: "Malay" },
    { q: "ml", name: "Malayalam" },
    { q: "mt", name: "Maltese" },
    { q: "mi", name: "Maori" },
    { q: "mr", name: "Marathi" },
    { q: "mni-Mtei", name: "Meiteilon" },
    { q: "lus", name: "Mizo" },
    { q: "mn", name: "Mongolian" },
    { q: "my", name: "Myanmar" },
    { q: "ne", name: "Nepali" },
    { q: "no", name: "Norwegian" },
    { q: "ny", name: "Nyanja" },
    { q: "or", name: "Odia" },
    { q: "om", name: "Oromo" },
    { q: "ps", name: "Pashto" },
    { q: "fa", name: "Persian" },
    { q: "pl", name: "Polish" },
    { q: "pt", name: "Portuguese" },
    { q: "pa", name: "Punjabi" },
    { q: "qu", name: "Quechua" },
    { q: "ro", name: "Romanian" },
    { q: "ru", name: "Russian" },
    { q: "sm", name: "Samoan" },
    { q: "sa", name: "Sanskrit" },
    { q: "gd", name: "Scots Gaelic" },
    { q: "nso", name: "Sepedi" },
    { q: "sr", name: "Serbian" },
    { q: "st", name: "Sesotho" },
    { q: "sn", name: "Shona" },
    { q: "sd", name: "Sindhi" },
    { q: "si", name: "Sinhala" },
    { q: "sk", name: "Slovak" },
    { q: "sl", name: "Slovenian" },
    { q: "so", name: "Somali" },
    { q: "es", name: "Spanish" },
    { q: "su", name: "Sundanese" },
    { q: "sw", name: "Swahili" },
    { q: "sv", name: "Swedish" },
    { q: "tl", name: "Tagalog" },
    { q: "tg", name: "Tajik" },
    { q: "ta", name: "Tamil" },
    { q: "tt", name: "Tatar" },
    { q: "te", name: "Telugu" },
    { q: "th", name: "Thai" },
    { q: "ti", name: "Tigrinya" },
    { q: "ts", name: "Tsonga" },
    { q: "tr", name: "Turkish" },
    { q: "tk", name: "Turkmen" },
    { q: "ak", name: "Twi" },
    { q: "uk", name: "Ukrainian" },
    { q: "ur", name: "Urdu" },
    { q: "ug", name: "Uyghur" },
    { q: "uz", name: "Uzbek" },
    { q: "vi", name: "Vietnamese" },
    { q: "cy", name: "Welsh" },
    { q: "xh", name: "Xhosa" },
    { q: "yi", name: "Yiddish" },
    { q: "yo", name: "Yoruba" },
    { q: "zu", name: "Zulu" },
  ];
}
