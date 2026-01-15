
import { JLPTItem } from './types';

export const JLPT_DATA: JLPTItem[] = [
  // N5 基础
  { level: 'N5', category: '名词', kanji: '図書館', kana: 'としょかん', romaji: 'toshokan', mean: '图书馆' },
  { level: 'N5', category: '动词', kanji: '練習', kana: 'れんしゅう', romaji: 'renshuu', mean: '练习' },
  { level: 'N5', category: '形容词', kanji: '面白い', kana: 'おもしろい', romaji: 'omoshiroi', mean: '有趣的' },
  { level: 'N5', category: '动词', kanji: '勉強', kana: 'べんきょう', romaji: 'benkyou', mean: '学习' },
  { level: 'N5', category: '名词', kanji: '自転車', kana: 'じてんしゃ', romaji: 'jitensha', mean: '自行车' },
  
  // N2 进阶
  { level: 'N2', category: '名词', kanji: '雰囲気', kana: 'ふんいき', romaji: 'funiki', mean: '氛围/气氛' },
  { level: 'N2', category: '名词', kanji: '具体的', kana: 'ぐていてき', romaji: 'guteiteki', mean: '具体的' },
  { level: 'N2', category: '动词', kanji: '確認', kana: 'かくにん', romaji: 'kakunin', mean: '确认' },
  { level: 'N2', category: '动词', kanji: '解決', kana: 'かいけつ', romaji: 'kaiketsu', mean: '解决' },
  { level: 'N2', category: '副词', kanji: '絶対', kana: 'ぜったい', romaji: 'zettai', mean: '绝对' }
];

export const KANA_DATA: JLPTItem[] = [
  // 清音 - A行
  { level: 'KANA', category: '清音-A', kanji: 'あ', kana: 'あ', romaji: 'a', mean: 'A' },
  { level: 'KANA', category: '清音-A', kanji: 'い', kana: 'い', romaji: 'i', mean: 'I' },
  { level: 'KANA', category: '清音-A', kanji: 'う', kana: 'う', romaji: 'u', mean: 'U' },
  { level: 'KANA', category: '清音-A', kanji: 'え', kana: 'え', romaji: 'e', mean: 'E' },
  { level: 'KANA', category: '清音-A', kanji: 'お', kana: 'お', romaji: 'o', mean: 'O' },
  // 清音 - K行
  { level: 'KANA', category: '清音-K', kanji: 'か', kana: 'か', romaji: 'ka', mean: 'KA' },
  { level: 'KANA', category: '清音-K', kanji: 'き', kana: 'き', romaji: 'ki', mean: 'KI' },
  { level: 'KANA', category: '清音-K', kanji: 'く', kana: 'く', romaji: 'ku', mean: 'KU' },
  { level: 'KANA', category: '清音-K', kanji: 'け', kana: 'け', romaji: 'ke', mean: 'KE' },
  { level: 'KANA', category: '清音-K', kanji: 'こ', kana: 'こ', romaji: 'ko', mean: 'KO' },
  // 清音 - S行
  { level: 'KANA', category: '清音-S', kanji: 'さ', kana: 'さ', romaji: 'sa', mean: 'SA' },
  { level: 'KANA', category: '清音-S', kanji: 'し', kana: 'し', romaji: 'shi', mean: 'SHI' },
  { level: 'KANA', category: '清音-S', kanji: 'す', kana: 'す', romaji: 'su', mean: 'SU' },
  { level: 'KANA', category: '清音-S', kanji: 'せ', kana: 'せ', romaji: 'se', mean: 'SE' },
  { level: 'KANA', category: '清音-S', kanji: 'そ', kana: 'そ', romaji: 'so', mean: 'SO' },
  // 浊音示例 (仅列出部分以保证代码精简，实际建议全部包含)
  { level: 'KANA', category: '浊音-G', kanji: 'が', kana: 'が', romaji: 'ga', mean: 'GA' },
  { level: 'KANA', category: '浊音-G', kanji: 'ぎ', kana: 'ぎ', romaji: 'gi', mean: 'GI' },
  { level: 'KANA', category: '浊音-G', kanji: 'ぐ', kana: 'ぐ', romaji: 'gu', mean: 'GU' },
  { level: 'KANA', category: '浊音-G', kanji: 'げ', kana: 'げ', romaji: 'ge', mean: 'GE' },
  { level: 'KANA', category: '浊音-G', kanji: 'ご', kana: 'ご', romaji: 'go', mean: 'GO' },
  // 拗音示例
  { level: 'KANA', category: '拗音', kanji: 'きゃ', kana: 'きゃ', romaji: 'kya', mean: 'KYA' },
  { level: 'KANA', category: '拗音', kanji: 'しゅ', kana: 'しゅ', romaji: 'shu', mean: 'SHU' },
  { level: 'KANA', category: '拗音', kanji: 'ちょ', kana: 'ちょ', romaji: 'cho', mean: 'CHO' },
  { level: 'KANA', category: '拗音', kanji: 'りょ', kana: 'りょ', romaji: 'ryo', mean: 'RYO' },
  // 结尾
  { level: 'KANA', category: '清音-N', kanji: 'ん', kana: 'ん', romaji: 'n', mean: 'N' }
];
