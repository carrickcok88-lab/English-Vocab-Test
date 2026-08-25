/**
 * Vocabulary Data & Course Content
 */

const TOPICS = [
  { id: 1, name: 'Daily Life', desc: 'rutinitas, rumah, aktivitas harian' },
  { id: 2, name: 'School', desc: 'kelas, tugas, ujian' },
  { id: 3, name: 'People', desc: 'kepribadian dan hubungan sosial' },
  { id: 4, name: 'Emotions', desc: 'perasaan dan respons' },
  { id: 5, name: 'Food', desc: 'makanan dan kebiasaan makan' },
  { id: 6, name: 'Travel', desc: 'perjalanan dan petualangan' },
  { id: 7, name: 'Work', desc: 'pekerjaan dan karir' },
  { id: 8, name: 'Technology', desc: 'perangkat dan internet' },
  { id: 9, name: 'Sports', desc: 'olahraga dan kompetisi' },
  { id: 10, name: 'Society', desc: 'masyarakat dan budaya' }
];

const VOCABULARY_BANKS = [
  [
    { word: 'routine', meaning: 'rutinitas', example: 'I have a daily routine.' },
    { word: 'schedule', meaning: 'jadwal', example: 'Check the schedule.' },
    { word: 'prepare', meaning: 'mempersiapkan', example: 'Prepare for tomorrow.' },
    { word: 'improve', meaning: 'meningkatkan', example: 'Improve your skills.' },
    { word: 'notice', meaning: 'menyadari', example: 'Did you notice?' },
    { word: 'avoid', meaning: 'menghindari', example: 'Avoid the problem.' },
    { word: 'require', meaning: 'membutuhkan', example: 'This requires attention.' },
    { word: 'provide', meaning: 'menyediakan', example: 'Provide help.' },
    { word: 'develop', meaning: 'mengembangkan', example: 'Develop your talent.' },
    { word: 'manage', meaning: 'mengelola', example: 'Manage your time.' }
  ],
  [
    { word: 'achieve', meaning: 'mencapai', example: 'Achieve your goals.' },
    { word: 'effort', meaning: 'usaha', example: 'Put in effort.' },
    { word: 'challenge', meaning: 'tantangan', example: 'Face the challenge.' },
    { word: 'habit', meaning: 'kebiasaan', example: 'Build good habits.' },
    { word: 'decision', meaning: 'keputusan', example: 'Make a decision.' },
    { word: 'opportunity', meaning: 'kesempatan', example: 'Great opportunity ahead.' },
    { word: 'experience', meaning: 'pengalaman', example: 'Learn from experience.' },
    { word: 'confident', meaning: 'percaya diri', example: 'Be confident.' },
    { word: 'motivation', meaning: 'motivasi', example: 'Find motivation.' },
    { word: 'success', meaning: 'kesuksesan', example: 'Success requires work.' }
  ],
  [
    { word: 'exhausted', meaning: 'sangat lelah', example: 'I\'m exhausted.' },
    { word: 'frustrated', meaning: 'frustrasi', example: 'Don\'t be frustrated.' },
    { word: 'relieved', meaning: 'lega', example: 'I felt relieved.' },
    { word: 'anxious', meaning: 'cemas', example: 'Feeling anxious.' },
    { word: 'embarrassed', meaning: 'malu', example: 'Don\'t feel embarrassed.' },
    { word: 'grateful', meaning: 'bersyukur', example: 'I\'m grateful.' },
    { word: 'reluctant', meaning: 'enggan', example: 'Reluctant to go.' },
    { word: 'eager', meaning: 'antusias', example: 'Eager to learn.' },
    { word: 'confused', meaning: 'bingung', example: 'I\'m confused.' },
    { word: 'amazed', meaning: 'terkesan', example: 'Amazed by the view.' }
  ],
  [
    { word: 'efficient', meaning: 'efisien', example: 'Efficient work.' },
    { word: 'essential', meaning: 'penting', example: 'Essential for success.' },
    { word: 'significant', meaning: 'berarti', example: 'Significant change.' },
    { word: 'temporary', meaning: 'sementara', example: 'Temporary solution.' },
    { word: 'permanent', meaning: 'permanen', example: 'Permanent damage.' },
    { word: 'flexible', meaning: 'fleksibel', example: 'Flexible schedule.' },
    { word: 'relevant', meaning: 'relevan', example: 'Relevant information.' },
    { word: 'obvious', meaning: 'jelas', example: 'Obvious choice.' },
    { word: 'creative', meaning: 'kreatif', example: 'Creative solution.' },
    { word: 'logical', meaning: 'logis', example: 'Logical thinking.' }
  ]
];

const PHRASAL_VERBS = [
  { phrase: 'give up', meaning: 'menyerah', example: 'Don\'t give up!' },
  { phrase: 'find out', meaning: 'mengetahui', example: 'Find out the truth.' },
  { phrase: 'look after', meaning: 'merawat', example: 'Look after yourself.' },
  { phrase: 'run into', meaning: 'bertemu', example: 'I ran into an old friend.' },
  { phrase: 'carry on', meaning: 'melanjutkan', example: 'Carry on with work.' },
  { phrase: 'figure out', meaning: 'memahami', example: 'Figure it out.' },
  { phrase: 'break down', meaning: 'rusak', example: 'The car broke down.' },
  { phrase: 'come across', meaning: 'menemukan', example: 'Come across new ideas.' },
  { phrase: 'point out', meaning: 'menunjukkan', example: 'Point out the issue.' },
  { phrase: 'turn down', meaning: 'menolak', example: 'Turn down the offer.' }
];

const IDIOMS = [
  { phrase: 'a piece of cake', meaning: 'sangat mudah', example: 'This is a piece of cake!' },
  { phrase: 'break the ice', meaning: 'mencairkan suasana', example: 'Let\'s break the ice.' },
  { phrase: 'once in a blue moon', meaning: 'sangat jarang', example: 'I see him once in a blue moon.' },
  { phrase: 'under the weather', meaning: 'kurang sehat', example: 'I\'m under the weather today.' },
  { phrase: 'hit the nail on the head', meaning: 'tepat sasaran', example: 'You hit the nail on the head.' },
  { phrase: 'cost an arm and a leg', meaning: 'sangat mahal', example: 'That costs an arm and a leg.' },
  { phrase: 'rain cats and dogs', meaning: 'hujan lebat', example: 'It\'s raining cats and dogs.' },
  { phrase: 'spill the beans', meaning: 'membocorkan', example: 'Don\'t spill the beans.' },
  { phrase: 'pull someone\'s leg', meaning: 'bercanda', example: 'I\'m just pulling your leg.' },
  { phrase: 'call it a day', meaning: 'selesaikan hari', example: 'Let\'s call it a day.' }
];

// Helper functions
function getTopicForLevel(level) {
  return TOPICS[(level - 1) % TOPICS.length];
}

function getLevelVocabulary(level) {
  const idx = (level - 1) % VOCABULARY_BANKS.length;
  return VOCABULARY_BANKS[idx];
}

function getLevelPhrasals(level) {
  const start = ((level - 1) * 3) % PHRASAL_VERBS.length;
  return PHRASAL_VERBS.slice(start, start + 3).concat(
    PHRASAL_VERBS.slice(0, Math.max(0, start + 3 - PHRASAL_VERBS.length))
  );
}

function getLevelIdioms(level) {
  const start = ((level - 1) * 2) % IDIOMS.length;
  return IDIOMS.slice(start, start + 2).concat(
    IDIOMS.slice(0, Math.max(0, start + 2 - IDIOMS.length))
  );
}