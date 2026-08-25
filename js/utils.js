/**
 * Utility Helper Functions
 */

const Utils = {
  // Shuffle array
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Random number
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Format percentage
  formatPercentage(value) {
    return Math.round(value) + '%';
  },

  // Format date
  formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Format time
  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hours, minutes, secs]
      .map(v => String(v).padStart(2, '0'))
      .join(':');
  },

  // Calculate XP
  calculateXP(accuracy, type) {
    const baseXP = {
      'Arti Kata': 10,
      'Konteks': 15,
      'Phrasal Verb': 20,
      'FINAL CHALLENGE': 30
    };
    const base = baseXP[type] || 10;
    const bonus = (accuracy / 100) * 10;
    return Math.round(base + bonus);
  },

  // Get performance level
  getPerformanceLevel(accuracy) {
    if (accuracy >= 90) return 'Sempurna! 🌟';
    if (accuracy >= 80) return 'Sangat Baik! 👏';
    if (accuracy >= 70) return 'Baik! 👍';
    if (accuracy >= 60) return 'Cukup 😊';
    return 'Perlu Latihan 💪';
  },

  // Deep clone
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  // Debounce
  debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
};