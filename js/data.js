/**
 * Course Data & Vocabulary Bank
 * Contains all learning materials organized by topics and levels
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
    { word: 'routine', meaning: 'rutinitas', example: 'I have a daily routine.', difficulty: 'easy' },
    { word: 'schedule', meaning: 'jadwal', example: 'Check the schedule.', difficulty: 'easy' },
    { word: 'prepare', meaning: 'mempersiapkan', example: 'Prepare for tomorrow.', difficulty: 'easy' },
    { word: 'improve', meaning: 'meningkatkan', example: 'Improve your skills.', difficulty: 'easy' },
    { word: 'notice', meaning: 'menyadari/memperhatikan', example: 'Did you notice?', difficulty: 'medium' },
    { word: 'avoid', meaning: 'menghindari', example: 'Avoid the problem.', difficulty: 'medium' },
    { word: 'require', meaning: 'membutuhkan', example: 'This requires attention.', difficulty: 'medium' },
    { word: 'provide', meaning: 'menyediakan', example: 'Provide help.', difficulty: 'easy' },
    { word: 'develop', meaning: 'mengembangkan', example: 'Develop your talent.', difficulty: 'medium' },
    { word: 'manage', meaning: 'mengelola', example: 'Manage your time.', difficulty: 'medium' }
  ],
  [
    { word: 'achieve', meaning: 'mencapai', example: 'Achieve your goals.', difficulty: 'medium' },
    { word: 'effort', meaning: 'usaha', example: 'Put in effort.', difficulty: 'easy' },
    { word: 'challenge', meaning: 'tantangan', example: 'Face the challenge.', difficulty: 'easy' },
    { word: 'habit', meaning: 'kebiasaan', example: 'Build good habits.', difficulty: 'easy' },
    { word: 'decision', meaning: 'keputusan', example: 'Make a decision.', difficulty: 'easy' },
    { word: 'opportunity', meaning: 'kesempatan', example: 'Great opportunity ahead.', difficulty: 'medium' },
    { word: 'experience', meaning: 'pengalaman', example: 'Learn from experience.', difficulty: 'easy' },
    { word: 'confident', meaning: 'percaya diri', example: 'Be confident.', difficulty: 'medium' },
    { word: 'motivation', meaning: 'motivasi', example: 'Find motivation.', difficulty: 'easy' },
    { word: 'success', meaning: 'kesuksesan', example: 'Success requires work.', difficulty: 'easy' }
  ],
  [
    { word: 'exhausted', meaning: 'sangat lelah', example: 'I\'m exhausted.', difficulty: 'medium' },
    { word: 'frustrated', meaning: 'frustrasi', example: 'Don\'t be frustrated.', difficulty: 'medium' },
    { word: 'relieved', meaning: 'lega', example: 'I felt relieved.', difficulty: 'medium' },
    { word: 'anxious', meaning: 'cemas', example: 'Feeling anxious.', difficulty: 'medium' },
    { word: 'embarrassed', meaning: 'malu', example: 'Don\'t feel embarrassed.', difficulty: 'medium' },
    { word: 'grateful', meaning: 'bersyukur', example: 'I\'m grateful.', difficulty: 'easy' },
    { word: 'reluctant', meaning: 'enggan/ragu', example: 'Reluctant to go.', difficulty: 'hard' },
    { word: 'eager', meaning: 'antusias', example: 'Eager to learn.', difficulty: 'medium' },
    { word: 'confused', meaning: 'bingung', example: 'I\'m confused.', difficulty: 'easy' },
    { word: 'amazed', meaning: 'terkesan', example: 'Amazed by the view.', difficulty: 'medium' }
  ],
  [
    { word: 'efficient', meaning: 'efisien', example: 'Efficient work.', difficulty: 'medium' },
    { word: 'essential', meaning: 'penting/diperlukan', example: 'Essential for success.', difficulty: 'medium' },
    { word: 'significant', meaning: 'penting/berarti', example: 'Significant change.', difficulty: 'hard' },
    { word: 'temporary', meaning: 'sementara', example: 'Temporary solution.', difficulty: 'medium' },
    { word: 'permanent', meaning: 'permanen', example: 'Permanent damage.', difficulty: 'medium' },
    { word: 'flexible', meaning: 'fleksibel', example: 'Flexible schedule.', difficulty: 'medium' },
    { word: 'relevant', meaning: 'relevan', example: 'Relevant information.', difficulty: 'medium' },
    { word: 'obvious', meaning: 'jelas', example: 'Obvious choice.', difficulty: 'easy' },
    { word: 'creative', meaning: 'kreatif', example: 'Creative solution.', difficulty: 'easy' },
    { word: 'logical', meaning: 'logis', example: 'Logical thinking.', difficulty: 'medium' }
  ],
  [
    { word: 'purchase', meaning: 'membeli', example: 'Purchase items.', difficulty: 'easy' },
    { word: 'afford', meaning: 'mampu membeli', example: 'Can afford it.', difficulty: 'medium' },
    { word: 'refund', meaning: 'pengembalian uang', example: 'Request a refund.', difficulty: 'medium' },
    { word: 'reservation', meaning: 'reservasi', example: 'Make a reservation.', difficulty: 'medium' },
    { word: 'destination', meaning: 'tujuan', example: 'Final destination.', difficulty: 'easy' },
    { word: 'departure', meaning: 'keberangkatan', example: 'Departure time.', difficulty: 'medium' },
    { word: 'arrival', meaning: 'kedatangan', example: 'Arrival tomorrow.', difficulty: 'easy' },
    { word: 'luggage', meaning: 'bagasi', example: 'Check luggage.', difficulty: 'easy' },
    { word: 'itinerary', meaning: 'rencana perjalanan', example: 'Detailed itinerary.', difficulty: 'hard' },
    { word: 'souvenir', meaning: 'kenang-kenangan', example: 'Buy souvenirs.', difficulty: 'medium' }
  ],
  [
    { word: 'device', meaning: 'perangkat', example: 'Mobile device.', difficulty: 'easy' },
    { word: 'privacy', meaning: 'privasi', example: 'Protect privacy.', difficulty: 'medium' },
    { word: 'security', meaning: 'keamanan', example: 'Security check.', difficulty: 'easy' },
    { word: 'update', meaning: 'pembaruan', example: 'System update.', difficulty: 'easy' },
    { word: 'feature', meaning: 'fitur', example: 'New feature.', difficulty: 'easy' },
    { word: 'glitch', meaning: 'gangguan teknis', example: 'Software glitch.', difficulty: 'medium' },
    { word: 'access', meaning: 'mengakses', example: 'Access denied.', difficulty: 'easy' },
    { word: 'account', meaning: 'akun', example: 'Create account.', difficulty: 'easy' },
    { word: 'upload', meaning: 'mengunggah', example: 'Upload file.', difficulty: 'easy' },
    { word: 'download', meaning: 'mengunduh', example: 'Download now.', difficulty: 'easy' }
  ],
  [
    { word: 'strategy', meaning: 'strategi', example: 'Winning strategy.', difficulty: 'medium' },
    { word: 'teammate', meaning: 'rekan satu tim', example: 'Help teammate.', difficulty: 'medium' },
    { word: 'objective', meaning: 'tujuan', example: 'Clear objective.', difficulty: 'hard' },
    { word: 'performance', meaning: 'performa', example: 'Good performance.', difficulty: 'medium' },
    { word: 'reaction', meaning: 'reaksi', example: 'Quick reaction.', difficulty: 'easy' },
    { word: 'opponent', meaning: 'lawan', example: 'Tough opponent.', difficulty: 'medium' },
    { word: 'victory', meaning: 'kemenangan', example: 'Victory celebrated.', difficulty: 'easy' },
    { word: 'defeat', meaning: 'kekalahan', example: 'Face defeat.', difficulty: 'easy' },
    { word: 'score', meaning: 'skor', example: 'High score.', difficulty: 'easy' },
    { word: 'champion', meaning: 'juara', example: 'Crowned champion.', difficulty: 'easy' }
  ],
  [
    { word: 'career', meaning: 'karier', example: 'Build a career.', difficulty: 'easy' },
    { word: 'employee', meaning: 'karyawan', example: 'Dedicated employee.', difficulty: 'easy' },
    { word: 'employer', meaning: 'pemberi kerja', example: 'Talk to employer.', difficulty: 'medium' },
    { word: 'deadline', meaning: 'batas waktu', example: 'Meet the deadline.', difficulty: 'easy' },
    { word: 'responsibility', meaning: 'tanggung jawab', example: 'Take responsibility.', difficulty: 'hard' },
    { word: 'skill', meaning: 'keterampilan', example: 'Develop skills.', difficulty: 'easy' },
    { word: 'salary', meaning: 'gaji', example: 'Negotiate salary.', difficulty: 'easy' },
    { word: 'interview', meaning: 'wawancara', example: 'Job interview.', difficulty: 'easy' },
    { word: 'promotion', meaning: 'promosi', example: 'Earn promotion.', difficulty: 'medium' },
    { word: 'retirement', meaning: 'pensiun', example: 'Early retirement.', difficulty: 'medium' }
  ],
  [
    { word: 'society', meaning: 'masyarakat', example: 'Modern society.', difficulty: 'medium' },
    { word: 'behavior', meaning: 'perilaku', example: 'Good behavior.', difficulty: 'medium' },
    { word: 'influence', meaning: 'pengaruh', example: 'Positive influence.', difficulty: 'medium' },
    { word: 'equality', meaning: 'kesetaraan', example: 'Gender equality.', difficulty: 'hard' },
    { word: 'conflict', meaning: 'konflik', example: 'Resolve conflict.', difficulty: 'medium' },
    { word: 'support', meaning: 'dukungan', example: 'Need support.', difficulty: 'easy' },
    { word: 'community', meaning: 'komunitas', example: 'Strong community.', difficulty: 'easy' },
    { word: 'environment', meaning: 'lingkungan', example: 'Protect environment.', difficulty: 'easy' },
    { word: 'culture', meaning: 'budaya', example: 'Rich culture.', difficulty: 'easy' },
    { word: 'tradition', meaning: 'tradisi', example: 'Ancient tradition.', difficulty: 'easy' }
  ]
];

const PHRASAL_VERBS = [
  { phrase: 'give up', meaning: 'menyerah', example: 'Don\'t give up!' },
  { phrase: 'find out', meaning: 'mengetahui/menemukan informasi', example: 'Find out the truth.' },
  { phrase: 'look after', meaning: 'merawat', example: 'Look after yourself.' },
  { phrase: 'run into', meaning: 'bertemu secara tidak sengaja', example: 'I ran into an old friend.' },
  { phrase: 'carry on', meaning: 'melanjutkan', example: 'Carry on with work.' },
  { phrase: 'figure out', meaning: 'memahami', example: 'Figure it out.' },
  { phrase: 'break down', meaning: 'merasa kewalahan/rusak', example: 'The car broke down.' },
  { phrase: 'come across', meaning: 'menemukan', example: 'Come across new ideas.' },
  { phrase: 'point out', meaning: 'menunjukkan', example: 'Point out the issue.' },
  { phrase: 'turn down', meaning: 'menolak', example: 'Turn down the offer.' },
  { phrase: 'set up', meaning: 'menyiapkan/mendirikan', example: 'Set up a meeting.' },
  { phrase: 'bring up', meaning: 'membesarkan/mengangkat topik', example: 'Bring up the topic.' },
  { phrase: 'put off', meaning: 'menunda', example: 'Don\'t put it off.' },
  { phrase: 'go through', meaning: 'mengalami', example: 'Go through the files.' },
  { phrase: 'call off', meaning: 'membatalkan', example: 'Call off the meeting.' }
];

const IDIOMS = [
  { phrase: 'a piece of cake', meaning: 'sangat mudah', example: 'This is a piece of cake!' },
  { phrase: 'break the ice', meaning: 'mencairkan suasana', example: 'Let\'s break the ice.' },
  { phrase: 'once in a blue moon', meaning: 'sangat jarang', example: 'I see him once in a blue moon.' },
  { phrase: 'under the weather', meaning: 'kurang sehat', example: 'I\'m under the weather today.' },
  { phrase: 'hit the nail on the head', meaning: 'tepat sasaran', example: 'You hit the nail on the head.' },
  { phrase: 'cost an arm and a leg', meaning: 'sangat mahal', example: 'That costs an arm and a leg.' },
  { phrase: 'rain cats and dogs', meaning: 'hujan lebat', example: 'It\'s raining cats and dogs.' },
  { phrase: 'spill the beans', meaning: 'membocorkan rahasia', example: 'Don\'t spill the beans.' },
  { phrase: 'pull someone\'s leg', meaning: 'bercanda/menggombal', example: 'I\'m just pulling your leg.' },
  { phrase: 'call it a day', meaning: 'selesaikan hari', example: 'Let\'s call it a day.' },
  { phrase: 'beat around the bush', meaning: 'memulur-mulur', example: 'Stop beating around the bush.' },
  { phrase: 'get the ball rolling', meaning: 'memulai sesuatu', example: 'Let\'s get the ball rolling.' },
  { phrase: 'on the ball', meaning: 'waspada/kompeten', example: 'She\'s always on the ball.' },
  { phrase: 'piece of cake', meaning: 'sangat mudah', example: 'It\'s a piece of cake!' },
  { phrase: 'back to the drawing board', meaning: 'memulai ulang', example: 'Back to the drawing board.' }
];

/**
 * Get topic by level
 */
function getTopicForLevel(level) {
  const topicIndex = (level - 1) % TOPICS.length;
  return TOPICS[topicIndex];
}

/**
 * Get vocabulary words for a specific level
 */
function getLevelVocabulary(level) {
  const bankIndex = (level - 1) % VOCABULARY_BANKS.length;
  return VOCABULARY_BANKS[bankIndex];
}

/**
 * Get phrasal verbs for level
 */
function getLevelPhrasals(level) {
  const count = CONFIG.QUIZ.PHRASAL;
  const startIdx = ((level - 1) % PHRASAL_VERBS.length);
  const result = [];
  for (let i = 0; i < count; i++) {
    const idx = (startIdx + i) % PHRASAL_VERBS.length;
    result.push(PHRASAL_VERBS[idx]);
  }
  return result;
}

/**
 * Get idioms for level
 */
function getLevelIdioms(level) {
  const count = CONFIG.QUIZ.IDIOM;
  const startIdx = ((level - 1) % IDIOMS.length);
  const result = [];
  for (let i = 0; i < count; i++) {
    const idx = (startIdx + i) % IDIOMS.length;
    result.push(IDIOMS[idx]);
  }
  return result;
}
