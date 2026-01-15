import { JLPTItem } from './types';

export const JLPT_DATA: JLPTItem[] = [
  // N5 基础
  { level: 'N5', category: '名词', kanji: '图书馆', kana: 'としょかん', romaji: 'toshokan', mean: '图书馆' },
  { level: 'N5', category: '动词', kanji: '练习', kana: 'れんしゅう', romaji: 'renshuu', mean: '练习' },
  { level: 'N5', category: '形容词', kanji: '有趣', kana: 'おもしろい', romaji: 'omoshiroi', mean: '有趣的' },
  { level: 'N5', category: '动词', kanji: '学习', kana: 'べんきょう', romaji: 'benkyou', mean: '学习' },
  { level: 'N5', category: '名词', kanji: '自行车', kana: 'じてんしゃ', romaji: 'jitensha', mean: '自行车' },
  
  // N2 进阶
  { level: 'N2', category: '名词', kanji: '氛围', kana: 'ふんいき', romaji: 'funiki', mean: '氛围/气氛' },
  { level: 'N2', category: '名词', kanji: '具体', kana: 'ぐていてき', romaji: 'guteiteki', mean: '具体的' },
  { level: 'N2', category: '动词', kanji: '确认', kana: 'かくにん', romaji: 'kakunin', mean: '确认' },
  { level: 'N2', category: '动词', kanji: '解决', kana: 'かいけつ', romaji: 'kaiketsu', mean: '解决' },
  { level: 'N2', category: '副词', kanji: '绝对', kana: 'ぜったい', romaji: 'zettai', mean: '绝对' },

  // 名台词
  { level: 'ANIME', category: '名台词', kanji: '君の名は', kana: 'きみのなは', romaji: 'kiminonaha', mean: '你的名字。' },
  { level: 'ANIME', category: '名台词', kanji: '諦めたらそこで試合終了', kana: 'あきらめたらそこでしあいしゅうりょう', romaji: 'akirametarasokodeshiaishuuryou', mean: '要是放弃的话，比赛就结束了。' }
];

