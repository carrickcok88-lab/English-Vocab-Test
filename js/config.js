/**
 * Global Configuration
 * Centralized settings for the entire application
 */

const CONFIG = {
  // Application Settings
  APP_NAME: 'VocabForge 100',
  APP_VERSION: '2.0.0',
  TOTAL_LEVELS: 100,
  WORDS_PER_LEVEL: 10,
  QUESTIONS_PER_QUIZ: 45,
  PASS_SCORE: 70,
  
  // SRS Settings (Spaced Repetition System)
  SRS: {
    INTERVALS: [1, 3, 7, 14, 30],
    EASE_FACTOR: 2.5,
    INITIAL_INTERVAL: 1,
    EASY_BONUS: 1.3,
    HARD_PENALTY: 0.6
  },
  
  // Quiz Settings
  QUIZ: {
    WORD_MEANING: 10,
    CONTEXT: 10,
    PHRASAL: 10,
    IDIOM: 5,
    TOTAL: 45
  },
  
  // UI Settings
  UI: {
    ANIMATION_DURATION: 300,
    TRANSITION_SPEED: 0.25,
    FLIPCARD_DURATION: 600
  },
  
  // Storage Keys
  STORAGE: {
    USER_STATE: 'vf_state',
    CURRENT_LEVEL: 'vf_level',
    SRS_DATA: 'vf_srs',
    STATISTICS: 'vf_stats',
    USER_PREFS: 'vf_prefs',
    ACHIEVEMENTS: 'vf_achievements'
  },
  
  // Question Types
  QUESTION_TYPES: {
    MEANING: 'Arti Kata',
    CONTEXT: 'Konteks',
    PHRASAL: 'Phrasal Verb',
    IDIOM: 'FINAL CHALLENGE'
  }
};