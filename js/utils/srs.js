/**
 * Spaced Repetition System (SRS)
 * Implements SM-2 algorithm for optimal learning
 */

class SpacedRepetitionSystem {
  constructor() {
    this.intervals = CONFIG.SRS.INTERVALS;
    this.easeFactor = CONFIG.SRS.EASE_FACTOR;
  }

  /**
   * Calculate next review date based on performance
   * Using SM-2 algorithm
   */
  calculateNextReview(currentData, quality) {
    // Quality: 0 (complete blackout) to 5 (perfect response)
    const interval = currentData.interval || 0;
    const easeFactor = currentData.easeFactor || this.easeFactor;
    const repetitions = currentData.repetitions || 0;

    let newEaseFactor = Math.max(
      1.3,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    let newInterval;
    if (quality < 3) {
      newInterval = 1;
    } else if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 3;
    } else {
      newInterval = Math.round(interval * newEaseFactor);
    }

    return {
      nextReviewDate: this.addDays(new Date(), newInterval),
      interval: newInterval,
      easeFactor: newEaseFactor,
      repetitions: repetitions + 1,
      lastReviewDate: new Date(),
      quality: quality
    };
  }

  /**
   * Get words due for review
   */
  getWordsForReview() {
    const srsData = db.getSRSData();
    const now = new Date();
    const dueWords = [];

    Object.entries(srsData).forEach(([wordId, data]) => {
      const nextReviewDate = new Date(data.nextReviewDate);
      if (nextReviewDate <= now) {
        dueWords.push({ wordId, ...data });
      }
    });

    return dueWords;
  }

  /**
   * Add days to a date
   */
  addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Get learning statistics
   */
  getLearningStats() {
    const srsData = db.getSRSData();
    const stats = {
      totalWords: Object.keys(srsData).length,
      learned: 0,
      learning: 0,
      new: 0,
      review: 0
    };

    const now = new Date();

    Object.values(srsData).forEach(data => {
      if (!data.repetitions) {
        stats.new++;
      } else if (data.repetitions >= 5) {
        stats.learned++;
      } else if (new Date(data.nextReviewDate) <= now) {
        stats.review++;
      } else {
        stats.learning++;
      }
    });

    return stats;
  }
}

const srs = new SpacedRepetitionSystem();
