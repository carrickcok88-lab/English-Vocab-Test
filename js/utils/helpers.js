/**
 * Utility Helper Functions
 */

class Helpers {
  /**
   * Shuffle array using Fisher-Yates algorithm
   */
  static shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * Random number between min and max
   */
  static random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Format percentage
   */
  static formatPercentage(value) {
    return Math.round(value) + '%';
  }

  /**
   * Format date to readable string
   */
  static formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Format time (HH:MM:SS)
   */
  static formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hours, minutes, secs]
      .map(v => String(v).padStart(2, '0'))
      .join(':');
  }

  /**
   * Calculate XP based on performance
   */
  static calculateXP(accuracy, questionType) {
    const baseXP = {
      [CONFIG.QUESTION_TYPES.MEANING]: 10,
      [CONFIG.QUESTION_TYPES.CONTEXT]: 15,
      [CONFIG.QUESTION_TYPES.PHRASAL]: 20,
      [CONFIG.QUESTION_TYPES.IDIOM]: 30
    };

    const base = baseXP[questionType] || 10;
    const bonus = (accuracy / 100) * 10;
    return Math.round(base + bonus);
  }

  /**
   * Get performance level text
   */
  static getPerformanceLevel(accuracy) {
    if (accuracy >= 90) return 'Sempurna!';
    if (accuracy >= 80) return 'Sangat Baik';
    if (accuracy >= 70) return 'Baik';
    if (accuracy >= 60) return 'Cukup';
    return 'Perlu Latihan';
  }

  /**
   * Get performance level color
   */
  static getPerformanceColor(accuracy) {
    if (accuracy >= 90) return 'var(--good)';
    if (accuracy >= 80) return 'var(--c)';
    if (accuracy >= 70) return 'var(--p)';
    if (accuracy >= 60) return 'var(--warn)';
    return 'var(--bad)';
  }

  /**
   * Check if streak should be maintained
   */
  static isStreakValid(lastActivityDate) {
    const last = new Date(lastActivityDate);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return last >= yesterday;
  }

  /**
   * Debounce function
   */
  static debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  /**
   * Throttle function
   */
  static throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        func.apply(this, args);
        lastCall = now;
      }
    };
  }

  /**
   * Deep clone object
   */
  static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
