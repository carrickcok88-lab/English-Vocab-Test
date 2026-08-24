/**
 * Database Manager
 * Handles all localStorage operations and data persistence
 */

class DatabaseManager {
  constructor() {
    this.initializeStorage();
  }

  /**
   * Initialize storage with default values if empty
   */
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
        totalLessonsCompleted: 0,
        totalQuizzesCompleted: 0,
        averageAccuracy: 0,
        levelScores: {},
        wordsMastered: [],
        wordsLearning: [],
        dailyStats: []
      });
    }

    if (!this.get(CONFIG.STORAGE.SRS_DATA)) {
      this.set(CONFIG.STORAGE.SRS_DATA, {});
    }

    if (!this.get(CONFIG.STORAGE.USER_PREFS)) {
      this.set(CONFIG.STORAGE.USER_PREFS, {
        darkMode: true,
        soundEnabled: true,
        autoPlayAudio: false,
        difficultyLevel: CONFIG.DIFFICULTY.MEDIUM,
        language: 'id'
      });
    }

    if (!this.get(CONFIG.STORAGE.ACHIEVEMENTS)) {
      this.set(CONFIG.STORAGE.ACHIEVEMENTS, {
        badges: [],
        milestones: []
      });
    }
  }

  /**
   * Get data from localStorage
   */
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error(`Error reading from storage: ${key}`, error);
      return defaultValue;
    }
  }

  /**
   * Set data to localStorage
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to storage: ${key}`, error);
      return false;
    }
  }

  /**
   * Get user state
   */
  getUserState() {
    return this.get(CONFIG.STORAGE.USER_STATE);
  }

  /**
   * Update user state
   */
  updateUserState(state) {
    return this.set(CONFIG.STORAGE.USER_STATE, state);
  }

  /**
   * Get statistics
   */
  getStatistics() {
    return this.get(CONFIG.STORAGE.STATISTICS);
  }

  /**
   * Update statistics
   */
  updateStatistics(stats) {
    return this.set(CONFIG.STORAGE.STATISTICS, stats);
  }

  /**
   * Get SRS data
   */
  getSRSData() {
    return this.get(CONFIG.STORAGE.SRS_DATA, {});
  }

  /**
   * Update SRS data for a word
   */
  updateSRSData(wordId, srsData) {
    const allSRS = this.getSRSData();
    allSRS[wordId] = srsData;
    return this.set(CONFIG.STORAGE.SRS_DATA, allSRS);
  }

  /**
   * Get user preferences
   */
  getUserPreferences() {
    return this.get(CONFIG.STORAGE.USER_PREFS);
  }

  /**
   * Update user preferences
   */
  updateUserPreferences(prefs) {
    return this.set(CONFIG.STORAGE.USER_PREFS, prefs);
  }

  /**
   * Get achievements
   */
  getAchievements() {
    return this.get(CONFIG.STORAGE.ACHIEVEMENTS);
  }

  /**
   * Add achievement badge
   */
  addBadge(badge) {
    const achievements = this.getAchievements();
    if (!achievements.badges.some(b => b.id === badge.id)) {
      achievements.badges.push(badge);
      this.set(CONFIG.STORAGE.ACHIEVEMENTS, achievements);
    }
    return achievements;
  }

  /**
   * Clear all data (reset)
   */
  clearAll() {
    localStorage.clear();
    this.initializeStorage();
  }

  /**
   * Export all data as JSON
   */
  exportData() {
    return {
      state: this.getUserState(),
      statistics: this.getStatistics(),
      srs: this.getSRSData(),
      prefs: this.getUserPreferences(),
      achievements: this.getAchievements(),
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Import data from JSON
   */
  importData(data) {
    try {
      if (data.state) this.set(CONFIG.STORAGE.USER_STATE, data.state);
      if (data.statistics) this.set(CONFIG.STORAGE.STATISTICS, data.statistics);
      if (data.srs) this.set(CONFIG.STORAGE.SRS_DATA, data.srs);
      if (data.prefs) this.set(CONFIG.STORAGE.USER_PREFS, data.prefs);
      if (data.achievements) this.set(CONFIG.STORAGE.ACHIEVEMENTS, data.achievements);
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
}

// Initialize global database instance
const db = new DatabaseManager();
