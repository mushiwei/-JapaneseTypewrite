
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
  { level: 'N2', category: '副词', kanji: '絶対', kana: 'ぜったい', romaji: 'zettai', mean: '绝对' },
  
  // 动漫台词
  { level: 'ANIME', category: '名台词', kanji: '諦めたらそこで試合終了ですよ', kana: 'あきらめたらそこでしあいしゅうりょうですよ', romaji: 'akirametarasokodeshiaishuuryoudesuyo', mean: '要是放弃的话，比赛就到此结束了。' },
  { level: 'ANIME', category: '名台词', kanji: '心臓を捧げよ', kana: 'しんぞうをささげよ', romaji: 'shinzouosasageyo', mean: '献出心脏吧！' }
];

export const KANA_DATA: JLPTItem[] = [
  // 清音 (Seion)
  { level: 'KANA', category: 'あ行', kanji: 'あいうえお', kana: 'あいうえお', romaji: 'aiueo', mean: 'A I U E O' },
  { level: 'KANA', category: 'か行', kanji: 'かきくけこ', kana: 'かきくけこ', romaji: 'kakikukeko', mean: 'KA KI KU KE KO' },
  { level: 'KANA', category: 'さ行', kanji: 'さしすせそ', kana: 'さしすせそ', romaji: 'sashisuseso', mean: 'SA SHI SU SE SO' },
  { level: 'KANA', category: 'た行', kanji: 'たちつてと', kana: 'たちつてと', romaji: 'tachitsuteto', mean: 'TA CHI TSU TE TO' },
  { level: 'KANA', category: 'な行', kanji: 'なにぬねの', kana: 'なにぬねの', romaji: 'naninuneno', mean: 'NA NI NU NE NO' },
  { level: 'KANA', category: 'は行', kanji: 'はひふへほ', kana: 'はひふへほ', romaji: 'hahifuheho', mean: 'HA HI FU HE HO' },
  { level: 'KANA', category: 'ま行', kanji: 'まみむめも', kana: 'まみむめも', romaji: 'mamimumemo', mean: 'MA MI MU ME MO' },
  { level: 'KANA', category: 'や行', kanji: 'やいゆえよ', kana: 'やいゆえよ', romaji: 'yaiyueyo', mean: 'YA (I) YU (E) YO' },
  { level: 'KANA', category: 'ら行', kanji: 'らりるれろ', kana: 'らりるれろ', romaji: 'rarirurero', mean: 'RA RI RU RE RO' },
  { level: 'KANA', category: 'わ行', kanji: 'わをん', kana: 'わをん', romaji: 'wawon', mean: 'WA WO N' },
  
  // 基础单字练习 (更适合初学者肌肉记忆)
  { level: 'KANA', category: '基础单词', kanji: '朝', kana: 'あさ', romaji: 'asa', mean: '早上' },
  { level: 'KANA', category: '基础单词', kanji: '犬', kana: 'いぬ', romaji: 'inu', mean: '狗' },
  { level: 'KANA', category: '基础单词', kanji: '海', kana: 'うみ', romaji: 'umi', mean: '大海' },
  { level: 'KANA', category: '基础单词', kanji: '駅', kana: 'えき', romaji: 'eki', mean: '车站' },
  { level: 'KANA', category: '基础单词', kanji: 'お茶', kana: 'おちゃ', romaji: 'ocha', mean: '茶' },
];
