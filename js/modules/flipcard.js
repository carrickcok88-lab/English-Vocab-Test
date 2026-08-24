/**
 * Flipcard Module
 * Interactive flashcard learning experience with flip animations
 */

class FlipCard {
  constructor(word, meaning, example, difficulty = 'easy') {
    this.word = word;
    this.meaning = meaning;
    this.example = example;
    this.difficulty = difficulty;
    this.isFlipped = false;
  }

  /**
   * Create HTML structure for flipcard
   */
  render() {
    return `
      <div class="flipcard" data-word="${this.word}">
        <div class="flipcard-inner">
          <div class="flipcard-front">
            <div class="flipcard-content">
              <h2 class="flipcard-word">${this.word}</h2>
              <p class="flipcard-hint">Klik untuk lihat arti</p>
              <span class="difficulty-badge ${this.difficulty}">${this.difficulty}</span>
            </div>
          </div>
          <div class="flipcard-back">
            <div class="flipcard-content">
              <h3 class="flipcard-meaning">${this.meaning}</h3>
              <p class="flipcard-example">Contoh: <em>${this.example}</em></p>
              <div class="flipcard-actions">
                <button class="btn-audio" title="Dengarkan pengucapan">
                  <span>🔊</span>
                </button>
                <button class="btn-bookmark" title="Simpan">
                  <span>⭐</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Toggle flip state
   */
  toggle() {
    this.isFlipped = !this.isFlipped;
    return this.isFlipped;
  }
}

class FlipCardManager {
  constructor(container) {
    this.container = container;
    this.cards = [];
    this.currentIndex = 0;
    this.swipeStartX = 0;
    this.init();
  }

  /**
   * Initialize flipcard manager
   */
  init() {
    this.setupEventListeners();
  }

  /**
   * Add vocabulary words to flashcard deck
   */
  loadWords(words) {
    this.cards = words.map(w => 
      new FlipCard(w.word, w.meaning, w.example, w.difficulty)
    );
    this.currentIndex = 0;
    this.render();
  }

  /**
   * Render current flashcard
   */
  render() {
    if (this.cards.length === 0) return;

    const card = this.cards[this.currentIndex];
    this.container.innerHTML = `
      <div class="flipcard-container">
        <div class="flipcard-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((this.currentIndex + 1) / this.cards.length) * 100}%"></div>
          </div>
          <span class="progress-text">${this.currentIndex + 1} / ${this.cards.length}</span>
        </div>
        <div class="flipcard-deck">
          ${card.render()}
        </div>
        <div class="flipcard-navigation">
          <button class="btn btn-prev" ${this.currentIndex === 0 ? 'disabled' : ''}>← Sebelumnya</button>
          <button class="btn btn-skip">Lewati</button>
          <button class="btn btn-next" ${this.currentIndex === this.cards.length - 1 ? 'disabled' : ''}>Selanjutnya →</button>
        </div>
        <div class="flipcard-shortcuts">
          <small>💡 Gunakan keyboard: Space untuk flip, ← → untuk navigasi</small>
        </div>
      </div>
    `;

    this.attachCardListeners();
    this.attachNavigationListeners();
  }

  /**
   * Attach listeners to card
   */
  attachCardListeners() {
    const flipcard = this.container.querySelector('.flipcard');
    if (!flipcard) return;

    // Click to flip
    flipcard.addEventListener('click', (e) => {
      if (e.target.closest('.flipcard-actions button')) return;
      this.flipCard(flipcard);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.flipCard(flipcard);
      }
      if (e.code === 'ArrowRight') this.nextCard();
      if (e.code === 'ArrowLeft') this.prevCard();
    });

    // Audio button
    flipcard.querySelector('.btn-audio')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playAudio(this.cards[this.currentIndex].word);
    });

    // Bookmark button
    flipcard.querySelector('.btn-bookmark')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleBookmark(this.cards[this.currentIndex].word);
    });
  }

  /**
   * Attach listeners to navigation buttons
   */
  attachNavigationListeners() {
    const btnPrev = this.container.querySelector('.btn-prev');
    const btnNext = this.container.querySelector('.btn-next');
    const btnSkip = this.container.querySelector('.btn-skip');

    btnPrev?.addEventListener('click', () => this.prevCard());
    btnNext?.addEventListener('click', () => this.nextCard());
    btnSkip?.addEventListener('click', () => this.nextCard());
  }

  /**
   * Flip card with animation
   */
  flipCard(flipcard) {
    flipcard.classList.toggle('flipped');
    this.cards[this.currentIndex].toggle();
  }

  /**
   * Navigate to next card
   */
  nextCard() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.render();
    }
  }

  /**
   * Navigate to previous card
   */
  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  }

  /**
   * Jump to specific card
   */
  goToCard(index) {
    if (index >= 0 && index < this.cards.length) {
      this.currentIndex = index;
      this.render();
    }
  }

  /**
   * Play audio pronunciation
   */
  playAudio(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }

  /**
   * Toggle bookmark for word
   */
  toggleBookmark(word) {
    const stats = db.getStatistics();
    const index = stats.wordsMastered.indexOf(word);
    
    if (index > -1) {
      stats.wordsMastered.splice(index, 1);
    } else {
      stats.wordsMastered.push(word);
    }
    
    db.updateStatistics(stats);
    const btn = this.container.querySelector('.btn-bookmark');
    btn?.classList.toggle('bookmarked');
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Touch swipe support
    this.container.addEventListener('touchstart', (e) => {
      this.swipeStartX = e.touches[0].clientX;
    });

    this.container.addEventListener('touchend', (e) => {
      const swipeEndX = e.changedTouches[0].clientX;
      const diff = this.swipeStartX - swipeEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.nextCard();
        else this.prevCard();
      }
    });
  }
}