export const KANA_DATA: JLPTItem[] = [
  // 清音 (Seion)
  { level: 'KANA', category: 'A行', kanji: 'あ', kana: 'あ', romaji: 'a', mean: 'A' },
  { level: 'KANA', category: 'A行', kanji: 'い', kana: 'い', romaji: 'i', mean: 'I' },
  { level: 'KANA', category: 'A行', kanji: 'う', kana: 'う', romaji: 'u', mean: 'U' },
  { level: 'KANA', category: 'A行', kanji: 'え', kana: 'え', romaji: 'e', mean: 'E' },
  { level: 'KANA', category: 'A行', kanji: 'お', kana: 'お', romaji: 'o', mean: 'O' },

  { level: 'KANA', category: 'K行', kanji: 'か', kana: 'か', romaji: 'ka', mean: 'KA' },
  { level: 'KANA', category: 'K行', kanji: 'き', kana: 'き', romaji: 'ki', mean: 'KI' },
  { level: 'KANA', category: 'K行', kanji: 'く', kana: 'く', romaji: 'ku', mean: 'KU' },
  { level: 'KANA', category: 'K行', kanji: 'け', kana: 'け', romaji: 'ke', mean: 'KE' },
  { level: 'KANA', category: 'K行', kanji: 'こ', kana: 'こ', romaji: 'ko', mean: 'KO' },

  { level: 'KANA', category: 'S行', kanji: 'さ', kana: 'さ', romaji: 'sa', mean: 'SA' },
  { level: 'KANA', category: 'S行', kanji: 'し', kana: 'し', romaji: 'shi', mean: 'SHI' },
  { level: 'KANA', category: 'S行', kanji: 'す', kana: 'す', romaji: 'su', mean: 'SU' },
  { level: 'KANA', category: 'S行', kanji: 'せ', kana: 'せ', romaji: 'se', mean: 'SE' },
  { level: 'KANA', category: 'S行', kanji: 'そ', kana: 'そ', romaji: 'so', mean: 'SO' },

  { level: 'KANA', category: 'T行', kanji: 'た', kana: 'た', romaji: 'ta', mean: 'TA' },
  { level: 'KANA', category: 'T行', kanji: 'ち', kana: 'ち', romaji: 'chi', mean: 'CHI' },
  { level: 'KANA', category: 'T行', kanji: 'つ', kana: 'つ', romaji: 'tsu', mean: 'TSU' },
  { level: 'KANA', category: 'T行', kanji: 'て', kana: 'て', romaji: 'te', mean: 'TE' },
  { level: 'KANA', category: 'T行', kanji: 'と', kana: 'と', romaji: 'to', mean: 'TO' },

  { level: 'KANA', category: 'N行', kanji: 'な', kana: 'な', romaji: 'na', mean: 'NA' },
  { level: 'KANA', category: 'N行', kanji: 'に', kana: 'に', romaji: 'ni', mean: 'NI' },
  { level: 'KANA', category: 'N行', kanji: 'ぬ', kana: 'ぬ', romaji: 'nu', mean: 'NU' },
  { level: 'KANA', category: 'N行', kanji: 'ね', kana: 'ね', romaji: 'ne', mean: 'NE' },
  { level: 'KANA', category: 'N行', kanji: 'の', kana: 'の', romaji: 'no', mean: 'NO' },

  { level: 'KANA', category: 'H行', kanji: 'は', kana: 'は', romaji: 'ha', mean: 'HA' },
  { level: 'KANA', category: 'H行', kanji: 'ひ', kana: 'ひ', romaji: 'hi', mean: 'HI' },
  { level: 'KANA', category: 'H行', kanji: 'ふ', kana: 'ふ', romaji: 'fu', mean: 'FU' },
  { level: 'KANA', category: 'H行', kanji: 'へ', kana: 'へ', romaji: 'he', mean: 'HE' },
  { level: 'KANA', category: 'H行', kanji: 'ほ', kana: 'ほ', romaji: 'ho', mean: 'HO' },

  { level: 'KANA', category: 'M行', kanji: 'ま', kana: 'ま', romaji: 'ma', mean: 'MA' },
  { level: 'KANA', category: 'M行', kanji: 'み', kana: 'み', romaji: 'mi', mean: 'MI' },
  { level: 'KANA', category: 'M行', kanji: 'む', kana: 'む', romaji: 'mu', mean: 'MU' },
  { level: 'KANA', category: 'M行', kanji: 'め', kana: 'め', romaji: 'me', mean: 'ME' },
  { level: 'KANA', category: 'M行', kanji: 'も', kana: 'も', romaji: 'mo', mean: 'MO' },

  { level: 'KANA', category: 'Y行', kanji: 'や', kana: 'や', romaji: 'ya', mean: 'YA' },
  { level: 'KANA', category: 'Y行', kanji: 'ゆ', kana: 'ゆ', romaji: 'yu', mean: 'YU' },
  { level: 'KANA', category: 'Y行', kanji: 'よ', kana: 'よ', romaji: 'yo', mean: 'YO' },

  { level: 'KANA', category: 'R行', kanji: 'ら', kana: 'ら', romaji: 'ra', mean: 'RA' },
  { level: 'KANA', category: 'R行', kanji: 'り', kana: 'り', romaji: 'ri', mean: 'RI' },
  { level: 'KANA', category: 'R行', kanji: 'る', kana: 'る', romaji: 'ru', mean: 'RU' },
  { level: 'KANA', category: 'R行', kanji: 'れ', kana: 'れ', romaji: 're', mean: 'RE' },
  { level: 'KANA', category: 'R行', kanji: 'ろ', kana: 'ろ', romaji: 'ro', mean: 'RO' },

  { level: 'KANA', category: 'W行', kanji: 'わ', kana: 'わ', romaji: 'wa', mean: 'WA' },
  { level: 'KANA', category: 'W行', kanji: 'を', kana: 'を', romaji: 'wo', mean: 'WO' },
  { level: 'KANA', category: '鼻音', kanji: 'ん', kana: 'ん', romaji: 'n', mean: 'N' },

  // 浊音 (Dakuon)
  { level: 'KANA', category: '浊音-G', kanji: 'が', kana: 'が', romaji: 'ga', mean: 'GA' },
  { level: 'KANA', category: '浊音-G', kanji: 'ぎ', kana: 'ぎ', romaji: 'gi', mean: 'GI' },
  { level: 'KANA', category: '浊音-G', kanji: 'ぐ', kana: 'ぐ', romaji: 'gu', mean: 'GU' },
  { level: 'KANA', category: '浊音-G', kanji: 'げ', kana: 'げ', romaji: 'ge', mean: 'GE' },
  { level: 'KANA', category: '浊音-G', kanji: 'ご', kana: 'ご', romaji: 'go', mean: 'GO' },

  { level: 'KANA', category: '浊音-Z', kanji: 'ざ', kana: 'ざ', romaji: 'za', mean: 'ZA' },
  { level: 'KANA', category: '浊音-Z', kanji: 'じ', kana: 'じ', romaji: 'ji', mean: 'JI' },
  { level: 'KANA', category: '浊音-Z', kanji: 'ず', kana: 'ず', romaji: 'zu', mean: 'ZU' },
  { level: 'KANA', category: '浊音-Z', kanji: 'ぜ', kana: 'ぜ', romaji: 'ze', mean: 'ZE' },
  { level: 'KANA', category: '浊音-Z', kanji: 'ぞ', kana: 'ぞ', romaji: 'zo', mean: 'ZO' },

  { level: 'KANA', category: '浊音-D', kanji: 'だ', kana: 'だ', romaji: 'da', mean: 'DA' },
  { level: 'KANA', category: '浊音-D', kanji: 'ぢ', kana: 'ぢ', romaji: 'ji', mean: 'DI/JI' },
  { level: 'KANA', category: '浊音-D', kanji: 'づ', kana: 'づ', romaji: 'zu', mean: 'DU/ZU' },
  { level: 'KANA', category: '浊音-D', kanji: 'で', kana: 'で', romaji: 'de', mean: 'DE' },
  { level: 'KANA', category: '浊音-D', kanji: 'ど', kana: 'ど', romaji: 'do', mean: 'DO' },

  { level: 'KANA', category: '浊音-B', kanji: 'ば', kana: 'ば', romaji: 'ba', mean: 'BA' },
  { level: 'KANA', category: '浊音-B', kanji: 'び', kana: 'び', romaji: 'bi', mean: 'BI' },
  { level: 'KANA', category: '浊音-B', kanji: 'ぶ', kana: 'ぶ', romaji: 'bu', mean: 'BU' },
  { level: 'KANA', category: '浊音-B', kanji: 'べ', kana: 'べ', romaji: 'be', mean: 'BE' },
  { level: 'KANA', category: '浊音-B', kanji: 'ぼ', kana: 'ぼ', romaji: 'bo', mean: 'BO' },

  // 半浊音 (Handakuon)
  { level: 'KANA', category: '半浊音-P', kanji: 'ぱ', kana: 'ぱ', romaji: 'pa', mean: 'PA' },
  { level: 'KANA', category: '半浊音-P', kanji: 'ぴ', kana: 'ぴ', romaji: 'pi', mean: 'PI' },
  { level: 'KANA', category: '半浊音-P', kanji: 'ぷ', kana: 'ぷ', romaji: 'pu', mean: 'PU' },
  { level: 'KANA', category: '半浊音-P', kanji: 'ぺ', kana: 'ぺ', romaji: 'pe', mean: 'PE' },
  { level: 'KANA', category: '半浊音-P', kanji: 'ぽ', kana: 'ぽ', romaji: 'po', mean: 'PO' },

  // 拗音 (Youon)
  { level: 'KANA', category: '拗音-K', kanji: 'きゃ', kana: 'きゃ', romaji: 'kya', mean: 'KYA' },
  { level: 'KANA', category: '拗音-K', kanji: 'きゅ', kana: 'きゅ', romaji: 'kyu', mean: 'KYU' },
  { level: 'KANA', category: '拗音-K', kanji: 'きょ', kana: 'きょ', romaji: 'kyo', mean: 'KYO' },
  { level: 'KANA', category: '拗音-S', kanji: 'しゃ', kana: 'しゃ', romaji: 'sha', mean: 'SHA' },
  { level: 'KANA', category: '拗音-S', kanji: 'しゅ', kana: 'しゅ', romaji: 'shu', mean: 'SHU' },
  { level: 'KANA', category: '拗音-S', kanji: 'しょ', kana: 'しょ', romaji: 'sho', mean: 'SHO' },
  { level: 'KANA', category: '拗音-C', kanji: 'ちゃ', kana: 'ちゃ', romaji: 'cha', mean: 'CHA' },
  { level: 'KANA', category: '拗音-C', kanji: 'ちゅ', kana: 'ちゅ', romaji: 'chu', mean: 'CHU' },
  { level: 'KANA', category: '拗音-C', kanji: 'ちょ', kana: 'ちょ', romaji: 'cho', mean: 'CHO' }
];