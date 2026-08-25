/**
 * Database Manager
 * Handles all localStorage operations
 */

class DatabaseManager {
  constructor() {
    this.initializeStorage();
  }

  initializeStorage() {
    if (!this.get(CONFIG.STORAGE.USER_STATE)) {
      this.set(CONFIG.STORAGE.USER_STATE, {
        completedLevels: [],
        currentLevel: 1,
        totalXP: 0,
        streak: 0,
        lastActivityDate: new Date().toISOString()
      });
    }

    if (!this.get(CONFIG.STORAGE.STATISTICS)) {
      this.set(CONFIG.STORAGE.STATISTICS, {
        totalQuizzesCompleted: 0,
        averageAccuracy: 0,
        levelScores: {},
        wordsMastered: []
      });
    }

    if (!this.get(CONFIG.STORAGE.USER_PREFS)) {
      this.set(CONFIG.STORAGE.USER_PREFS, {
        darkMode: true,
        soundEnabled: true,
        autoPlayAudio: false
      });
    }
  }

  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error(`Error reading storage: ${key}`, error);
      return defaultValue;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing storage: ${key}`, error);
      return false;
    }
  }

  getUserState() {
    return this.get(CONFIG.STORAGE.USER_STATE);
  }

  updateUserState(state) {
    return this.set(CONFIG.STORAGE.USER_STATE, state);
  }

  getStatistics() {
    return this.get(CONFIG.STORAGE.STATISTICS);
  }

  updateStatistics(stats) {
    return this.set(CONFIG.STORAGE.STATISTICS, stats);
  }

  getPreferences() {
    return this.get(CONFIG.STORAGE.USER_PREFS);
  }

  updatePreferences(prefs) {
    return this.set(CONFIG.STORAGE.USER_PREFS, prefs);
  }

  clearAll() {
    localStorage.clear();
    this.initializeStorage();
  }
}

const db = new DatabaseManager();